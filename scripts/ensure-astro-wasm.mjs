/**
 * Smart App Control (Windows 11) bloquea el binario nativo sin firmar del
 * compilador de Astro, y `astro dev` / `astro build` mueren con un engañoso
 * "Cannot find native binding".
 *
 * El loader de @astrojs/compiler-binding ya cae al binding WASM cuando el
 * nativo falla, pero npm nunca llega a instalarlo: el paquete declara
 * `cpu: wasm32` y npm lo descarta en una máquina x64.
 *
 * Este postinstall lo instala a mano, solo en Windows y solo si el nativo está
 * realmente bloqueado. En Linux, macOS y CI no hace absolutamente nada, así que
 * no afecta al pipeline ni a otras máquinas. Nunca falla la instalación: si no
 * puede arreglarlo, avisa y sale con 0.
 */

import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";

const WASM_PKG = "@astrojs/compiler-binding-wasm32-wasi";
const NATIVE_PKG = {
  x64: "@astrojs/compiler-binding-win32-x64-msvc",
  arm64: "@astrojs/compiler-binding-win32-arm64-msvc",
  ia32: "@astrojs/compiler-binding-win32-ia32-msvc",
};

const require = createRequire(import.meta.url);
const projectRoot = path.resolve(fileURLToPath(import.meta.url), "../..");

/** Versión instalada de un paquete, o null si no se resuelve. */
function versionOf(pkg) {
  try {
    return require(`${pkg}/package.json`).version;
  } catch {
    return null;
  }
}

if (process.platform !== "win32") process.exit(0);

const bindingVersion = versionOf("@astrojs/compiler-binding");
if (!bindingVersion) process.exit(0); // Astro no está instalado todavía.

const nativePkg = NATIVE_PKG[process.arch];
if (!nativePkg) process.exit(0);

// Si el nativo carga, no hay nada que arreglar.
try {
  require(nativePkg);
  process.exit(0);
} catch {}

// Si el WASM ya está y coincide en versión, tampoco. Esto además corta la
// recursión: el `npm install` de abajo vuelve a disparar este postinstall.
if (versionOf(WASM_PKG) === bindingVersion) process.exit(0);

console.warn(
  `[astro] binario nativo no disponible (${nativePkg}); instalando fallback WASM ${WASM_PKG}@${bindingVersion}`,
);

// --force salta el filtro EBADPLATFORM de npm (cpu: wasm32 en un host x64) y
// --no-save deja package.json intacto: esto es un parche local de máquina, no
// una dependencia del proyecto.
//
// El lockfile SÍ se respeta durante la resolución (sin él npm re-resolvería
// todo el árbol a las últimas versiones y `npm ci` dejaría de ser
// reproducible), pero npm lo reescribe para añadir el paquete, así que lo
// restauramos byte a byte al terminar.
const lockPath = path.join(projectRoot, "package-lock.json");
const lockBackup = fs.existsSync(lockPath) ? fs.readFileSync(lockPath) : null;

const npmExecPath = process.env.npm_execpath;
const [command, baseArgs] = npmExecPath
  ? [process.execPath, [npmExecPath]]
  : ["npm.cmd", []];

let result;
try {
  result = spawnSync(
    command,
    [
      ...baseArgs,
      "install",
      `${WASM_PKG}@${bindingVersion}`,
      "--no-save",
      "--ignore-scripts",
      "--force",
      "--no-audit",
      "--no-fund",
    ],
    { cwd: projectRoot, stdio: "inherit" },
  );
} finally {
  if (lockBackup) fs.writeFileSync(lockPath, lockBackup);
}

if (result?.status !== 0) {
  console.warn(
    `[astro] no se pudo instalar ${WASM_PKG}. Ejecútalo a mano:\n` +
      `  npm install ${WASM_PKG}@${bindingVersion} --no-save --force`,
  );
}

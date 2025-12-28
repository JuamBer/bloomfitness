// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://bloomfitness.es",
  base: "/",
  output: "static",
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});

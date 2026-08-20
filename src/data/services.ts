import { type ImageMetadata } from "astro";
import serviceImage from "../assets/banner.webp";

export interface Tariff {
  id: string;
  name: string;
  price: number;
  billingPeriod: "session" | "month" | "year" | "package";
}

export interface ServiceOffering {
  title: string;
  slug: string;
  description: string;
  image: ImageMetadata;
  googleCategory: string;
  tariffs: Tariff[];
}

export const services: ServiceOffering[] = [
  {
    title: "Entrenamiento",
    slug: "entrenamiento",
    description:
      "Entrenamiento personal y grupal en Mislata con valoración funcional, plan progresivo y seguimiento profesional.",
    image: serviceImage,
    googleCategory: "Servicios > Servicios recreativos > Clases y entrenamiento deportivo",
    tariffs: [
      {
        id: "entrenamiento-vaf",
        name: "Valoración Funcional (VAF)",
        price: 45,
        billingPeriod: "session",
      },
      {
        id: "entrenamiento-grupal-1-sesion-mensual",
        name: "Grupal - 1 sesión/semana (mensual)",
        price: 60,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-grupal-2-sesiones-mensual",
        name: "Grupal - 2 sesiones/semana (mensual)",
        price: 85,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-grupal-3-sesiones-mensual",
        name: "Grupal - 3 sesiones/semana (mensual)",
        price: 105,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-grupal-tarifa-plana-mensual",
        name: "Grupal - Tarifa Plana (mensual)",
        price: 120,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-individual-1-sesion",
        name: "Individual - 1 Sesión",
        price: 32.5,
        billingPeriod: "session",
      },
      {
        id: "entrenamiento-individual-5-sesiones-mes",
        name: "Individual - 5 Sesiones/Mes",
        price: 150,
        billingPeriod: "month",
      },
    ],
  },
  {
    title: "Fisioterapia",
    slug: "fisioterapia",
    description:
      "Fisioterapia en Mislata para dolor, lesiones y readaptación. Sesiones, bonos y programas con seguimiento profesional.",
    image: serviceImage,
    googleCategory: "Servicios > Servicios de cuidado personal > Servicios de salud",
    tariffs: [
      {
        id: "fisioterapia-sesion-completa",
        name: "Sesión Completa",
        price: 45,
        billingPeriod: "session",
      },
      {
        id: "fisioterapia-sesion-completa-domicilio",
        name: "Sesión Completa - Domicilio",
        price: 50,
        billingPeriod: "session",
      },
      {
        id: "fisioterapia-sesion-seguimiento",
        name: "Sesión Seguimiento",
        price: 32,
        billingPeriod: "session",
      },
      {
        id: "fisioterapia-sesion-seguimiento-domicilio",
        name: "Sesión Seguimiento - Domicilio",
        price: 37,
        billingPeriod: "session",
      },
      {
        id: "fisioterapia-informe-clinico",
        name: "Informe Clínico",
        price: 30,
        billingPeriod: "session",
      },
      {
        id: "fisioterapia-bono-5-sesiones",
        name: "Bono 05 Sesiones",
        price: 215,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-bono-5-sesiones-domicilio",
        name: "Bono 05 Sesiones - Domicilio",
        price: 240,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-bono-10-sesiones",
        name: "Bono 10 Sesiones",
        price: 420,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-bono-10-sesiones-domicilio",
        name: "Bono 10 Sesiones - Domicilio",
        price: 470,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-8-semanas",
        name: "Programa 08 Semanas (16 Sesiones)",
        price: 656,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-8-semanas-domicilio",
        name: "Programa 08 Semanas (16 Sesiones) - Domicilio",
        price: 736,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-12-semanas",
        name: "Programa 12 Semanas (24 Sesiones)",
        price: 960,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-12-semanas-domicilio",
        name: "Programa 12 Semanas (24 Sesiones) - Domicilio",
        price: 1080,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-24-semanas",
        name: "Programa 24 Semanas (48 Sesiones)",
        price: 1872,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-24-semanas-domicilio",
        name: "Programa 24 Semanas (48 Sesiones) - Domicilio",
        price: 2112,
        billingPeriod: "package",
      },
    ],
  },
  {
    title: "Nutrición",
    slug: "nutricion",
    description:
      "Asesoramiento nutricional personalizado en Mislata para complementar tu entrenamiento y optimizar tus resultados.",
    image: serviceImage,
    googleCategory: "Servicios > Servicios de cuidado personal > Servicios de nutrición y dietética",
    tariffs: [
      {
        id: "nutricion-sesion-inicial",
        name: "Sesión Inicial",
        price: 65,
        billingPeriod: "session",
      },
      {
        id: "nutricion-sesion-inicial-online",
        name: "Sesión Inicial (Online)",
        price: 50,
        billingPeriod: "session",
      },
      {
        id: "nutricion-duo-sesion-inicial",
        name: "Duo Sesión Inicial",
        price: 55,
        billingPeriod: "session",
      },
      {
        id: "nutricion-duo-sesion-inicial-online",
        name: "Duo Sesión Inicial (Online)",
        price: 40,
        billingPeriod: "session",
      },
      {
        id: "nutricion-revision",
        name: "Revisión",
        price: 45,
        billingPeriod: "session",
      },
      {
        id: "nutricion-revision-online",
        name: "Revisión (Online)",
        price: 35,
        billingPeriod: "session",
      },
      {
        id: "nutricion-duo-revision",
        name: "Duo Revisión",
        price: 40,
        billingPeriod: "session",
      },
      {
        id: "nutricion-duo-revision-online",
        name: "Duo Revisión (Online)",
        price: 30,
        billingPeriod: "session",
      },
    ],
  },
];

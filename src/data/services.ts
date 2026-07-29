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
        price: 40,
        billingPeriod: "session",
      },
      {
        id: "entrenamiento-grupal-1-sesion-mensual",
        name: "Grupal - 1 sesión/semana (mensual)",
        price: 50,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-grupal-2-sesiones-mensual",
        name: "Grupal - 2 sesiones/semana (mensual)",
        price: 70,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-grupal-3-sesiones-mensual",
        name: "Grupal - 3 sesiones/semana (mensual)",
        price: 90,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-grupal-tarifa-plana-mensual",
        name: "Grupal - Tarifa Plana (mensual)",
        price: 110,
        billingPeriod: "month",
      },
      {
        id: "entrenamiento-grupal-1-sesion-anual",
        name: "Grupal - 1 sesión/semana (anual)",
        price: 480,
        billingPeriod: "year",
      },
      {
        id: "entrenamiento-grupal-2-sesiones-anual",
        name: "Grupal - 2 sesiones/semana (anual)",
        price: 675,
        billingPeriod: "year",
      },
      {
        id: "entrenamiento-grupal-3-sesiones-anual",
        name: "Grupal - 3 sesiones/semana (anual)",
        price: 865,
        billingPeriod: "year",
      },
      {
        id: "entrenamiento-grupal-tarifa-plana-anual",
        name: "Grupal - Tarifa Plana (anual)",
        price: 975,
        billingPeriod: "year",
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
        id: "fisioterapia-sesion-30min",
        name: "Sesión 30 minutos",
        price: 25,
        billingPeriod: "session",
      },
      {
        id: "fisioterapia-sesion-60min",
        name: "Sesión 60 minutos",
        price: 38,
        billingPeriod: "session",
      },
      {
        id: "fisioterapia-bono-5-sesiones",
        name: "Bono 5 Sesiones",
        price: 180,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-bono-10-sesiones",
        name: "Bono 10 Sesiones",
        price: 350,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-8-semanas",
        name: "Programa 8 Semanas (16 Sesiones)",
        price: 544,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-12-semanas",
        name: "Programa 12 Semanas (24 Sesiones)",
        price: 792,
        billingPeriod: "package",
      },
      {
        id: "fisioterapia-programa-24-semanas",
        name: "Programa 24 Semanas (48 Sesiones)",
        price: 1536,
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
        id: "nutricion-revision",
        name: "Revisión",
        price: 45,
        billingPeriod: "session",
      },
    ],
  },
];

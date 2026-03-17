import faithCarmin1 from "../assets/products/faith-moves-mountains/faith-moves-mountains-carmin-1.png";
import faithCarmin2 from "../assets/products/faith-moves-mountains/faith-moves-mountains-carmin-2.png";
import faithPizarra1 from "../assets/products/faith-moves-mountains/faith-moves-mountains-pizarra-1.png";
import faithPizarra2 from "../assets/products/faith-moves-mountains/faith-moves-mountains-pizarra-2.png";
import faithTurquesa1 from "../assets/products/faith-moves-mountains/faith-moves-mountains-turquesa-1.png";
import faithTurquesa2 from "../assets/products/faith-moves-mountains/faith-moves-mountains-turquesa-2.png";

import bloomCarmin1 from "../assets/products/go-to-bloom/go-to-bloom-carmin-1.png";
import bloomCarmin2 from "../assets/products/go-to-bloom/go-to-bloom-carmin-2.png";
import bloomPizarra1 from "../assets/products/go-to-bloom/go-to-bloom-pizarra-1.png";
import bloomPizarra2 from "../assets/products/go-to-bloom/go-to-bloom-pizarra-2.png";
import bloomTurquesa1 from "../assets/products/go-to-bloom/go-to-bloom-turquesa-1.png";
import bloomTurquesa2 from "../assets/products/go-to-bloom/go-to-bloom-turquesa-2.png";

import mentalCarmin1 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-carmin-1.png";
import mentalCarmin2 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-carmin-2.png";
import mentalPizarra1 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-pizarra-1.png";
import mentalPizarra2 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-pizarra-2.png";
import mentalTurquesa1 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-turquesa-1.png";
import mentalTurquesa2 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-turquesa-2.png";

export interface Product {
  title: string;
  slug: string;
  price: string;
  description: string;
  colors: string[];
  sizes: string[];
  images: Record<string, ImageMetadata[]>;
  variants: Record<string, Record<string, number>>;
  googleCategory?: string;
  gender?: string;
  ageGroup?: string;
  sizeSystem?: string;
  sizeType?: string;
  sizeGuideByColor?: SizeGuideByColor;
}

type SizeGuideByColor = Record<string, "anbor-bronx" | "jhk">;

const colors = ["Gris Pizarra", "Rojo Carmín", "Azul Turquesa"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const defaultSizeGuideByColor: SizeGuideByColor = {
  "Gris Pizarra": "anbor-bronx",
  "Rojo Carmín": "anbor-bronx",
  "Azul Turquesa": "jhk",
};

const defaultClothingMetadata = {
  googleCategory: "Ropa y accesorios > Ropa > Camisetas y tops",
  gender: "unisex",
  ageGroup: "adult",
  sizeSystem: "EU",
  sizeType: "oversize",
  sizeGuideByColor: defaultSizeGuideByColor,
};

export const baseBuyLink =
  "https://web.timp.pro/home/18931/branch_building/siblings#/home/18931/branch_building/store/item/";

export const products: Product[] = [
  {
    title: "Faith Moves Mountains",
    slug: "faith-moves-mountains",
    price: "25€",
    description:
      "Una camiseta diseñada para recordarte que con fe y esfuerzo, no hay obstáculo insuperable.",
    colors: colors,
    sizes: sizes,
    images: {
      "Gris Pizarra": [faithPizarra1, faithPizarra2],
      "Rojo Carmín": [faithCarmin1, faithCarmin2],
      "Azul Turquesa": [faithTurquesa1, faithTurquesa2],
    },
    variants: {
      "Gris Pizarra": { S: 38645, M: 38646, L: 38647, XL: 38648, XXL: 38649 },
      "Rojo Carmín": { S: 38650, M: 38651, L: 38652, XL: 38653, XXL: 38654 },
      "Azul Turquesa": {
        XS: 39513,
        S: 38655,
        M: 38656,
        L: 38657,
        XL: 38658,
        XXL: 38659,
      },
    },
    ...defaultClothingMetadata,
  },
  {
    title: "Go to Bloom",
    slug: "go-to-bloom",
    price: "25€",
    description:
      "La esencia de Bloom Fitness en una prenda. Únete a la comunidad y lleva tu entrenamiento al siguiente nivel.",
    colors: colors,
    sizes: sizes,
    images: {
      "Gris Pizarra": [bloomPizarra1, bloomPizarra2],
      "Rojo Carmín": [bloomCarmin1, bloomCarmin2],
      "Azul Turquesa": [bloomTurquesa1, bloomTurquesa2],
    },
    variants: {
      "Gris Pizarra": { S: 38660, M: 38661, L: 38662, XL: 38663, XXL: 38664 },
      "Rojo Carmín": { S: 38665, M: 38666, L: 38667, XL: 38668, XXL: 38669 },
      "Azul Turquesa": {
        XS: 39516,
        S: 38670,
        M: 38671,
        L: 38672,
        XL: 38673,
        XXL: 38674,
      },
    },
    ...defaultClothingMetadata,
  },
  {
    title: "Your Only Limit is Mental",
    slug: "your-only-limit-is-mental",
    price: "25€",
    description:
      "Derriba tus barreras mentales. Esta camiseta es tu armadura para esos días en los que necesitas un empujón extra.",
    colors: colors,
    sizes: sizes,
    images: {
      "Gris Pizarra": [mentalPizarra1, mentalPizarra2],
      "Rojo Carmín": [mentalCarmin1, mentalCarmin2],
      "Azul Turquesa": [mentalTurquesa1, mentalTurquesa2],
    },
    variants: {
      "Gris Pizarra": { S: 38675, M: 38676, L: 38677, XL: 38678, XXL: 38680 },
      "Rojo Carmín": { S: 38681, M: 38682, L: 38683, XL: 38684, XXL: 38685 },
      "Azul Turquesa": {
        XS: 39519,
        S: 38686,
        M: 38687,
        L: 38688,
        XL: 38689,
        XXL: 38690,
      },
    },
    ...defaultClothingMetadata,
  },
];

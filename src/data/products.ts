import faith1 from "../assets/products/faith-moves-mountains/faith-moves-mountains-1.png";
import faith2 from "../assets/products/faith-moves-mountains/faith-moves-mountains-2.png";
import bloom1 from "../assets/products/go-to-bloom/go-to-bloom-1.png";
import bloom2 from "../assets/products/go-to-bloom/go-to-bloom-2.png";
import mental1 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-1.png";
import mental2 from "../assets/products/your-only-limit-is-mental/your-only-limit-is-mental-2.png";

export interface Product {
  title: string;
  slug: string;
  price: string;
  description: string;
  colors: string[];
  sizes: string[];
  images: ImageMetadata[];
  variants: Record<string, Record<string, number>>;
  googleCategory?: string;
  gender?: string;
  ageGroup?: string;
  sizeSystem?: string;
  sizeType?: string;
}

const colors = ["Gris Pizarra", "Rojo Carmín", "Azul Turquesa"];
const sizes = ["S", "M", "L", "XL", "XXL"];

const defaultClothingMetadata = {
  googleCategory: "Ropa y accesorios > Ropa > Camisetas y tops",
  gender: "unisex",
  ageGroup: "adult",
  sizeSystem: "EU",
  sizeType: "oversize",
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
    images: [faith1, faith2],
    variants: {
      "Gris Pizarra": { S: 38645, M: 38646, L: 38647, XL: 38648, XXL: 38649 },
      "Rojo Carmín": { S: 38650, M: 38651, L: 38652, XL: 38653, XXL: 38654 },
      "Azul Turquesa": { S: 38655, M: 38656, L: 38657, XL: 38658, XXL: 38659 },
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
    images: [bloom1, bloom2],
    variants: {
      "Gris Pizarra": { S: 38660, M: 38661, L: 38662, XL: 38663, XXL: 38664 },
      "Rojo Carmín": { S: 38665, M: 38666, L: 38667, XL: 38668, XXL: 38669 },
      "Azul Turquesa": { S: 38670, M: 38671, L: 38672, XL: 38673, XXL: 38674 },
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
    images: [mental1, mental2],
    variants: {
      "Gris Pizarra": { S: 38676, M: 38677, L: 38678, XL: 38679, XXL: 38680 },
      "Rojo Carmín": { S: 38681, M: 38682, L: 38683, XL: 38684, XXL: 38685 },
      "Azul Turquesa": { S: 38686, M: 38687, L: 38688, XL: 38689, XXL: 38690 },
    },
    ...defaultClothingMetadata,
  },
];

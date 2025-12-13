import type { ImageMetadata } from "astro";

import daniValenciaPhoto from "../assets/professionals/dani-valencia.jpg";
import franSaezPhoto from "../assets/professionals/fran-saez.jpg";
import gabrielMartinezPhoto from "../assets/professionals/gabriel-martinez.jpg";
import javierSanchezPhoto from "../assets/professionals/javier-sanchez.jpg";
import joseSaezPhoto from "../assets/professionals/jose-saez.jpg";

import blueDot from "../assets/dots/blue-dot.png";
import orangeDot from "../assets/dots/orange-dot.png";
import redDot from "../assets/dots/red-dot.png";

export interface Review {
  name: string;
  comment: string;
}

export interface Professional {
  slug: string;
  name: string;
  area: string;
  description: string;
  image: ImageMetadata | null;
  dot: ImageMetadata;
  comingSoon?: boolean;
  history?: string;
  reviews?: Review[];
}

export const professionals: Professional[] = [
  {
    slug: "jose-saez",
    name: "JOSE SÁEZ",
    area: "FISIOTERAPEUTA",
    description:
      "TE AYUDARÁ A RECUPERAR LA FUNCIONALIDAD Y BIENESTAR DESDE UN ENFOQUE ACTIVO",
    image: joseSaezPhoto,
    dot: orangeDot,
    history:
      "José descubrió su pasión por la fisioterapia tras superar una lesión deportiva que le mantuvo apartado del deporte durante meses. Esa experiencia le enseñó la importancia de un enfoque activo en la recuperación. Graduado en Fisioterapia por la Universidad de Valencia, ha dedicado su carrera a ayudar a personas a recuperar su funcionalidad y bienestar. Su filosofía se basa en empoderar al paciente para que sea parte activa de su recuperación, combinando técnicas manuales con ejercicio terapéutico personalizado.",
    reviews: [],
  },
  {
    slug: "fran-saez",
    name: "FRAN SÁEZ",
    area: "ENTRENADOR PERSONAL",
    description:
      "FRAN LLEVARÁ TUS ENTRENAMIENTOS ADAPTADOS Y TE COMPAÑARÁ A CUMPLIR TUS OBJETIVOS",
    image: franSaezPhoto,
    dot: blueDot,
    history:
      "Fran siempre tuvo claro que quería dedicarse al fitness, pero su visión iba más allá de los gimnasios convencionales. Tras formarse como entrenador personal y especializarse en entrenamiento de fuerza, fundó Bloom Fitness con la idea de crear un espacio donde cada persona recibiera atención individualizada. Su metodología se centra en construir bases sólidas, priorizando la técnica y el progreso sostenible. Para Fran, el entrenamiento es una herramienta de transformación que va más allá de lo físico.",
    reviews: [
      {
        name: "Trini Gimenez Rabadan",
        comment:
          "Como siempre genial siempre pendiente de tus limitaciones para acoplar los entrenamientos. Como en casa",
      },
      {
        name: "Lourdes Alvarez",
        comment:
          "Espectacular. Entrenar en Bloom de verdad que es poder entrenar. Para mí era algo imposible y ellos lo han hecho posible. Gracias equipo de Bloom!!!",
      },
      {
        name: "Concha Martinez",
        comment:
          "Un profesional, su trabajo lo hace con cariño y se ajusta a tus necesidades y no se hace pesado, muy contenta por todo sobre todo el trato que da a todas la personas de 10",
      },
    ],
  },
  {
    slug: "daniel-valencia",
    name: "DANIEL VALENCIA",
    area: "ENTRENADOR PERSONAL",
    description:
      "DANIEL DISEÑARÁ ENTRENAMIENTOS PERSONALIZADOS Y TE GUIARÁ HACIA TUS METAS",
    image: daniValenciaPhoto,
    dot: redDot,
    history:
      "Daniel encontró en el entrenamiento una forma de superar momentos difíciles en su vida, y desde entonces supo que quería ayudar a otros a experimentar esa misma transformación. Con formación en Ciencias de la Actividad Física y especialización en entrenamiento funcional, Daniel diseña programas que se adaptan a las necesidades y objetivos únicos de cada persona. Su energía y motivación son contagiosas, creando un ambiente donde superarse se convierte en algo natural.",
    reviews: [
      {
        name: "Maricarmen Ibañez",
        comment:
          "Dani, está pendiente en todo momento de ti, preocupándose de cómo me sientan los ejercicios",
      },
      {
        name: "Trini Gimenez Rabadan",
        comment:
          "Como siempre pendiente de todos los que estamos allí y preocupándose si tenemos algún problema. Un cielo",
      },
    ],
  },
  {
    slug: "gabriel-martinez",
    name: "GABRIEL MARTÍNEZ",
    area: "ENTRENADOR PERSONAL",
    description:
      "GABRIEL CREARÁ RUTINAS A TU MEDIDA Y TE APOYARÁ EN TU PROGRESO",
    image: gabrielMartinezPhoto,
    dot: blueDot,
    history:
      "Gabriel descubrió el mundo del fitness durante su etapa universitaria y quedó fascinado por la ciencia detrás del entrenamiento. Su enfoque metódico y basado en evidencia le ha convertido en un experto en crear rutinas eficientes que maximizan resultados en el menor tiempo posible. Gabriel cree firmemente que el entrenamiento debe integrarse en la vida de las personas de forma sostenible, sin sacrificar otras áreas importantes. Su atención al detalle y seguimiento constante garantizan que cada cliente progrese de forma segura y consistente.",
    reviews: [],
  },
  {
    slug: "javier-sanchez",
    name: "JAVIER SÁNCHEZ",
    area: "NUTRICIONISTA",
    description:
      "JAVIER TE ASESORARÁ PARA MEJORAR TUS HÁBITOS ALIMENTICIOS Y TU SALUD",
    image: javierSanchezPhoto,
    dot: orangeDot,
    history:
      "Javier siempre estuvo interesado en cómo la alimentación afecta no solo al cuerpo, sino también a la mente y el bienestar general. Graduado en Nutrición Humana y Dietética, ha complementado su formación con especializaciones en nutrición deportiva y comportamiento alimentario. Su filosofía se aleja de las dietas restrictivas, enfocándose en educar y crear hábitos sostenibles que se mantengan en el tiempo. Para Javier, comer bien no es sinónimo de sufrir, sino de disfrutar de la comida mientras cuidas tu salud.",
    reviews: [],
  },
];

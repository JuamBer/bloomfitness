import type { ImageMetadata } from "astro";

import daniValenciaPhoto from "../assets/professionals/dani-valencia.webp";
import franSaezPhoto from "../assets/professionals/fran-saez.webp";
import gabrielMartinezPhoto from "../assets/professionals/gabriel-martinez.webp";
import javierSanchezPhoto from "../assets/professionals/javier-sanchez.webp";
import joseSaezPhoto from "../assets/professionals/jose-saez.webp";

import blueDot from "../assets/dots/blue-dot.webp";
import orangeDot from "../assets/dots/orange-dot.webp";
import redDot from "../assets/dots/red-dot.webp";

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
  whatsapp?: string;
  email?: string;
}

export enum ProfessionalArea {
  FISIOTERAPIA = "Fisioterapeuta",
  ENTRENADOR_PERSONAL = "Entrenador Personal",
  NUTRICIONISTA = "Nutricionista",
}

export const professionals: Professional[] = [
  {
    slug: "jose-saez",
    name: "José Sáez García",
    area: ProfessionalArea.FISIOTERAPIA,
    whatsapp: "693202546",
    email: "josesaez@bloomfitness.es",
    description:
      "Te ayudará a recuperar la funcionalidad y bienestar desde un enfoque activo",
    image: joseSaezPhoto,
    dot: orangeDot,
    history:
      "Soy José Sáez, Fisioterapeuta (2021) y Técnico en Animación de Actividades Físicas y Deportivas (2017). Mi vida siempre ha estado ligada al deporte y la naturaleza, una pasión que me define tanto personal como profesionalmente.\\n\\nA lo largo de los años, me ha tocado experimentar en primera persona diversos dolores y lesiones. Lejos de ser un obstáculo, vivir ese proceso me impulsó a querer comprender qué sucede realmente en nuestro cuerpo cuando hay dolor. Esa voluntad de recuperarme, sumada al deseo de ayudar a otros tal como hicieron conmigo, es lo que me motiva a dedicarme plenamente a esta profesión.\\n\\nMi metodología se basa en el razonamiento clínico y el tratamiento activo. Durante mi formación, entendí que el paradigma de la fisioterapia ha evolucionado: hemos pasado de técnicas puramente pasivas a un modelo donde el paciente es el protagonista. Por ello, mi compromiso es empoderar a las personas para que tomen acción en su propia recuperación, encontrando mi mayor satisfacción en ver su progreso y mejora clínica real.\\n\\nUn saludo, ¡nos vemos en Bloom Fitness Mislata!",
    reviews: [],
  },
  {
    slug: "fran-saez",
    name: "Fran Sáez García",
    area: ProfessionalArea.ENTRENADOR_PERSONAL,
    email: "fransaez@bloomfitness.es",
    whatsapp: "645276118",
    description:
      "Fran llevará tus entrenamientos adaptados y te acompañará a cumplir tus objetivos",
    image: franSaezPhoto,
    dot: blueDot,
    history:
      "Hola, soy Francisco Javier Sáez García; tal vez presentándome así gane algo de autoridad, aunque para mí los títulos no definen quién soy. He cursado el Ciclo Superior de Deporte y el Grado, pero sinceramente, mi verdadero aprendizaje no está en las aulas, sino en la práctica.\\n\\nEntreno desde los 17 años y fue en 2021 cuando decidí dar el paso de entrenar a personas. Lo que más valoro de mi trabajo es, sin duda, el aspecto humano. Más allá de transformar físicos, lo que realmente disfruto es el trato con las personas: cada una con sus problemas, su carácter específico y una historia única a sus espaldas. Para mí, es un honor y algo sumamente significativo que alguien decida, de forma voluntaria, compartir horas de su vida conmigo para mejorar.\\n\\nMi intención es que, a través de la actividad física, cada persona descubra que las metas se alcanzan con trabajo y constancia. Quiero demostrar que nada es imposible, aunque al principio lo parezca, y que muchas veces los límites solo existen en nuestra propia mente. Mi propósito es hacerles entender que el esfuerzo y la perseverancia de hoy son la clave para vivir más y mejor el mañana. Considero que mi trabajo es un auténtico regalo y agradezco de corazón a todos los que habéis confiado en mí desde el principio. Ojalá esta familia siga creciendo sin perder nunca la esencia que hemos creado juntos.",
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
    name: "Daniel Valencia Martín",
    area: ProfessionalArea.ENTRENADOR_PERSONAL,
    email: "danielvalencia@bloomfitness.es",
    whatsapp: "601438889",
    description:
      "Daniel diseñará entrenamientos personalizados y te guiará hacia tus metas",
    image: daniValenciaPhoto,
    dot: redDot,
    history:
      "Soy Daniel Valencia, Graduado en Ciencias de la Actividad Física y el Deporte y especialista en Entrenamiento de fuerza basado en el Movimiento y la Biomecánica Funcional. Aunque estas son mis credenciales académicas, tengo claro que el papel por sí solo no garantiza resultados; lo que realmente importa es cómo aplicamos ese conocimiento para transformar vidas.\\n\\nMe considero un idealista que cree firmemente que todo el mundo debe y puede entrenar, sin importar su punto de partida. Por ello, me gusta definirme por mi motivación principal: ser un facilitador que acompaña al cliente desde el primer día. Mi objetivo número uno es que cada persona se acerque de forma segura y eficiente a sus metas, traduciendo la complejidad de la biomecánica en movimientos naturales que mejoren su salud y rendimiento.\\n\\nEntiendo que entrenar es un proceso complejo que va mucho más allá del gimnasio. Mi labor se centra en ayudar a cada cliente a superar las barreras de la falta de adherencia, trabajando juntos para que el ejercicio no sea una obligación temporal, sino un verdadero hábito integrado en su estilo de vida. Mi mayor satisfacción es ver cómo el entrenamiento se convierte en el motor que impulsa el bienestar diario de quienes confían en mí.",
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
    name: "Gabriel Martínez Navarro",
    area: "Entrenador Personal",
    description:
      "Gabriel creará rutinas a tu medida y te apoyará en tu progreso",
    email: "gabrielmartinez@bloomfitness.es",
    whatsapp: "677752522",
    image: gabrielMartinezPhoto,
    dot: blueDot,
    history:
      "Soy Gabriel, Entrenador Personal y apasionado del entrenamiento de alta intensidad. Mi formación técnica comenzó junto a Fran en TAFAD, donde no solo compartimos estudios, sino también una visión exigente y profesional sobre el deporte. Desde entonces, he centrado mi carrera en llevar el rendimiento físico al siguiente nivel a través de la disciplina y el esfuerzo real.\\n\\nMi filosofía de trabajo es clara: para ver resultados distintos, hay que entrenar con una intensidad verdadera. Me especializo en crear rutinas totalmente a medida, diseñadas para exprimir el potencial de cada persona que pasa por Bloom Fitness. No creo en los entrenamientos genéricos; creo en planes específicos que desafíen tus límites y te obliguen a progresar de forma constante, siempre bajo un control técnico riguroso.\\n\\nEntrenar conmigo significa tener a alguien que te apoyará en cada repetición y que no te dejará rendirte antes de tiempo. Mi mayor compromiso es acompañarte en tu evolución, asegurándome de que cada gota de sudor cuente y que alcances tus metas con la constancia y la energía que requiere el éxito. Si buscas compromiso y un entrenamiento que de verdad te ponga a prueba, estoy aquí para guiarte.",
    reviews: [],
  },
  {
    slug: "javier-sanchez",
    name: "Javier Sánchez López",
    area: "Nutricionista",
    email: "squatnutritionzone@gmail.com",
    whatsapp: "690662961",
    description:
      "Javier te asesorará para mejorar tus hábitos alimenticios y tu salud",
    image: javierSanchezPhoto,
    dot: orangeDot,
    history:
      "Soy Javier Sánchez, Dietista-Nutricionista especializado en Nutrición Deportiva. Mis raíces están en un pequeño pueblo de Cuenca, un entorno donde el deporte y la vida activa despertaron mi curiosidad por entender cómo la alimentación influye decisivamente en el rendimiento y el bienestar general.\\n\\nEsa curiosidad se convirtió en mi vocación. A lo largo de mi trayectoria, he trabajado con perfiles muy diversos, y actualmente soy el nutricionista del Club Deportivo Castellón (Segunda División). En el deporte profesional, aplico un enfoque integral para optimizar la composición corporal y la recuperación, pero siempre manteniendo la misma filosofía que aplico con cualquier persona: la nutrición debe ser individualizada, rigurosa y, sobre todo, disfrutable.\\n\\nEstoy convencido de que comer nunca debe ser algo restrictivo o negativo. Mi objetivo es que cada persona aprenda a alimentarse sin renunciar al placer, mediante estrategias realistas y sostenibles. Mi mayor motivación es acompañarte de forma honesta y cercana, convirtiendo la nutrición en una herramienta de salud y mejora a largo plazo.",
  },
  {
    slug: "enzo-perez",
    name: "Enzo Pérez Maraver",
    area: ProfessionalArea.ENTRENADOR_PERSONAL,
    email: "enzo.perez.maraver2002@gmail.com",
    whatsapp: "608773717",
    description: "Se revelará pronto",
    image: null,
    dot: blueDot,
    comingSoon: true,
  },
];

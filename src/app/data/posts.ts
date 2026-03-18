export interface Post {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  image: string;
  date: string;
  category: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'analisis-avengers-endgame',
    title: 'Análisis de Avengers: Endgame',
    shortDescription: 'Avengers: Endgame marcó el cierre de una era en Marvel. La película muestra cómo los héroes intentan revertir el chasquido de Thanos mediante viajes en el tiempo, con momentos épicos y emocionales.',
    fullContent: `Avengers: Endgame marcó el cierre de una era en Marvel. La película muestra cómo los héroes intentan revertir el chasquido de Thanos mediante viajes en el tiempo, con momentos épicos y emocionales. El sacrificio de Iron Man es uno de los puntos más impactantes del cine.

Esta película épica de 3 horas logró consolidarse como una de las películas más exitosas de la historia del cine. Los hermanos Russo dirigieron una obra maestra que combina acción, emoción y un cierre perfecto para la Saga del Infinito.

El viaje temporal permitió a los fans revivir momentos icónicos de películas anteriores, creando una experiencia nostálgica única. Cada Avenger tuvo su momento de brillar, desde el Thor depresivo hasta el Capitán América empuñando Mjolnir.

La batalla final contra Thanos es sin duda una de las escenas más épicas jamás filmadas. Ver a todos los héroes del MCU reunidos, junto con el icónico "Avengers Assemble" del Capitán América, fue un momento que hizo historia en el cine.

El sacrificio de Tony Stark resonó profundamente con los fans. Su frase "I am Iron Man" antes de usar las Gemas del Infinito cerró perfectamente el arco de un personaje que inició todo el universo cinematográfico de Marvel en 2008.`,
    image: 'https://images.unsplash.com/photo-1556912184-a30dc5c60740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmVuZ2VycyUyMGVuZGdhbWV8ZW58MXx8fHwxNzczNzk2ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '15 de marzo, 2026',
    category: 'Análisis'
  },
  {
    id: 2,
    slug: 'teorias-futuro-avengers',
    title: 'Teorías del futuro de los Avengers',
    shortDescription: 'Tras Endgame, los fans han creado teorías sobre nuevos equipos de Avengers. Se habla de una nueva generación de héroes y del multiverso como elemento clave para traer historias inesperadas.',
    fullContent: `Tras Endgame, los fans han creado teorías sobre nuevos equipos de Avengers. Se habla de una nueva generación de héroes y del multiverso como elemento clave para traer historias inesperadas y nuevos villanos.

El multiverso se ha convertido en el eje central de la nueva fase del MCU. Con personajes como Doctor Strange explorando realidades alternativas, las posibilidades son infinitas. Esto abre la puerta a versiones alternativas de héroes conocidos y a la introducción de nuevos personajes de los cómics.

Una de las teorías más populares sugiere que veremos a los Young Avengers en acción. Personajes como Kate Bishop, Ironheart, Ms. Marvel y otros jóvenes héroes podrían formar el siguiente equipo principal.

Otra teoría interesante habla sobre la formación de los Dark Avengers, un equipo de anti-héroes y villanos reformados. Con personajes como Yelena Belova, John Walker y otros en el MCU, esta posibilidad es cada vez más real.

La introducción de los mutantes y los Cuatro Fantásticos también promete cambiar completamente el panorama del MCU. Los fans especulan sobre cómo estos equipos icónicos se integrarán con los Avengers existentes y qué amenazas cósmicas enfrentarán juntos.`,
    image: 'https://images.unsplash.com/photo-1608889175106-86d4a3c66bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ2ZWwlMjBzdXBlcmhlcm8lMjB0ZWFtfGVufDF8fHx8MTc3Mzc5Njg1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '12 de marzo, 2026',
    category: 'Teorías'
  },
  {
    id: 3,
    slug: 'avengers-mas-poderosos',
    title: 'Los Avengers más poderosos',
    shortDescription: 'Personajes como Thor, Capitana Marvel y Scarlet Witch destacan por su gran poder. Cada uno aporta habilidades únicas que han sido clave en las batallas contra amenazas como Thanos.',
    fullContent: `Personajes como Thor, Capitana Marvel y Scarlet Witch destacan por su gran poder. Cada uno aporta habilidades únicas que han sido clave en las batallas contra amenazas como Thanos.

Thor, el Dios del Trueno, ha demostrado ser uno de los Avengers más poderosos. Con su hacha Stormbreaker, fue capaz de herir gravemente a Thanos incluso con todas las Gemas del Infinito. Su poder cósmico y su longevidad asgardiana lo convierten en un guerrero formidable.

Capitana Marvel posee poderes casi ilimitados derivados de la energía del Teseracto. Su capacidad de volar a velocidades supersónicas, disparar ráfagas de energía fotónica y absorber energía la convierten en una de las heroínas más poderosas del MCU.

Scarlet Witch ha demostrado un potencial aterrador. Su magia del caos le permite alterar la realidad misma. En WandaVision vimos cómo creó una realidad completa, y en Doctor Strange in the Multiverse of Madness demostró poder atravesar el multiverso.

Doctor Strange, como Hechicero Supremo, maneja las artes místicas con maestría. Su conocimiento de hechizos y su capacidad de manipular el tiempo lo convierten en un activo invaluable para los Avengers.

Hulk, aunque menos destacado en películas recientes, sigue siendo una fuerza imparable cuando se enfurece. Su fuerza es prácticamente ilimitada y ha demostrado ser capaz de enfrentar a los enemigos más poderosos.`,
    image: 'https://images.unsplash.com/photo-1638379036667-ee3e8d663f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXB0YWluJTIwbWFydmVsfGVufDF8fHx8MTc3Mzc5Njg1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '10 de marzo, 2026',
    category: 'Rankings'
  },
  {
    id: 4,
    slug: 'proximas-peliculas-marvel',
    title: 'Próximas películas de Marvel',
    shortDescription: 'Marvel continúa expandiendo su universo con nuevas películas. Aunque los Avengers originales ya no están completos, su legado sigue con nuevos héroes e historias conectadas.',
    fullContent: `Marvel continúa expandiendo su universo con nuevas películas. Aunque los Avengers originales ya no están completos, su legado sigue con nuevos héroes e historias conectadas.

El futuro del MCU promete ser emocionante con la llegada de nuevas fases. Marvel Studios tiene planeado un extenso calendario de películas que explorarán tanto a personajes establecidos como a nuevos héroes.

Una de las películas más esperadas es la próxima entrega de los Vengadores, que reunirá a los héroes para enfrentar a Kang el Conquistador, uno de los villanos más poderosos de Marvel Comics. Esta amenaza multiversal requerirá que todos los héroes se unan.

Los Cuatro Fantásticos finalmente tendrán su debut oficial en el MCU, trayendo consigo nuevas dinámicas y tecnología. Reed Richards, Sue Storm, Johnny Storm y Ben Grimm se convertirán en piezas clave del universo.

Películas como Thunderbolts prometen explorar el lado más oscuro del MCU, con anti-héroes y villanos reformados trabajando juntos. Este enfoque fresco muestra que Marvel no teme experimentar con diferentes géneros y tonos.

Además, se esperan más películas de personajes ya establecidos como Spider-Man, Doctor Strange y Shang-Chi, cada una continuando sus arcos personales mientras se conectan con la narrativa más amplia del multiverso.`,
    image: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2luZW1hJTIwc3VwZXJoZXJvfGVufDF8fHx8MTc3Mzc5Njg1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '8 de marzo, 2026',
    category: 'Noticias'
  }
];

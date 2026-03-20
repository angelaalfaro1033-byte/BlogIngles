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
    title: 'Avengers: Endgame Analysis',
    shortDescription: 'Avengers: Endgame marked the end of an era in Marvel. The movie shows how the heroes try to reverse Thanos’ snap through time travel, with epic and emotional moments.',
    fullContent: `Avengers: Endgame marked the end of an era in Marvel. The movie shows how the heroes try to reverse Thanos’ snap through time travel, with epic and emotional moments. Iron Man’s sacrifice is one of the most impactful moments in cinema.

This 3-hour epic film managed to establish itself as one of the most successful movies in cinema history. The Russo brothers directed a masterpiece that combines action, emotion, and a perfect ending to the Infinity Saga.

The time travel allowed fans to relive iconic moments from previous films, creating a unique nostalgic experience. Every Avenger had their moment to shine, from depressed Thor to Captain America wielding Mjolnir.

The final battle against Thanos is undoubtedly one of the most epic scenes ever filmed. Seeing all the MCU heroes united, along with Captain America’s iconic "Avengers Assemble", was a moment that made history in cinema.

Tony Stark’s sacrifice deeply resonated with fans. His line "I am Iron Man" before using the Infinity Stones perfectly closed the arc of a character who started the entire Marvel Cinematic Universe in 2008.`,
 image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHJlYWN0fGVufDF8fHx8MTc3Mzk3Mzc0OXww&ixlib=rb-4.1.0&q=80&w=1080',    date: 'March 15, 2026',
    category: 'Analysis'
  },
  {
    id: 2,
    slug: 'teorias-futuro-avengers',
    title: 'Theories About the Future of the Avengers',
    shortDescription: 'After Endgame, fans have created theories about new Avengers teams. There is talk about a new generation of heroes and the multiverse as a key element to bring unexpected stories.',
    fullContent: `After Endgame, fans have created theories about new Avengers teams. There is talk about a new generation of heroes and the multiverse as a key element to bring unexpected stories and new villains.

The multiverse has become the central axis of the MCU’s new phase. With characters like Doctor Strange exploring alternate realities, the possibilities are endless. This opens the door to alternative versions of known heroes and the introduction of new comic book characters.

One of the most popular theories suggests we will see the Young Avengers in action. Characters like Kate Bishop, Ironheart, Ms. Marvel, and other young heroes could form the next main team.

Another interesting theory talks about the formation of the Dark Avengers, a team of anti-heroes and reformed villains. With characters like Yelena Belova, John Walker, and others in the MCU, this possibility is becoming more real.

The introduction of mutants and the Fantastic Four also promises to completely change the MCU landscape. Fans speculate on how these iconic teams will integrate with the existing Avengers and what cosmic threats they will face together.`,
 image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzM5NTQ5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',    date: 'March 12, 2026',
    category: 'Theories'
  },
  {
    id: 3,
    slug: 'avengers-mas-poderosos',
    title: 'The Most Powerful Avengers',
    shortDescription: 'Characters like Thor, Captain Marvel, and Scarlet Witch stand out for their immense power. Each one brings unique abilities that have been key in battles against threats like Thanos.',
    fullContent: `Characters like Thor, Captain Marvel, and Scarlet Witch stand out for their immense power. Each one brings unique abilities that have been key in battles against threats like Thanos.

Thor, the God of Thunder, has proven to be one of the most powerful Avengers. With his axe Stormbreaker, he was able to seriously injure Thanos even with all the Infinity Stones. His cosmic power and Asgardian longevity make him a formidable warrior.

Captain Marvel possesses nearly unlimited powers derived from the energy of the Tesseract. Her ability to fly at supersonic speeds, shoot photonic energy blasts, and absorb energy makes her one of the most powerful heroes in the MCU.

Scarlet Witch has demonstrated terrifying potential. Her chaos magic allows her to alter reality itself. In WandaVision, we saw how she created an entire reality, and in Doctor Strange in the Multiverse of Madness, she proved capable of traveling through the multiverse.

Doctor Strange, as the Sorcerer Supreme, masters the mystic arts. His knowledge of spells and his ability to manipulate time make him an invaluable asset to the Avengers.

Hulk, although less prominent in recent films, remains an unstoppable force when enraged. His strength is practically limitless and he has proven capable of facing the most powerful enemies.`,
  image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzczOTczNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080',    date: 'March 10, 2026',
    category: 'Rankings'
  },
  {
    id: 4,
    slug: 'proximas-peliculas-marvel',
    title: 'Upcoming Marvel Movies',
    shortDescription: 'Marvel continues expanding its universe with new movies. Although the original Avengers are no longer complete, their legacy continues with new heroes and connected stories.',
    fullContent: `Marvel continues expanding its universe with new movies. Although the original Avengers are no longer complete, their legacy continues with new heroes and connected stories.

The future of the MCU promises to be exciting with the arrival of new phases. Marvel Studios has planned an extensive schedule of films that will explore both established characters and new heroes.

One of the most anticipated films is the next Avengers installment, which will bring heroes together to face Kang the Conqueror, one of the most powerful villains in Marvel Comics. This multiversal threat will require all heroes to unite.

The Fantastic Four will finally make their official debut in the MCU, bringing new dynamics and technology. Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm will become key pieces of the universe.

Movies like Thunderbolts promise to explore the darker side of the MCU, with anti-heroes and reformed villains working together. This fresh approach shows that Marvel is not afraid to experiment with different genres and tones.

Additionally, more films featuring already established characters like Spider-Man, Doctor Strange, and Shang-Chi are expected, each continuing their personal arcs while connecting to the broader multiverse narrative.`,
      image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzkwNjk0OXww&ixlib=rb-4.1.0&q=80&w=1080',    date: 'March 8, 2026',
    category: 'News'
  }
];

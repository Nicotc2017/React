export interface Series {
    rank: number;
    image: string;
    name: string;
    startYear: number;
    rate: number;
    description: string; 
    running: boolean;
    seasons: number;
}

export const seriesList: Series[] = [
    {
        rank: 1,
        image: 'https://via.placeholder.com/140x209?text=Stranger+Things',
        name: 'Stranger Things',
        startYear: 2016,
        rate: 8.7,
        description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces to get him back.',
        running: true,
        seasons: 4,
    },
    {
        rank: 2,
        image: 'https://via.placeholder.com/140x209?text=Breaking+Bad',
        name: 'Breaking Bad',
        startYear: 2008,
        rate: 9.5,
        description: 'A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family\'s future.',
        running: false,
        seasons: 5,
    },
    {
        rank: 3,
        image: 'https://via.placeholder.com/140x209?text=Money+Heist',
        name: 'Money Heist (La Casa de Papel)',
        startYear: 2017,
        rate: 8.2,
        description: 'A criminal mastermind known as "The Professor" recruits a group of eight robbers to carry out an ambitious heist on the Royal Mint of Spain.',
        running: false,
        seasons: 5,
    },
    {
        rank: 4,
        image: 'https://via.placeholder.com/140x209?text=The+Witcher',
        name: 'The Witcher',
        startYear: 2019,
        rate: 8.2,
        description: 'Geralt of Rivia, a mutated monster-hunter for hire, struggles to find his place in a world where people often prove more wicked than beasts.',
        running: true,
        seasons: 3,
    },
    {
        rank: 5,
        image: 'https://via.placeholder.com/140x209?text=The+Crown',
        name: 'The Crown',
        startYear: 2016,
        rate: 8.7,
        description: 'The story of Queen Elizabeth II\'s reign, chronicling personal and political events that shaped the 20th century.',
        running: true,
        seasons: 6,
    },
    {
        rank: 6,
        image: 'https://via.placeholder.com/140x209?text=Ozark',
        name: 'Ozark',
        startYear: 2017,
        rate: 8.4,
        description: 'A financial planner moves his family to the Ozarks, where he must launder money for a drug cartel while dodging local threats.',
        running: false,
        seasons: 4,
    },
    {
        rank: 7,
        image: 'https://via.placeholder.com/140x209?text=Bridgerton',
        name: 'Bridgerton',
        startYear: 2020,
        rate: 7.3,
        description: 'In Regency-era London, the Bridgerton family searches for love and happiness amidst scandals, romance, and intrigue.',
        running: true,
        seasons: 3,
    },
    {
        rank: 8,
        image: 'https://via.placeholder.com/140x209?text=The+Umbrella+Academy',
        name: 'The Umbrella Academy',
        startYear: 2019,
        rate: 8.0,
        description: 'A dysfunctional family of adopted superhero siblings reunites to solve the mystery of their father\'s death and stop an impending apocalypse.',
        running: true,
        seasons: 4,
    },
    {
        rank: 9,
        image: 'https://via.placeholder.com/140x209?text=Lucifer',
        name: 'Lucifer',
        startYear: 2016,
        rate: 8.1,
        description: 'Lucifer Morningstar, the Devil, abandons Hell for Los Angeles, where he opens a nightclub and becomes a consultant to the LAPD.',
        running: false,
        seasons: 6,
    },
    {
        rank: 10,
        image: 'https://via.placeholder.com/140x209?text=Sex+Education',
        name: 'Sex Education',
        startYear: 2019,
        rate: 8.4,
        description: 'A socially awkward teenager starts an underground sex therapy clinic at his high school, inspired by his mother, a sex therapist.',
        running: true,
        seasons: 4,
    },
];
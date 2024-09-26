import AliceNFernoPage from '../assets/projects-icons/alice-n-ferno.png';
import SproutPage from '../assets/projects-icons/sprout.png';
import ShipDotIOPage from '../assets/projects-icons/shipdotio.png';
import FloorboardsPage from '../assets/projects-icons/floorboards.png';
import CompartmentsPage from '../assets/projects-icons/compartments.png';
import DisasterFamilyPage from '../assets/projects-icons/disaster-family.png';
import PortfolioWebsitePage from '../assets/projects-icons/portfolio website.png';

export interface AppShowcaseItemData {
    icon: string,
    name: string,
    description: string,
    link: string
}

export default [
    {
        icon: AliceNFernoPage, 
        name: "Alice n' ferno",
        description: "Submission to the 72-hour 2023 Joint Jam about two things that really don't mix!",
        link: "https://tetrachroma.itch.io/alice-ferno"
    },
    {
        icon: SproutPage,
        name: "Sprout",
        description: "Submission to the 72-hour 2022 Global Game Jam about relying on your roots. Made by a team of five.",
        link: "https://tetrachroma.itch.io/sprout"
    },
    {
        icon: ShipDotIOPage,
        name: "Ship.io",
        description: "Ever wondered if two characters from two of your favorite animated TV shows would be best buds, or mortal enemies? Explore the possibilities with over 25k characters!",
        link: "https://github.com/Pyrite32/shipdotioDSA"
    },
    {
        icon: FloorboardsPage,
        name: "Floorboards",
        description: "A creepy submission to the 2023 PJP Game jam. Just one simple rule: Don't make a sound!",
        link: "https://tetrachroma.itch.io/floorboards"
    },
    {
        icon: CompartmentsPage,
        name: "Compartments.",
        description: "An ode to productivity and self-improvement encapsulated in a MERN app!",
        link: "https://github.com/Pyrite32/ProjectCEN"
    },
    {
        icon: DisasterFamilyPage,
        name: "Disaster Family",
        description: "A 6-person Japanese-American collaboration that strives to raise awareness about disaster prevention—packaged in a video game!",
        link: "https://github.com/Pyropa32/DisasterFamily"
    },
    {
        icon: PortfolioWebsitePage,
        name: "This Website!",
        description: "I've proudly built this site upon a big bed of node_modules, such as React, Tailwind CSS, and React Spring!",
        link: "https://github.com/Pyrite32/portfolio-site"
    },
];
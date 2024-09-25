// sprout
// alice n'ferno
// floorboards
// disaster family (the AI game)
// shipDotIO
// compartments
// portfolio website

import AliceNFernoPage from '../assets/projects-icons/alice-n-ferno.png';
import SproutPage from '../assets/projects-icons/sprout.png';
import ShipDotIOPage from '../assets/projects-icons/shipdotio.png';
import FloorboardsPage from '../assets/projects-icons/floorboards.png';
import CompartmentsPage from '../assets/projects-icons/compartments.png';
import DisasterFamilyPage from '../assets/projects-icons/disaster-family.png';
import PortfolioWebsitePage from '../assets/projects-icons/portfolio website.png';

import './AppsShowcaseRoulette.css'
import { useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
import { useSprings, animated, useSpring, useSpringRef } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

const pages = [
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

const AppsShowcaseRoulette = () => {
    const currentIndex = useRef(0);
    const [ref, { width}] = useMeasure();
    const [pageData, setPageData] = useState(pages[0]);
    const [springs, api] = useSprings (
        pages.length,
        i => ({
            x: i * width,
            scale: width === 0 ? 0 : 1,
            display: 'block'
        }),
        [width]
    );

    const flyInSpringApi = useSpringRef();
    const [flyInSpring] = useSpring({
        ref: flyInSpringApi,
        from: { opacity: 1 },
    }, [pageData]);

    const bind = useDrag(({active, movement: [moveX], direction: [directionX], distance, cancel}) => {
        if (active && distance > width / 2) {
            const newIndex = currentIndex.current - Math.sign(directionX);
            currentIndex.current = Math.min(pages.length - 1, Math.max(0, newIndex));
            setPageData(old => pages[currentIndex.current]);
            flyInSpringApi.start({
                from: {
                  opacity: 0,
                },
                to: {
                    opacity: 1,
                  },
            });
            cancel();
        }
        api.start(i => {
            if (Math.abs(currentIndex.current - i) > 1) return { display: 'none'}
            const x = (i - currentIndex.current) * width + (active ? moveX : 0);
            const scale = active ? 1.0 - distance / width / 2.0 : 1.0;
            return { x, scale, display: 'block'}
        })
    });
    
    return (
        <article className='roulette-main h-full p-0 flex flex-col justify-center items-center'>
            <div ref={ref} className='roulette-content flex flex-row items-baseline overflow-hidden'>
                {springs.map(({x, display, scale}, i) => (
                    <animated.div className="roulette-infront-page" {...bind()} key={i} style={{display, x}}>
                        <animated.div style={{scale, backgroundImage: `url(${pages[i].icon})` }} />
                    </animated.div>
                ))}
            </div>
            <animated.div style={flyInSpring}>
                <p className='text-2xl text-black text-wrap font-bold w-fit underline underline-offset-'>
                    <a className='text-fuschia hover:text-teal transition-colors' href={pageData.link} target="_blank" rel="noreferrer noopener">{pageData.name}</a>
                </p>
                <p className='text-xl text-black text-wrap  w-fit'>
                    {pageData.description}
                </p>
            </animated.div>
        </article>
    );
}

export default AppsShowcaseRoulette;
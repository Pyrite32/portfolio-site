import useMeasure from 'react-use-measure';
import CourseworkTile from '../components/CourseworkTile';
import './CourseworkShowcase.css'
import { useEffect, useRef, useState } from 'react';
import { lgCardStyles } from '../ts/data/CardStyles';
import remap from '../ts/remap';
import courses from '../ts/data/Courses'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import PopIn from '../components/PopIn';
import { animated, useScroll } from '@react-spring/web';


const MovingText = () => {

  const [scrollY, setScroll] = useState(0);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const text = document.getElementById('gargantuanText')!;
    const handleScroll = () => {
      setScroll(text.getBoundingClientRect().top);
    };

    const handleResize = () => {
      setWindowSize(window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    setWindowSize(window.innerHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let rightAmnt = remap(scrollY, 0, windowSize, 300, -1200)
  if (rightAmnt == null) rightAmnt = 0;

  return (
    <h1 id="gargantuanText" className="absolute text-gargantuan font-outline text-black p-0 m-0"
    style={{right: rightAmnt}}>
      COURSEWORK
    </h1>
  );
}

const CourseworkShowcase = () => {

  const {scrollYProgress} = useScroll();

  return (
    <section className="h-screen mt-20 mb-32">
      <header className="md:px-32 px-4 pt-6 h-32 leading-3 md:text-right text-center relative">
        <MovingText />
      </header>
      <PopIn requireVisibility={true} topOffset="3rem" >
        <animated.div className='big-container back-shadow mx-auto w-10/12 h-min bg-off-white relative z-10 max-w-200%'
        style={{top: scrollYProgress
          .to((value) =>
            `${100 + value * -200}px` 
          )}}
        >
          <div className='py-20 px-6 w-8/12 mx-auto h-full gap-0'>
            <p className='text-fuschia font-serif leading-none'>&lt;Coursework&gt;</p>
            <div className='big-container__layout flex flex-wrap '>
              {courses.map((item, index) => (
                <CourseworkTile 
                data={item} 
                cardStyle={lgCardStyles[index]} 
                key={`courseTile-${index}`}
                />
              ))}
            </div>
            <p className='text-fuschia font-serif text-right leading-none'>&lt;/Coursework&gt;</p>
          </div>
        </animated.div>
      </PopIn>
    </section>
  );
};

export default CourseworkShowcase;

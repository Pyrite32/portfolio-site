import useMeasure from 'react-use-measure';
import CourseworkTile from '../../components/CourseworkTile';
import './CourseworkShowcase.css'
import { useEffect, useState } from 'react';
import remap from '../../ts/remap';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import courses from '../../ts/data/Courses'
import { lgCardStyles } from '../../ts/data/CardStyles';


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

  return (
    <h1 id="gargantuanText" className="absolute text-gargantuan font-outline text-black p-0 m-0"
    style={{right: remap(scrollY, 0, windowSize, 300, -1200)}}>
      COURSEWORK
    </h1>
  );
}

const CourseworkShowcase = () => {

  return (
    <section className="h-screen mt-20">
      <header className="md:px-32 px-4 pt-6 h-32 leading-3 md:text-right text-center relative">
        <MovingText />
      </header>
      <div className='big-container back-shadow mx-auto w-10/12 h-min bg-off-white relative z-10'>
        <div className='py-20 px-6 w-8/12 mx-auto h-full gap-0'>
          <p className='text-fuschia font-serif leading-none'>&lt;Coursework&gt;</p>
          <div className='big-container__layout flex flex-wrap '>
            {courses.map((item, index) => (
              <CourseworkTile 
              data={item} 
              cardStyle={lgCardStyles[index]} 
              />
            ))}
          </div>
          <p className='text-fuschia font-serif text-right leading-none'>&lt;/Coursework&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default CourseworkShowcase;

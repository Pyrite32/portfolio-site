import useMeasure from "react-use-measure";
import CourseworkTile from "../components/CourseworkTile";
import "./CourseworkShowcase.css";
import { useEffect, useId, useRef, useState } from "react";
import { lgCardStyles, mdCardStyles, smCardStyles } from "../ts/data/CardStyles";
import remap from "../ts/remap";
import courses from "../ts/data/Courses";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import PopIn from "../components/PopIn";
import { animated, useScroll } from "@react-spring/web";
import CardStyle from "../ts/CardStyle";

const MovingText = () => {
  const [scrollY, setScroll] = useState(0);
  const [windowSize, setWindowSize] = useState(
    {innerWidth: 0, innerHeight: 0}
  );

  useEffect(() => {
    const text = document.getElementById("gargantuanText")!;
    const handleScroll = () => {
      setScroll(text.getBoundingClientRect().top);
    };

    const handleResize = () => {
      setWindowSize({innerWidth: window.innerWidth, innerHeight: window.innerHeight});
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    setWindowSize({innerWidth: window.innerWidth, innerHeight: window.innerHeight});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let rightAmnt = remap(scrollY, 0, windowSize.innerHeight, 300, -1200);
  if (rightAmnt == null) rightAmnt = 0;

  return (
    <h1
      id="gargantuanText"
      className="absolute text-gargantuan font-outline text-black p-0 m-0"
      style={{ right: rightAmnt }}
    >
      COURSEWORK
    </h1>
  );
};

const CourseworkShowcase = () => {
  const { scrollYProgress } = useScroll();
  const [cardStyles, setCardStyles] = useState<Array<CardStyle>>(lgCardStyles)!;
  const windowWidth = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && windowWidth.current > 768) {
        setCardStyles(smCardStyles);
      } else if (
        (window.innerWidth <= 1200 && windowWidth.current > 1200) ||
        (window.innerWidth > 768 && windowWidth.current <= 768)
      ) {
        setCardStyles(mdCardStyles);
      } else if (window.innerWidth > 1200 && windowWidth.current <= 1200) {
        setCardStyles(lgCardStyles);
      }
      windowWidth.current = window.innerWidth;
    };

    window.addEventListener("resize", handleResize);

    const firstTime = windowWidth.current != window.innerWidth;
    if (firstTime) {
      if (window.innerWidth <= 768) {
        setCardStyles(smCardStyles);
      } else if (window.innerWidth <= 1200) {
        setCardStyles(mdCardStyles);
      } else {
        setCardStyles(lgCardStyles);
      }
    }

    windowWidth.current = window.innerWidth;

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-max mt-20 mb-32">
      <header className="md:px-32 px-4 pt-6 h-32 leading-3 md:text-right text-center relative">
        <MovingText />
      </header>
      <PopIn requireVisibility={true} topOffset="3rem">
        <animated.div
          className="big-container back-shadow mx-auto sm:w-full md:w-10/12 h-min bg-off-white relative z-10 max-w-200%"
          style={{
            top: scrollYProgress.to((value) => `${100 + value * -200}px`),
          }}
        >
          <div className="py-20 sm:px-0 mobileL:w-10/12 sm:w-8/12 mx-auto h-full gap-0">
            <p className="sm:inline mobile:hidden text-fuschia font-serif leading-none">
              &lt;Coursework&gt;
            </p>
            <div className="big-container__layout flex flex-wrap ">
              {courses.map((item, index) => (
                <CourseworkTile
                  data={item}
                  cardStyle={cardStyles[index]}
                  key={`courseTile-${index}`}
                />
              ))}
            </div>
            <p className="sm:inline mobile:hidden text-fuschia font-serif text-right leading-none">
              &lt;/Coursework&gt;
            </p>
          </div>
        </animated.div>
      </PopIn>
    </section>
  );
};

export default CourseworkShowcase;

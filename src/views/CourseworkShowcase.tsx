import CourseworkTile from "../components/CourseworkTile";
import "./CourseworkShowcase.css";
import { useEffect, useRef, useState } from "react";
import { lgCardStyles, mdCardStyles, smCardStyles } from "../ts/data/CardStyles";
import courses from "../ts/data/Courses";
import PopIn from "../components/PopIn";
import { animated, useScroll } from "@react-spring/web";
import CardStyle from "../ts/CardStyle";
import GargantuanText from "../components/GargantuanText";



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
        <GargantuanText />
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
            <p className="sm:block mobile:hidden text-fuschia font-serif text-right leading-none">
              &lt;/Coursework&gt;
            </p>
          </div>
        </animated.div>
      </PopIn>
    </section>
  );
};

export default CourseworkShowcase;

import {
  animated,
  config,
  useInView,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import PopIn from "../components/PopIn";
import { PopInText } from "../components/PopInText";
import SkillsTicker from "../components/SkillsTicker";
import "./IntroWhoAmI.css";
import useMeasure from "react-use-measure";
import { useEffect, useMemo, useRef, useState } from "react";
import "../components/RainbowGlow.css";
import "../components/PulseGlow.css";

const titles = [
  "a Programmer",
  "an Artist",
  "a UX Designer",
  "a Unicorn",
];

const WhoAmITitle = (props: {onUnicornButtonClick: () => void, shouldPlay?: boolean}) => {
  const [titleIndex, setTitleIndex] = useState(0);

  const transRef = useSpringRef();
  const [ref, isVisible] = useInView();

  const changeTitleTransitions = useTransition(titleIndex, {
    ref: transRef,
    from: { transform: "scaleY(0.1)" },
    enter: { transform: "scaleY(1.0)" },
    leave: { transform: "scaleY(0.0)" },
    config: config.default,
  });

  const timeout = useMemo(
    () => {
      // there has to be a better way.
      let index = 0;
      return setInterval(() => {
        if (index < titles.length - 1 && isVisible) {
          console.log("titleIndex: " + index + " len: " + (titles.length-1));
          // THIS IS SO CURSED            v!
          index += 1
          setTitleIndex((prev) => Math.min(titles.length-1, prev + 0.5));
        }
      }, 2000)
    }
      ,[isVisible]
  );

  useEffect(() => {
    if (!isVisible) {
      clearInterval(timeout);
    }
  }, [isVisible])

  useEffect(() => {
    if (titleIndex === titles.length - 1) {
      console.log("clearing index!");
      clearInterval(timeout);
    }
    if (titleIndex < titles.length) {
      transRef.start();
    }
  }, [titleIndex]);

  return (
    <span ref={ref} className="relative ml-4 mobile:top-3 lg:top-0">
      {changeTitleTransitions((myStyle, i) => (
        <animated.span
          style={{
            ...myStyle,
            width: "max-content",
            position: "absolute",
            transformOrigin: "center center",
          }}
        >
          {i === titles.length - 1 ? (
            <button 
            onClick={props.onUnicornButtonClick}
            className="rainbow-glow relative cursor-pointer right-4">
              {titles[i]}
            </button>
          ) : (
            titles[i]
          )}
        </animated.span>
      ))}
    </span>
  );
};

const WhoAmIMain = (props: {onUnicornButtonClick: () => void, shouldPlayAnim:boolean}) => {
  return (
    <div className="absolute">
      <div className="mobile:w-full w-9/12 max-w-summary-inner mx-auto">
      <div className="inline-block mobile:mb-4">
        <h1 className="lg:text-7xl mobile:text-3xl mobileL:text-4xl sm:text-5xl text-white">
          <PopIn finished={!props.shouldPlayAnim} requireVisibility={true}>
              <span className="mobile:ml-4 xl:ml-0">Patrick</span> is... <br className="mobile:inline xl:hidden" /><WhoAmITitle onUnicornButtonClick={props.onUnicornButtonClick} />
          </PopIn>
        </h1>
        </div>
        
        <PopIn finished={!props.shouldPlayAnim} requireVisibility={true} waitForMs={6500} topOffset={"3rem"}>
          <p className="mobile:leading-normal sm:leading-snug mobile:text-xl mobileL:text-2xl lg:text-3xl mobile:mt-8 sm:mt-2 text-off-white">
            As a unicorn, I have passion for building beautiful and functional
            digital experiences. I bridge the gap between aesthetics and
            technology, ensuring every project I am involved in is able to deliver
            in all aspects of user experience.
          </p>
        </PopIn>
      <PopIn finished={!props.shouldPlayAnim} requireVisibility={true} waitForMs={7500}>
        <p className="font-pixel text-2xl mt-8">
          <span className="text-yellow">$</span> list skills
        </p>
      </PopIn>
      </div>
      <div className="w-9/12 ml-auto text-right">
        <PopIn finished={!props.shouldPlayAnim} requireVisibility={true} waitForMs={9000}>
          <ul className="font-pixel text-2xl">
            <li>
              <button
                className="w-full text-right"
                onClick={() => window.scrollTo(0, 2350)}
              >
                <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                  code
                </p>
              </button>
            </li>
            <li>
              <button 
              className="w-full text-right"
              onClick={() => window.scrollTo(0, 3390)}
              >
                <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                  art
                </p>
              </button>
            </li>
            <li>
              <button className="w-full text-right"
              onClick={() => window.scrollTo(0, 3390)}
              >
                <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                  ux
                </p>
              </button>
            </li>
          </ul>
        </PopIn>
      </div>
    </div>
  );
};

const UnicornDefinition = (props: {onBackButtonClick: () => void}) => {
  return (
    <div className="absolute h-full w-full text-white">
      <PopIn topOffset={"-3rem"}>
        <div className="flex flex-col justify-center items-center mobile:w-11/12 lg:w-10/12 xl:6/12 mx-auto">
          <div className="text-center w-fit">
            <h1 className="rainbow-glow rainbow-no-border lg:text-9xl sm:text-8xl mobileL:text-7xl mobile:text-6xl font-sans font-black rounded-2xl">u·ni·corn</h1>
            <h2 className="md:text-5xl sm:text-4xl mobile:text-3xl mobile:pb-3">[ˈyo͞onəˌkôrn]</h2>
          </div>
          <div className="md:w-8/12 xl:w-6/12 w-11/12">
            <h2 className="font-nova italic text-5xl lg:mb-0 sm:mb-1 mobile:mb-2 mobile:text-center sm:text-left">Noun</h2>
            <ol className="list-decimal mobile:text-xl sm:text-2xl xl:leading-relaxed lg:leading-snug md:leading-normal font-nova mt-1">
              <li className="lg:my-0 my-2">A <u className="rainbow-glow rainbow-no-border p-0 rounded-2xl">mythical</u> animal typically represented as a horse with a single straight horn <u>projecting </u> from its <u>forehead</u>.</li>
              <li>A <u>multi-disciplinary</u> team member with prowess in interaction design skills, visual design skills, and coding ability.</li>
            </ol>
          </div>
          <button 
          onClick={props.onBackButtonClick}
          className="back-btn text-center mx-auto mobile:mt-8 xl:mt-2 lg:py-0.5 sm:py-1.5 mobile:py-3 lg:px-4 sm:px-8 mobile:px-24 rounded-2xl" >
          <svg fill="#222" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
          </button>
        </div>
      </PopIn>
    </div>
  )
}

const IntroWhoAmI = () => {
  const [introRef, rect] = useMeasure();

  //
  const [panelIndex, setPanelIndex] = useState(0);
  const playIntroMainAnim = useRef(true);

  const transitionDefinition = useTransition( panelIndex, {
      from: {
        opacity: 0,
        transform: "rotateY(180deg)"
      },
      enter: {
        opacity: 1,
        transform: "rotateY(0deg)"
      },
      exit: {
        opacity: 1,
        transform: "rotateY(180deg)"
      }
    }

  )


  return (
    <section
      ref={introRef}
      className="intro bg-black grid-bg-intro h-intro lg:pt-20 mobile:pt-10"
      data-scroll-section
      >
      <div className="mx-auto mobile:w-11/12 lg:w-8/12 max-w-summary lg:h-1/2 mobile:h-3/4 intro-panel-main sm:pb-10">
        {transitionDefinition((style, i) => {
          if (i === 1) {
            playIntroMainAnim.current = false;
          }
          return (
            <animated.div style={style} className="mobile:mt-20 sm:mt-0 intro-panel-inner">
              {i === 0 ? 
                <WhoAmIMain shouldPlayAnim={playIntroMainAnim.current} onUnicornButtonClick={() => setPanelIndex(1)} /> : 
                <UnicornDefinition onBackButtonClick={() => setPanelIndex(0)}/>}
            </animated.div>
          )
        }
        )}
      </div>
      <div className="mobile:bottom-48 sm:bottom-32 lg:bottom-0 lg:top-32 w-11/12 relative mx-auto">
        <SkillsTicker {...rect} />
      </div>
    </section>
  );
};

export default IntroWhoAmI;

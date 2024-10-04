import {
  animated,
  config,
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
  "a Programmer 👨🏻‍💻",
  "an Artist 👨🏻‍🎨",
  "a UX Designer 👨🏻‍🎨",
  "a Unicorn",
];

const WhoAmITitle = (props: {onUnicornButtonClick: () => void, shouldPlay?: boolean}) => {
  const [titleIndex, setTitleIndex] = useState(0);

  const transRef = useSpringRef();

  const changeTitleTransitions = useTransition(titleIndex, {
    ref: transRef,
    from: { transform: "scaleY(0.1)", transformOrigin: "center left" },
    enter: { transform: "scaleY(1.0)" },
    leave: { transform: "scaleY(0.0)" },
    config: config.default,
  });

  const timeout = useMemo(
    () =>
      setInterval(() => {
        if (titleIndex < titles.length - 1) {
          setTitleIndex((prev) => prev + 1);
        }
      }, 2000),
    []
  );

  // not working as expected!:
  //useEffect( () => () => console.log("unmount"), [] );

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
    <span style={{ position: "relative", marginLeft: "1rem" }}>
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
      <div className="w-9/12 max-w-summary-inner mx-auto">
        <h1 className="text-7xl text-white">
          <PopIn finished={!props.shouldPlayAnim} requireVisibility={true}>
            Patrick is... <WhoAmITitle onUnicornButtonClick={props.onUnicornButtonClick} />
          </PopIn>
        </h1>
        <PopIn finished={!props.shouldPlayAnim} requireVisibility={true} waitForMs={6500} topOffset={"3rem"}>
          <p className="leading-snug text-3xl mt-2 text-off-white">
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
                onClick={() => window.scrollTo(0, 1950)}
              >
                <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                  code
                </p>
              </button>
            </li>
            <li>
              <button className="w-full text-right">
                <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                  art
                </p>
              </button>
            </li>
            <li>
              <button className="w-full text-right">
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
        <div className="flex flex-col justify-center items-center w-9/12 mx-auto">
          <div className="text-center w-1/2">
            <h1 className="rainbow-glow rainbow-no-border text-8xl font-sans font-black rounded-2xl">u·ni·corn</h1>
            <h2 className="text-4xl">[ˈyo͞onəˌkôrn]</h2>
          </div>
          <div className="md:w-8/12 xl:w-6/12 w-11/12">
            <h2 className="font-nova italic text-5xl">Noun</h2>
            <ol className="list-decimal text-2xl leading-snug font-nova mt-1">
              <li>A <u className="rainbow-glow rainbow-no-border p-0 rounded-2xl">mythical</u> animal typically represented as a horse with a single straight horn <u>projecting </u> from its <u>forehead</u>.</li>
              <li>A <u>multi-disciplinary</u> team member with prowess in interaction design skills, visual design skills, and coding ability.</li>
            </ol>
          </div>
          <button 
          onClick={props.onBackButtonClick}
          className="back-btn text-center mx-auto mt-2 py-0.5 px-4 rounded-2xl" >
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
        backgroundColor: "aaaa",
        transform: "rotateY(180deg)"
      }
    }

  )


  return (
    <section
      ref={introRef}
      className="intro bg-black grid-bg-intro h-screen pt-32"
    >
      <div className="mx-auto w-11/12 max-w-summary h-1/2 intro-panel-main">
        {transitionDefinition((style, i) => {
          if (i === 1) {
            playIntroMainAnim.current = false;
          }
          return (
            <animated.div style={style} className="intro-panel-inner">
              {i === 0 ? 
                <WhoAmIMain shouldPlayAnim={playIntroMainAnim.current} onUnicornButtonClick={() => setPanelIndex(1)} /> : 
                <UnicornDefinition onBackButtonClick={() => setPanelIndex(0)}/>}
            </animated.div>
          )
        }
        )}
      </div>
      <div className="intro-skills h-skills-ticker w-11/12 relative top-20 mx-auto">
        <SkillsTicker {...rect} />
      </div>
    </section>
  );
};

export default IntroWhoAmI;

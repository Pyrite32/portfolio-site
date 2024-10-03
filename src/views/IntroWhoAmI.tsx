import { animated, config, useSpringRef, useTransition } from "@react-spring/web";
import PopIn from "../components/PopIn";
import { PopInText } from "../components/PopInText";
import SkillsTicker from "../components/SkillsTicker";
import "./IntroWhoAmI.css";
import useMeasure from 'react-use-measure';
import { useEffect, useMemo, useState } from "react";
import '../components/RainbowGlow.css'
import '../components/PulseGlow.css'


const titles = ['a Programmer', 'an Artist', 'a UX Designer', 'a Unicorn']

const WhoAmITitle = () => {

  const [titleIndex, setTitleIndex] = useState(0);

  const transRef = useSpringRef();

  const changeTitleTransitions = useTransition(titleIndex, {
    ref: transRef,
    from: { transform: "scaleY(0.1)", transformOrigin: "center left"},
    enter: { transform: "scaleY(1.0)"},
    leave: { transform: "scaleY(0.0)"},
    config: config.default
  });

  const timeout = useMemo(() => 
    setInterval(() => {
      if (titleIndex < titles.length - 1) {
        setTitleIndex((prev) => prev + 1)
      }
    }
    , 2000)
  , []);
  
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
  }, [titleIndex])
  

  return (
    <span style={{position: "relative", height:"90px", marginLeft:"1rem"}}>
      {changeTitleTransitions((myStyle, i) => (
            <animated.span style={{...myStyle, width:"max-content", position: "absolute", transformOrigin: "center center"}}>
                
                {i === titles.length-1 ? 
                <span className="rainbow-glow relative cursor-pointer">
                 {titles[i]}
                </span> :
                titles[i] 
              }
            </animated.span>
          ))
      }
    </span>
  )

}

const IntroWhoAmI = () => {
  const [ introRef, rect ] = useMeasure();

  //

  return (
    <section ref={introRef} className="intro bg-black grid-bg-intro h-screen pt-24">
      <div className="intro-main flex flex-col h-1/3 gap-28 justify-center">
          <div className="mx-auto w-9/12 gap-6">
            <div className="mx-auto">
              <h1 className="text-7xl text-white">
              <PopIn requireVisibility={true}>
                Patrick is <WhoAmITitle />
              </PopIn>
              </h1>
              <PopIn
                requireVisibility={true}
                waitForMs={6500}
                topOffset={"3rem"}
              >
                <p className="w-10/12 leading-snug text-3xl mt-2 text-off-white">
                  As a unicorn, I have passion for building beautiful and
                  functional digital experiences. I bridge the gap between
                  aesthetics and technology, ensuring every project I am involved
                  in is able to deliver in all aspects of user experience.
                </p>
              </PopIn>
            </div>
            <PopIn requireVisibility={true} waitForMs={7500}>
              <p className="font-pixel text-2xl mt-8">
                <span className="text-yellow">$</span> list skills
              </p>
            </PopIn>
          </div>   
        </div>
        <div className="w-9/12 mx-auto text-right">
          <PopIn requireVisibility={true} waitForMs={9000}>
            <ul className="font-pixel text-2xl">
              <li>
                <button 
                className="w-full text-right"
                onClick={() => window.scrollTo(0, 1950)}
                >
                  <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">code</p>
                </button>
              </li>
              <li>
                <button className="w-full text-right">
                  <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">art</p>
                </button>
              </li>
              <li>
                <button className="w-full text-right">
                  <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">ux</p>
                </button>
              </li>
            </ul>
          </PopIn>
      </div>
      <div className="intro-skills h-skills-ticker w-11/12 mb-5 mx-auto">
        <SkillsTicker {...rect} />
      </div>
    </section>
  );
};

export default IntroWhoAmI;

import { animated, config, useSpringRef, useTransition } from "@react-spring/web";
import PopIn from "../components/PopIn";
import { PopInText } from "../components/PopInText";
import SkillsTicker from "../components/SkillsTicker";
import "./IntroWhoAmI.css";
import useMeasure from 'react-use-measure';
import { useEffect, useMemo, useState } from "react";


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
                {titles[i]}
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
    <section ref={introRef} className="intro bg-black grid-bg-intro h-screen flex flex-col justify-center">
      <div className="intro-main flex-grow flex flex-col h-2/4 gap-28 justify-center">
          <div className="mx-auto w-9/12 gap-6">
            <div className="mx-auto">
              <h1 className="text-7xl text-white">
              <PopIn requireVisibility={true}>
                Patrick is <WhoAmITitle />
              </PopIn>
              </h1>
              <PopIn
                requireVisibility={true}
              >
                <p className="w-10/12 leading-snug text-2xl mt-2 text-white">
                  As a unicorn, I have passion for building beautiful and
                  functional digital experiences. I bridge the gap between
                  aesthetics and technology, ensuring every project I am involved
                  in is
                </p>
              </PopIn>
            </div>
            <PopIn requireVisibility={true}>
              <p className="font-pixel text-2xl">
                <span className="text-yellow">$</span> list skills
              </p>
            </PopIn>
          </div>   
        </div>
        <div className="w-11/12 mr-auto text-right">
          <ul className="font-pixel text-2xl">
            <li>
              <button>
                <p className="font-pixel text-2xl">code</p>
              </button>
            </li>
            <li>
              <button>
                <p className="font-pixel text-2xl">art</p>
              </button>
            </li>
            <li>
              <button>
                <p className="font-pixel text-2xl">ux</p>
              </button>
            </li>
          </ul>
      </div>
      <div className="intro-skills h-skills-ticker w-11/12 mb-5 mx-auto">
        <SkillsTicker {...rect} />
      </div>
    </section>
  );
};

export default IntroWhoAmI;

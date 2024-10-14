import {
  animated,
  useTransition,
} from "@react-spring/web";
import SkillsTicker from "../components/SkillsTicker";
import "./IntroWhoAmI.css";
import useMeasure from "react-use-measure";
import { useRef, useState } from "react";
import "../components/RainbowGlow.css";
import "../components/PulseGlow.css";
import WhoAmIMain from "../components/WhoAmIMain";
import UnicornDefinition from "../components/UnicornDefinition";




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

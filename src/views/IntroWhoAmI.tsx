import { PopInText } from "../components/PopInText";
import SkillsTicker from "../components/SkillsTicker";
import "./IntroWhoAmI.css";
import useMeasure from 'react-use-measure';

const IntroWhoAmI = () => {
  const [ introRef, rect ] = useMeasure();

  return (
    <section ref={introRef} className="intro bg-black grid-bg-intro h-screen flex flex-col justify-center">
      <div className="intro-main flex-grow flex flex-col h-2/4 gap-28 justify-end">
        <div className="intro-text flex gap-4">
          <div className="text-right text-7xl w-2/12">🦄</div>
          <div className="mr-auto flex flex-col w-9/12 gap-6">
            <div className="flex flex-col gap-3  mx-auto">
              <h1 className="text-7xl text-white">
              <PopInText delay={50} requireVisibility={true}>
                Patrick is a Unicorn
              </PopInText>
              </h1>
              <p className="w-10/12 leading-snug text-2xl text-white">
                As a unicorn, I have passion for building beautiful and
                functional digital experiences. I bridge the gap between
                aesthetics and technology, ensuring every project I am involved
                in is
              </p>
            </div>
            <p className="font-pixel text-2xl">
              <span className="text-yellow">$</span> list skills
            </p>
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
      </div>
      <div className="intro-skills h-skills-ticker w-11/12 mb-5 mx-auto">
        <SkillsTicker {...rect} />
      </div>
    </section>
  );
};

export default IntroWhoAmI;

import { useState } from "react";
import "./AppsShowcase.css";
import AppsShowcaseRoulette from "../components/AppsShowcaseRoulette";
import AppsShowcaseListView from "../components/AppsShowcaseListView";
import { useSpring, animated } from "@react-spring/web";
import PopIn from "../components/PopIn";

const AppsShowcase = () => {
  const [rouletteView, setRouletteView] = useState(true);

  return (
    <PopIn requireVisibility={true} topOffset={"3rem"}>
      <section className="relative mx-auto mt-32 h-screen max-w-200%">
        <header className="md:px-32 px-4 pt-6 leading-3 lg:text-right text-center">
          <h1 className="lg:text-7xl sm:text-6xl mobile:text-3xl mobile:py-2 sm:py-0 font-unbounded text-black">
            Apps I’ve Built
          </h1>
          <p className="hidden md:block font-black text-fuschia text-2xl p-0 m-0 relative bottom-2 tracking-tighter">
            ////////////////////////////////////////////////////
          </p>
          <p className="mobile:hidden mobileL:block md:hidden font-black text-fuschia text-2xl p-0 m-0 relative bottom-2 tracking-tighter">
            //////////////////////////////////
          </p>
        </header>
        <div className="flex flex-col h-roulette lg:w-11/12 sm:w-full mx-auto">
          <h3 className="sm:inline mobile:hidden font-serif text-fuschia text-2xl">&lt;Showcase&gt;</h3>
          <div className="flex flex-row flex-grow roulette">
            <div className="mobile:hidden sm:block">
              <svg width="50" height="715">
                <line className="deco-line" x1="1" y1="0" x2="40" y2="0" />
                <line className="deco-line" x1="1" y1="0" x2="0" y2="40" />
                <line
                  className="deco-line-sm"
                  x1="1"
                  y1="140"
                  x2="25"
                  y2="140"
                />
                <line
                  className="deco-line-sm"
                  x1="1"
                  y1="570"
                  x2="25"
                  y2="570"
                />
              </svg>
            </div>
            <div className="h-full lg:w-11/12 mobile:w-full mx-auto flex flex-col justify-center">
              <p 
              className="box-shadow-3d lg:hidden inline max-w-64 text-off-white text-center font-pixbold w-11/12 mx-auto bg-black text-2xl">
                OVERVIEW
              </p>
              <div className="lg:p-10 mobileL:p-4 mobile:p-2 flex lg:flex-row justify-between items-center mobile:flex-col">
                <div className="flex justify-center lg:w-1/2 flex-grow mobile:h-min mobile:w-11/12">
                  {rouletteView ? (
                    <AppsShowcaseRoulette />
                  ) : (
                    <AppsShowcaseListView />
                  )}
                </div>
                <div className="flex flex-col lg:justify-center mobile:justify-start items-center mobile:h-min lg:h-full lg:w-1/2 mobile:w-full">
                  <div className="flex flex-col items-center justify-center lg:w-9/12 mobile:w-full">
                    <p className="mobile:hidden lg:inline font-pixel text-lg text-black">overview</p>
                    <p className="font-nova text-black text-3xl mobile:hidden lg:inline">
                      A CATALOG OF PROJECTS RANGING FROM FRONTEND to BACKEND to
                      GAME DEVELOPMENT.
                    </p>
                    <animated.div className="mt-5 mb-2 text-black font-pixbold text-xl px-4">
                      {rouletteView ? "Roulette" : "List"} View
                    </animated.div>
                    <div
                      className=" toggle-display-type"
                      onClick={() => setRouletteView((val) => !val)}
                    >
                      <input
                        type="checkbox"
                        className="toggle-display-type__checkbox"
                        checked={!rouletteView}
                        onChange={() => {
                          setRouletteView((val) => !val);
                        }}
                      />
                      <div className="toggle-display-type__switch" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto mobile:hidden sm:block">
              <svg width="50" height="715">
                <line
                  className="deco-line-sm"
                  x1="15"
                  y1="140"
                  x2="40"
                  y2="140"
                />
                <line
                  className="deco-line-sm"
                  x1="15"
                  y1="570"
                  x2="40"
                  y2="570"
                />
                <line
                  className="deco-line-sm"
                  x1="40"
                  y1="710"
                  x2="40"
                  y2="670"
                />
                <line
                  className="deco-line-sm"
                  x1="0"
                  y1="710"
                  x2="40"
                  y2="710"
                />
              </svg>
              <h3 className="relative right-20 sm:inline mobile:hidden font-serif text-fuschia text-2xl text-right">
            &lt;/Showcase&gt;
            </h3>
            </div>
          </div>
        </div>
        
      </section>
    </PopIn>
  );
};

export default AppsShowcase;

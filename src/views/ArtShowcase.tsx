import { CSSProperties, useEffect, useRef, useState } from "react";
import "./ArtShowcase.css";
import {
  useSpringRef,
  useSprings,
  useTransition,
  animated,
  AnimatedProps,
  config,
} from "@react-spring/web";

import GraphicDesignPager from "../components/manualGalleryPaging/GraphicDesignPager";
import MiscDesignPager from "../components/manualGalleryPaging/MiscDesignPager";
import PopIn from "../components/PopIn";
import CharacterDesignPager from "../components/manualGalleryPaging/CharacterDesignPager";
import PixelArtPager from "../components/manualGalleryPaging/PixelArtPager";
import { PopInText } from "../components/PopInText";

const categories = [
  { name: "Character Design" },
  { name: "Pixel Art" },
  { name: "Graphic Design" },
  { name: "Misc. Pieces" },
];

const ArtGallery = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const bars = useRef<HTMLDivElement>(null);

  const [springs, categoryApi] = useSprings(
    categories.length,
    (i) => ({
      from: {
        transformOrigin: "bottom center",
        transform: "scaleY(0.0)",
        backgroundColor: "black",
      },
      to: {
        transform: i === categoryIndex ? "scaleY(1.0)" : "scaleY(0.2)",
        backgroundColor: i === categoryIndex ? "#DFA100" : "black",
      },
      config: config.stiff,
    }),
    [categoryIndex]
  );

  useEffect(() => {
    categoryApi.start();
  });

  return (
    <PopIn requireVisibility={true} topOffset={"3rem"}>
      <section 
      className="min-h-max relative mt-3 mx-auto 2 h-screen art-showcase flex flex-col justify-stretch gap-0 mb-72 max-w-200%"
      data-scroll-section>
        <header className="justify-between mx-auto w-art-header px-4 pt-6 leading-3 md:text-left text-center">
          <div>
            <h1 className="sm:ml-0 md:text-7xl sm:text-5xl mobile:text-5xl font-unbounded text-black p-0 m-0 ">
              Art Gallery
            </h1>
            <p className="hidden md:block font-black text-fuschia text-2xl p-0 m-0 relative bottom-2 tracking-tighter">
              /////////////////////////////////////////////////
            </p>
            <p className="mobile:hidden sm:block md:hidden font-black text-fuschia text-2xl p-0 m-0 relative bottom-2 tracking-tighter">
              //////////////////////////////////
            </p>
          </div>
        </header>
        <div className="xl:w-11/12 w-full gallery-height mt-0 mx-auto min-h-max relative">
          <div className="w-full max-w-full relative">
            <div className="text-2xl mobile:pt-12 sm:pt-6 md:pt-0 font-nova mx-auto w-max md:text-left relative sm:mb-4 vlg:mb-4 xl:mb-8 pb-px">
              <h2>
                <PopInText durationPerWord={100}>
                  I AM COMFORTABLE WITH...
                </PopInText>
              </h2>
              <svg className="absolute bottom-1 -left-12" width="1200" height="2">
                <line className="deco-line" x1="0" y1="0" x2="440" y2="0" />
              </svg>
            </div>
            <div
              ref={bars}
              className="lg:mt-4 vlg:mt-0 mx-auto mobile-bars flex flex-row w-full items-start gap-2 h-16"
            >
              {springs.map((props, i) => (
                <animated.div
                  key={`as-bar${i}`}
                  className="mobile:min-w-48å sm:w-1/4 h-full text-center relative z-10 cursor-pointer category-bar"
                  onClick={() => {
                    bars.current?.scrollTo(i * 80, bars.current.scrollTop);
                    setCategoryIndex(i);
                  }}
                >
                  <animated.div
                    className={`absolute w-full h-full -z-10 bg-yellow`}
                    style={props}
                  />
                  <animated.p className="mobile:py-2 mobile:px-2 mt-2 h-full align-text-bottom text-lg font-pixel text-black leading-4">
                    {categories[i].name}
                  </animated.p>
                </animated.div>
              ))}
            </div>

            <div style={{ display: categoryIndex === 0 ? "block" : "none" }}>
              <CharacterDesignPager index={0} />
            </div>
            <div style={{ display: categoryIndex === 1 ? "block" : "none" }}>
              <PixelArtPager index={0} />
            </div>
            <div style={{ display: categoryIndex === 2 ? "block" : "none" }}>
              <GraphicDesignPager index={0} />
            </div>
            <div style={{ display: categoryIndex === 3 ? "block" : "none" }}>
              <MiscDesignPager index={0} />
            </div>
          </div>
        </div>
      </section>
    </PopIn>
  );
};

export default ArtGallery;

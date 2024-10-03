

import { CSSProperties, useEffect, useState } from "react";
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

const categories = [
  { name: "Character Design" },
  { name: "Pixel Art" },
  { name: "Graphic Design" },
  { name: "Misc. Pieces" },
];

const ArtGallery = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

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
    <section className="relative mt-3 mx-auto 2 h-screen art-showcase flex flex-col justify-stretch gap-0 mb-72 max-w-200%">
      <header className="w-art-header h-art-header md:pl-16 px-4 pt-6 leading-3 md:text-left text-center flex flex-row justify-between">
        <div>
          <h1 className="md:text-7xl text-6xl font-unbounded text-black p-0 m-0 ">
            Art Gallery
          </h1>
          <p className="hidden md:block font-black text-fuschia text-2xl p-0 m-0 relative bottom-2 tracking-tighter">
            /////////////////////////////////////////////////
          </p>
          <p className="block md:hidden font-black text-fuschia text-2xl p-0 m-0 relative bottom-2 tracking-tighter">
            ///////////////////////////////////
          </p>
        </div>
        <div className="flex flex-col justify-between font-nova text-3xl">
          <div className="relative">
            <h2>I AM COMFORTABLE WITH...</h2>
            <svg className="absolute bottom-1" width="440" height="2">
              <line className="deco-line" x1="1" y1="0" x2="440" y2="0" />
            </svg>
          </div>
          <div className="flex flex-row w-full items-start gap-2 h-16">
            {springs.map((props, i) => (
              <animated.div
                key={`as-bar${i}`}
                className="w-1/4 h-full text-center relative z-10 cursor-pointer category-bar"
                onClick={() => setCategoryIndex(i)}
              >
                <animated.div
                  className={`absolute w-full h-full -z-10 bg-yellow`}
                  style={props}
                />
                <animated.p className="mt-2 h-full align-text-bottom text-lg font-pixel text-black leading-4">
                  {categories[i].name}
                </animated.p>
              </animated.div>
            ))}
          </div>
        </div>
      </header>
      <div className="w-11/12 mx-auto h-3/4 relative">
        <div className="PHOTOS w-full max-w-full relative">

            {/* 
            
            
            
            */}

          <div style={{display: (categoryIndex === 0 ? 'block' : 'none' )}}>
              <CharacterDesignPager index={0} />
          </div>
          <div style={{display: (categoryIndex === 1 ? 'block' : 'none' )}}>
              <PixelArtPager index={0} />
          </div>
          <div style={{display: (categoryIndex === 2 ? 'block' : 'none' )}}>
              <GraphicDesignPager index={0} />
          </div>
          <div style={{display: (categoryIndex === 3 ? 'block' : 'none' )}}>
              <MiscDesignPager index={0} />
          </div>
        </div>
      </div>
    </section>
    </PopIn>
  );
};

export default ArtGallery;

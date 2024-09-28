

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
import { RowsPhotoAlbum } from "react-photo-album";

import Photos from './pictures';

const categories = [
  { name: "Character Design" },
  { name: "Pixel Art" },
  { name: "UX Design" },
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
    <section className="h-screen art-showcase flex flex-col justify-stretch gap-0">
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
        <div className="__CANVAS_DECO absolute w-full h-full w-deco hidden md:flex justify-between pointer-events-none">
          <svg width="50" height="715">
            <line className="deco-line" x1="1" y1="0" x2="40" y2="0" />
            <line className="deco-line" x1="1" y1="0" x2="0" y2="40" />
            <line className="deco-line-sm" x1="1" y1="140" x2="25" y2="140" />
            <line className="deco-line-sm" x1="1" y1="570" x2="25" y2="570" />
          </svg>
          <svg width="50" height="715">
            <line className="deco-line-sm" x1="25" y1="140" x2="50" y2="140" />
            <line className="deco-line-sm" x1="25" y1="570" x2="50" y2="570" />
            <line className="deco-line-sm" x1="49" y1="690" x2="49" y2="650" />
            <line className="deco-line-sm" x1="10" y1="690" x2="50" y2="690" />
          </svg>
        </div>
        <div className="h-full">
          <RowsPhotoAlbum photos={Photos.PixelArtPhotos}/>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;

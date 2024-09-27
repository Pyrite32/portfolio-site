import { CSSProperties, useEffect, useState } from "react";
import "./ArtShowcase.css";
import {
  useSpringRef,
  useSprings,
  useTransition,
  animated,
  AnimatedProps,
} from "@react-spring/web";

const categories = [
  { name: "Character Design" },
  { name: "Pixel Art" },
  { name: "UX Design" },
  { name: "Misc. Pieces" },
];

const ArtGalleryCategory = (props: {
  clickCallback: (index: number) => void;
  index: number;
  active: boolean;
  style: AnimatedProps<{ transform: string; backgroundColor: string }>;
}) => {
  console.log(props.index);
  return (
    <animated.div
      key={`$as-bar{index}`}
      className="w-1/4 h-full text-center relative z-10 cursor-pointer category-bar"
      onClick={() => props.clickCallback(props.index)}
    >
      <animated.div
        className={`absolute w-full h-full -z-10`}
        style={{
          backgroundColor: props.style.backgroundColor,
          transform: props.style.transform,
        }}
      />
      <animated.p className="mt-2 h-full align-text-bottom text-lg font-pixel text-black leading-4">
        {"a"}
      </animated.p>
    </animated.div>
  );
};

const ArtGallery = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const [transitionBars, transitionBarsApi] = useSprings(categories.length, (i) => ({
    from: {
      transform: "scaleY(1.0)",
      backgroundColor: "red",
    },
  }));

  const handleClick = (index: number) => {
    setCategoryIndex(index);
  };

  useEffect(() => {
    console.log("start!");
    transitionBarsApi.start();
  }, [categoryIndex]);

  return (
    <section className="h-screen">
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
            {transitionBars((style, i) => {
              const props = {
                clickCallback: handleClick,
                index: i,
                active: categoryIndex === i,
                style: style,
              };
              return <ArtGalleryCategory {...props} />;
            })}
          </div>
        </div>
      </header>
    </section>
  );
};

export default ArtGallery;

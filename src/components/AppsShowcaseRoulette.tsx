// sprout
// alice n'ferno
// floorboards
// disaster family (the AI game)
// shipDotIO
// compartments
// portfolio website

// based on: https://codesandbox.io/p/sandbox/8s3kf
// I want to implement my own solution too.

import pages from "./AppsShowcaseData";

import "./AppsShowcaseRoulette.css";
import { useRef, useState } from "react";
import useMeasure from "react-use-measure";
import {
  useSprings,
  animated,
  useSpring,
  useSpringRef,
} from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import swipeIcon from "../assets/swipe.svg";

const AppsShowcaseRoulette = () => {
  const currentIndex = useRef(0);
  const [ref, { width }] = useMeasure();
  const [pageData, setPageData] = useState(pages[0]);
  const [triedSwipe, setTriedSwipe] = useState(false);

  const [springs, api] = useSprings(
    pages.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width]
  );

  const flyInSpringApi = useSpringRef();
  const [flyInSpring] = useSpring(
    {
      ref: flyInSpringApi,
      from: { opacity: 1 },
    },
    [pageData]
  );

  const bind = useDrag(
    ({
      active,
      movement: [moveX],
      direction: [directionX],
      distance,
      cancel,
    }) => {
        if (active && triedSwipe == false) {
            setTriedSwipe(true);
        } 
      if (active && distance > width / 2) {
        const newIndex = currentIndex.current - Math.sign(directionX);
        currentIndex.current = Math.min(
          pages.length - 1,
          Math.max(0, newIndex)
        );
        setPageData((_) => pages[currentIndex.current]);
        flyInSpringApi.start({
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        });
        cancel();
      }
      api.start((i) => {
        if (Math.abs(currentIndex.current - i) > 1) return { display: "none" };
        const x = (i - currentIndex.current) * width + (active ? moveX : 0);
        const scale = active ? 1.0 - distance / width / 2.0 : 1.0;
        return { x, scale, display: "block" };
      });
    }
  );

  return (
    <article className="relative roulette-main h-full p-0 flex flex-col justify-center items-center">
      <div
        ref={ref}
        className="roulette-content flex flex-row items-baseline overflow-hidden h-roulette"
      >
        {springs.map(({ x, display, scale }, i) => (
          <>
            { triedSwipe == false &&
            <div className="absolute pointer-events-none w-full h-full z-20 bg-slate opacity-30 flex flex-col items-center justify-center">
              <img src={swipeIcon} alt="" className="mx-auto w-1/5 opacity-85" />
              <p className="text-center pt-10 text-lg lg:text-xl xl:text-2xl font-nova italic text-off-white">Swipe to the left to view projects.</p>
            </div>
            }
            <animated.div
              className="roulette-infront-page"
              {...bind()}
              key={i}
              style={{ display, x }}
            >
              <animated.div
                style={{ scale, backgroundImage: `url(${pages[i].icon})` }}
              />
            </animated.div>
          </>
        ))}
      </div>
      <animated.div style={flyInSpring} className="py-4">
        <p className="text-2xl text-black text-wrap font-bold w-fit underline underline-offset-">
          <a
            className="text-fuschia hover:text-teal transition-colors"
            href={pageData.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {pageData.name}
          </a>
        </p>
        <p className="text-xl text-black text-wrap  w-fit">
          {pageData.description}
        </p>
      </animated.div>
    </article>
  );
};

export default AppsShowcaseRoulette;

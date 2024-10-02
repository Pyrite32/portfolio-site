import {
  config,
  animated,
  Lookup,
  SpringRef,
  SpringValue,
  SpringValues,
  useScroll,
  useSprings,
  useInView,
} from "@react-spring/web";
import { useEffect, useId, useRef, useState } from "react";

import "./PopInText.css";

const ease10 = (val10: number, by: number) => {
  const PHI = 1.618033988749;
  const exponent = Math.pow(PHI, 1 / (1 - by)) - Math.pow(PHI, 1 / (1 + by));
  return Math.pow(val10, exponent);
};

const animFrom = {
    transform: 1.0,
    opacity: 0,
}

const animTo = {
    transform: 0.0,
    opacity: 1,
}

export const PopInText = (props: {
  sentence: string;
  delay?: number;
  baseDuration?: number;
  durationPerWord?: number;
  requireVisibility?: boolean;
}) => {
  const wordArray = useRef<Array<string>>(props.sentence.split(" "));
  const id = useId();

  const [ref, inView] = useInView();

  const [springs, api] = useSprings(
    wordArray.current.length,
    (i) => ({
      from: animFrom,
      config: {
        duration:
          (props.baseDuration || 500) + i * (props.durationPerWord || 100),
        easing: (x) => ease10(x, 0.15),
        ...config.stiff,
      },
      delay: props.delay || 200,
    }),
    [props]
  );

  useEffect(() => {
    wordArray.current = props.sentence.split(" ");
    if (!props.requireVisibility) {
        api.start(animTo);
    }
  }, [props.sentence]);

  useEffect(() => {
    if (inView && props.requireVisibility) {
        api.start(animTo);
    }
    else if (!inView && props.requireVisibility) {
        api.stop();
    }
    // maybe I want to play the anim again?
  }, [inView]);

  return (
    <animated.span ref={ref}>
      {springs?.map((item, i) => (
        <animated.span key={`popInText-${id}${i}`} className="mask">
          <animated.span
            style={{
              ...item,
              visibility:
                !inView && props.requireVisibility ? "hidden" : "visible",
              transform: item.transform.to(
                (value) => `translateY(${value * 100}%)`
              ),
            }}
            className="word"
          >
            {wordArray.current[i] == " " ? "\xa0" : wordArray.current[i]}
            {i < wordArray.current.length - 1 ? "\xa0" : ""}
          </animated.span>
        </animated.span>
      ))}
    </animated.span>
  );
};

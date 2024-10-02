import {
  config,
  animated,
  Lookup,
  SpringRef,
  SpringValue,
  SpringValues,
  useSprings,
} from "@react-spring/web";
import { useEffect, useId, useRef, useState } from "react";

const durationFirstWord = 300;
const durationPerWord = 100;

import "./PopInText.css";

const ease10 = (val10: number, by: number) => {
    const PHI = 1.618033988749;
    const exponent = (Math.pow(PHI, (1 / (1 - by))) - Math.pow(PHI, (1 / (1 + by))));
    return Math.pow(val10, exponent);
} 

export const PopInText = (props: { sentence: string, delay: number}) => {
  const wordArray = useRef<Array<string>>(props.sentence.split(" "));
  const id = useId();

  const [springs, api] = useSprings(
    wordArray.current.length,
    (i) => ({
      from: {
        transform: 1.0,
        opacity: 0,
      },
      to: {
        transform: 0.0,
        opacity: 1,
      },
      config: {
        duration: durationFirstWord + i * durationPerWord,
        easing: (x) => ease10(x, 0.15),
        ...config.stiff
      },
      delay: props.delay
    }),
    [props]
  );

  useEffect(() => {
    wordArray.current = props.sentence.split(" ");
    api.start();
  }, [props.sentence]);

  return springs?.map((item, i) => (
    <animated.span key={`popInText-${id}${i}`} className="mask">
      <animated.span
        style={{ ...item, transform: item.transform.to(value => `translateY(${value * 100}%)`)}}
        className="word"
      >
        {wordArray.current[i] == " " ? "\xa0" : wordArray.current[i]}{i < wordArray.current.length - 1 ? '\xa0' : ''}
      </animated.span>
    </animated.span>
  ));
};

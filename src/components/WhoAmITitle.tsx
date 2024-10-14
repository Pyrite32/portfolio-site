import { animated, config, useInView, useSpringRef, useTransition } from "@react-spring/web";
import { useEffect, useMemo, useState } from "react";

const titles = ["a Programmer", "an Artist", "a UX Designer", "a Unicorn"];

const WhoAmITitle = (props: {
  onUnicornButtonClick: () => void;
  shouldPlay?: boolean;
}) => {
  const [titleIndex, setTitleIndex] = useState(0);

  const transRef = useSpringRef();
  const [ref, isVisible] = useInView();

  const changeTitleTransitions = useTransition(titleIndex, {
    ref: transRef,
    from: { transform: "scaleY(0.1)" },
    enter: { transform: "scaleY(1.0)" },
    leave: { transform: "scaleY(0.0)" },
    config: config.default,
  });

  const timeout = useMemo(() => {
    // there has to be a better way.
    let index = 0;
    return setInterval(() => {
      if (index < titles.length - 1 && isVisible) {
        console.log("titleIndex: " + index + " len: " + (titles.length - 1));
        // THIS IS SO CURSED            v!
        index += 1;
        setTitleIndex((prev) => Math.min(titles.length - 1, prev + 0.5));
      }
    }, 2000);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      clearInterval(timeout);
    }
  }, [isVisible]);

  useEffect(() => {
    if (titleIndex === titles.length - 1) {
      console.log("clearing index!");
      clearInterval(timeout);
    }
    if (titleIndex < titles.length) {
      transRef.start();
    }
  }, [titleIndex]);

  return (
    <span ref={ref} className="relative ml-4 mobile:top-3 lg:top-0">
      {changeTitleTransitions((myStyle, i) => (
        <animated.span
          style={{
            ...myStyle,
            width: "max-content",
            position: "absolute",
            transformOrigin: "center center",
          }}
        >
          {i === titles.length - 1 ? (
            <button
              onClick={props.onUnicornButtonClick}
              className="rainbow-glow relative cursor-pointer right-4"
            >
              {titles[i]}
            </button>
          ) : (
            titles[i]
          )}
        </animated.span>
      ))}
    </span>
  );
};


export default WhoAmITitle;
import { animated, config, useInView, useSpringRef, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    transRef.start();
  }, [titleIndex]);

  useEffect(() => {
    const interval = isVisible ? setInterval(() => {
        setTitleIndex(prev => prev < titles.length - 1 ? prev + 1 : prev);
        if (titleIndex <= titles.length - 1) {
            console.log(titleIndex);
        }
    }, 1500) : undefined;
    return () => {
        if (interval) {
            clearInterval(interval)
        }
    };
  }, [isVisible])

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
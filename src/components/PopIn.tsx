import { animated, config, useInView, useSpring } from "@react-spring/web";
import { ReactNode, useEffect, useId, useRef, useState } from "react";
import ease10 from "../ts/ease10";
import { Property } from 'csstype'

// taken from csstype


type PopInProps = {
    children: React.ReactNode;
    requireVisibility?: boolean,
    //how do I make this change depending on whether I want it to come from the top, left, right, bottom, etc?
    topOffset?: Property.Top,
    springConfig?: { tension: number, friction: number }
    waitForMs?: number
    finished?: boolean
}

const PopIn = (props : PopInProps) => {


    const playedAnim = useRef(false);
    const [ref, inView] = useInView();
    const [canClick, setCanClick] = useState(false);

    const toAnimation = {
        to: {
            opacity: 1,
            top: "0%",
        }
    }

    const [spring, api] = useSpring(() => ({
          from: {
            opacity: props.finished ? 1 : 0,
            top: props.finished ? 0 : (props.topOffset || "3rem"),
          },
          config: {
            easing: (x) => ease10(x, 0.15),
            ...(props.springConfig || config.slow),
            
          },
          onRest: () => setCanClick(true)
        }));
    
      useEffect(() => {
        if (props.requireVisibility) {
            if (inView && playedAnim.current == false) {
                playedAnim.current = true;
                setTimeout(() => api.start(toAnimation), props.waitForMs || 0);
            }
        }
        else {
            api.start(toAnimation);
        }
        // maybe I want to play the anim again?
      }, [inView]);
    
    return (
        <animated.span ref={ref} style={{
            position: "relative", pointerEvents: (canClick ? 'all' : 'none'), ...spring
        }} >
            {props.children}
        </animated.span>
    )
}

export default PopIn;
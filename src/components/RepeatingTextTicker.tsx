import { useEffect, useRef, useState } from "react";
import "./RepeatingTextTicker.css";

const EXTRAPOLATE_WIDTH_PX = 20;

const RepeatingTextTicker = (props: { text: string }) => {
  const getTickerText = () => {
    const windowSize = window.innerWidth;
    const textFillSpace = props.text + " ";
    const resultArray = Array(Math.ceil(windowSize / wordWidth())).fill(
      textFillSpace
    );
    if (resultArray.length < 1) {
      return {
        numCopies: 0,
        content: "0",
      };
    }
    resultArray[resultArray.length - 1] = props.text;
    console.log("MAKE TEXT with content length: " + resultArray.length);
    return {
      numCopies: resultArray.length,
      content: resultArray.join(""),
    };
  };

  const wordWidth = () => {
    return wordMeasure.current != null ? wordMeasure.current.clientWidth : 150;
  };

  const tickerWidth = () => {
    return tickerMeasure.current != null
      ? tickerMeasure.current.clientWidth
      : 150;
  };

  const wordMeasure = useRef<HTMLDivElement | null>(null)!;
  const tickerMeasure = useRef<HTMLDivElement | null>(null)!;
  const [tickerText, setTickerText] = useState(getTickerText());

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth > tickerWidth() + EXTRAPOLATE_WIDTH_PX ||
        window.innerWidth < tickerWidth() - wordWidth() - EXTRAPOLATE_WIDTH_PX
      ) {
        console.log(
          "window width is: " +
            window.innerWidth +
            " and ticker length is " +
            (tickerWidth() + EXTRAPOLATE_WIDTH_PX)
        );
        //console.log(getTickerText());
        setTickerText(getTickerText());
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" text-lg bg-off-white">
        <span
            ref={tickerMeasure}
            className="w-min whitespace-nowrap h-min text-clip overflow-hidden ticker-text relative"
        >
            <p className="relative ticker-scroll text-black font-pixbold text-lg inline">
                &nbsp;{tickerText.content}&nbsp;
                {tickerText.content}
            </p>
        </span>
    </div>
  );
};

export default RepeatingTextTicker;

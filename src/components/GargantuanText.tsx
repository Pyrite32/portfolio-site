import { useEffect, useState } from "react";
import remap from "../ts/remap";

const GargantuanText = () => {
  const [scrollY, setScroll] = useState(0);
  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  useEffect(() => {
    const text = document.getElementById("gargantuanText")!;
    const handleScroll = () => {
      setScroll(text.getBoundingClientRect().top);
    };

    const handleResize = () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let rightAmnt = remap(scrollY, 0, windowSize.innerWidth, 300, -1200);
  if (rightAmnt == null) rightAmnt = 0;

  return (
    <h1
      id="gargantuanText"
      className="absolute text-gargantuan font-outline text-black p-0 m-0"
      style={{ right: rightAmnt }}
    >
      COURSEWORK
    </h1>
  );
};

export default GargantuanText;

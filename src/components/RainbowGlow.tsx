import { useState } from "react";
import "./RainbowGlow.css";

interface RainbowGlowProps {
  text: string;
}

const RainbowAura = (props: RainbowGlowProps) => {
  return (
      <span
        className="rainbow-button rounded-full px-4 my-1 inline-block"
      >
        {props.text}
      </span>
  );
};

export default RainbowAura;

import { useState } from "react";
import "./CourseworkTile.css";

import dsaIcon from "../assets/course-icons/dsa.svg";
import japanIcon from "../assets/course-icons/japan.svg";
import linearAlgebraIcon from "../assets/course-icons/linearAlgebra.svg";
import operatingSystemsIcon from "../assets/course-icons/operatingSystems.svg";
import performantProgrammingIcon from "../assets/course-icons/performantProgramming.svg";
import plcIcon from "../assets/course-icons/plc.svg";
import taIcon from "../assets/course-icons/ta.svg";
import uxIcon from "../assets/course-icons/ux.svg";
import { TypeAnimation } from "react-type-animation";
import CourseworkData from "../ts/CourseworkData";
import CardStyle from "../ts/CardStyle";


const iconToSVG: Map<string, string> = new Map([
  ["dsa", dsaIcon],
  ["japan", japanIcon],
  ["linearAlgebra", linearAlgebraIcon],
  ["operatingSystems", operatingSystemsIcon],
  ["performantProgramming", performantProgrammingIcon],
  ["plc", plcIcon],
  ["ta", taIcon],
  ["ux", uxIcon],
]);

const CourseworkTitle = (props: {
  data: CourseworkData;
  cardStyle: CardStyle;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #A6A6A6",
        borderTopWidth: props.cardStyle.topBorderWidth,
        borderLeftWidth: props.cardStyle.leftBorderWidth,
        borderRightWidth: props.cardStyle.rightBorderWidth,
        borderBottomWidth: props.cardStyle.bottomBorderWidth,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="box-border font-pixel max-w-1/4 bg-off-white relative"
    >
      {hovered && 
        <div 
            className={`absolute pointer-events-none z-20 open-card__${props.cardStyle.openDirection} h-full text-off-white`}>
            <div className="p-3">
                <div className="flex justify-between text-xl font-pixbold">
                    <h2>{props.data.code}</h2>
                    <h2 className="text-right">{props.data.name}</h2>
                </div>
                <span className="mt-4 overflow-ellipsis font-pixel text-xl text-light-fuschia">
                    <TypeAnimation 
                        sequence={[
                            props.data.desc
                        ]}
                        speed={99}
                    />
                </span>
            </div>
        </div>
      }
      <div className="TEST flex flex-col items-center px-7 py-5">
        <div className="mx-auto w-max max-h-svg mt-2 mb-8">
          <img
            width={props.data.customWidth}
            src={iconToSVG.get(props.data.icon)}
            alt=""
          />
        </div>
        <div className="text-center font-pixbold text-2xl mb-2">
          {props.data.code}
        </div>
        <div className="text-center text-2xl">{props.data.name}</div>
      </div>
    </div>
  );
};

export default CourseworkTitle;

import { useState } from "react";
import './CourseworkTile.css'

import dsaIcon from '../assets/course-icons/dsa.svg'
import japanIcon from '../assets/course-icons/japan.svg'
import linearAlgebraIcon from '../assets/course-icons/linearAlgebra.svg'
import operatingSystemsIcon from '../assets/course-icons/operatingSystems.svg'
import performantProgrammingIcon from '../assets/course-icons/performantProgramming.svg'
import plcIcon from '../assets/course-icons/plc.svg'
import taIcon from '../assets/course-icons/ta.svg'
import uxIcon from '../assets/course-icons/ux.svg'

export interface CourseworkData {
    code: string,
    name: string,
    desc: string,
    icon: string
}
const iconToSVG: Map<string, string> = new Map([
    ['dsa', dsaIcon],
    ['japan', japanIcon],
    ['linearAlgebra', linearAlgebraIcon],
    ['operatingSystems', operatingSystemsIcon],
    ['performantProgramming', performantProgrammingIcon],
    ['plc', plcIcon],
    ['ta', taIcon],
    ['ux', uxIcon]
]);


const CourseworkTitle = (props: {data: CourseworkData, borderStyle: string}) => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-1/4 bg-white px-7 py-5 font-pixel flex flex-col items-center justify-center"
        >
                <div className="mx-auto w-max flex-grow">
                    <img className="my-auto align-middle pt-12 bg-cover" width="48" src={iconToSVG.get(props.data.icon)}  style={{filter: "brightness(4%)"}} alt="" />
                </div>
                {/* <div className="text-center text-2xl">
                    {props.data.code}
                </div>
                <div className="text-center text-2xl">
                    {props.data.name}
                </div> */}
        </div>
    )
}

export default CourseworkTitle;
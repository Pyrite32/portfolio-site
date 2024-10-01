import { useState } from "react";
import './CourseworkTile.css'

export interface CourseworkData {
    code: string,
    name: string,
    desc: string,
}

const CourseworkTitle = (props: {data: CourseworkData, borderStyle: string}) => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-1/4 bg-white px-7 py-5 font-pixel "
        >
            <div className="text-center">
                {props.data.code}
            </div>
            <div className="text-center">
                {props.data.name}
            </div>
        </div>
    )
}

export default CourseworkTitle;
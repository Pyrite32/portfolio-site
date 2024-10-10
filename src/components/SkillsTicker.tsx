import blenderIcon from "../assets/my-skills-icons/blender.png";
import cppIcon from "../assets/my-skills-icons/c-plus-plus.png";
import cSharpIcon from "../assets/my-skills-icons/c-sharp.png";
import cssIcon from "../assets/my-skills-icons/css.png";
import figmaIcon from "../assets/my-skills-icons/figma.png";
import godotIcon from "../assets/my-skills-icons/godot.png";
import htmlIcon from "../assets/my-skills-icons/html.png";
import illustratorIcon from "../assets/my-skills-icons/illustrator.png";
import javaIcon from "../assets/my-skills-icons/java.png";
import javascriptIcon from "../assets/my-skills-icons/javascript.png";
import logicProIcon from "../assets/my-skills-icons/logic-pro.png";
import luaIcon from "../assets/my-skills-icons/lua.png";
import mongoDBIcon from "../assets/my-skills-icons/mongo-db.png";
import oracleIcon from "../assets/my-skills-icons/oracle.png";
import photoshopIcon from "../assets/my-skills-icons/photoshop.png";
import pythonIcon from "../assets/my-skills-icons/python.png";
import reactIcon from "../assets/my-skills-icons/react.png";
import rustIcon from "../assets/my-skills-icons/rust.png";
import tailwindIcon from "../assets/my-skills-icons/tailwind.png";
import toonBoomIcon from "../assets/my-skills-icons/toon-boom.png";
import typescriptIcon from "../assets/my-skills-icons/typescript.png";
import webflowIcon from "../assets/my-skills-icons/webflow.png";
import muiIcon from "../assets/my-skills-icons/mui.png";
import "./SkillsTicker.css";
import { useState, useEffect } from "react";
import useMeasure, { RectReadOnly } from "react-use-measure";
import remap from '../ts/remap'
// load icons
// move an icon until it disappears
// track whenever icon escapes screen fully
//

const icons = [
  cSharpIcon,
  htmlIcon,
  cssIcon,
  tailwindIcon,
  javascriptIcon,
  typescriptIcon,
  reactIcon,
  pythonIcon,
  mongoDBIcon,
  oracleIcon,
  muiIcon,
  javaIcon,
  rustIcon,
  cppIcon,
  figmaIcon,
  luaIcon,
  webflowIcon,
  photoshopIcon,
  illustratorIcon,
  blenderIcon,
  godotIcon,
  logicProIcon,
  toonBoomIcon,
];

const names = [
  "C#",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Python",
  "MongoDB",
  "Oracle SQL",
  "Material UI",
  "Java",
  "Rust",
  "C++",
  "Figma",
  "Lua",
  "Webflow",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Blender",
  "Godot",
  "Logic Pro X",
  "Toon Boom Harmony",
];

const descriptions = [
    "A versatile, object-oriented programming language developed by Microsoft, primarily used for building .NET apps and Unity games",
    "The standard markup language for creating web pages, providing the structure and content of a website",
    "A stylesheet language used to describe the presentation and layout of HTML documents, allowing for styling and responsive design",
    "A utility-first CSS framework that enables rapid UI development by providing low-level utility classes for styling",
    "A high-level, dynamic programming language widely used for adding interactivity and functionality to web pages",
    "A superset of JavaScript that adds static typing, enabling developers to catch errors early and improve code quality",
    "A JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture",
    "A high-level, interpreted programming language known for its readability and versatility, commonly used in web development, data science, and automation",
    "A NoSQL database that stores data in flexible, JSON-like documents, making it easy to work with unstructured data",
    "A powerful relational database management system (RDBMS) that uses SQL (Structured Query Language) for managing and querying data",
    "A popular React component library that implements Google’s Material Design, providing pre-styled components for building responsive web applications",
    "A widely-used, object-oriented programming language known for its portability across platforms via the Java Virtual Machine (JVM)",
    "A systems programming language focused on safety and performance, featuring memory safety guarantees without needing a garbage collector",
    "An extension of the C programming language that includes object-oriented features, widely used in software development, game development, and systems programming",
    "A web-based UI/UX design tool that allows for collaborative design and prototyping in real-time",
    "A lightweight, high-level scripting language often used in game development and embedded systems for its simplicity and flexibility",
    "A web design tool that allows users to build responsive websites visually without writing code, while generating clean HTML, CSS, and JavaScript",
    "A powerful image editing software used for photo manipulation, graphic design, and digital artwork",
    "A vector graphics editor used for creating logos, illustrations, and complex designs with precision",
    "An open-source 3D creation suite that supports the entirety of the 3D pipeline, including modeling, animation, and rendering",
    "An open-source game engine for creating both 2D and 3D games, known for its user-friendly interface and flexible scripting",
    "A digital audio workstation (DAW) developed by Apple for music production, offering advanced audio editing and mixing tools",
    "A professional animation software used for creating both 2D and 3D animated content, favored by studios for its powerful features",
]

interface SkillsTickerIconData {
  src: string;
  name: string;
  desc: string;
  pause: boolean;
  pageRect: RectReadOnly;
}



const SkillsTickerIcon: React.FC<SkillsTickerIconData> = ({
  src,
  name,
  desc,
  pause,
  pageRect
}) => {
  const [showTooltip, set] = useState(false);
  const [ref, rect] = useMeasure();
  const [tooltipRef] = useMeasure();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setScrollTop(window.scrollY);
  };


  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <img
        ref={ref}
        className="ticker__item"
        src={src}
        alt={name}
        onMouseEnter={() => set(true)}
        onMouseLeave={() => set(false)}
        style={{
          opacity: showTooltip ? "100%" : "50%",
          width: "7.5%"
        }}
      />
        <div
          ref={tooltipRef}
          className={`max-w-2xl fixed z-10 bg-black p-4 pointer-events-none ticker-rev ${pause ? 'ticker-rev-paused' : ''}`}
          style={{
            visibility: (showTooltip ? 'visible' : 'hidden'),
            opacity: "100%",
            left: mousePosition.x - 30,
            // using the top and bottom of the icon, map mousePosition to 'top' pixels.
            top: remap(
              mousePosition.y,
              rect.top,
              rect.top + 160, //not all images are equally sized, so the top and bottom rect difference is high 
              // the below code is me trying to get the mouse position correct
              // even useMeasure doesn't help me with what I'm trying to do!
              // 687 and 1800 are the extreme portions where:
                // 687 - breakpoint where the scrollbar becomes visible
                // 1800 - breakpoint where the scrollbar leaves your view
                // -220 - the 'top' pixels number needed to make the tooltip look good at the 687 breakpoint
                // -860 - the 'top' pixels number needed to make the tooltip look good at the 1800 breakpoint 
              0 + pageRect.top + remap(scrollTop, 687, 1800, -220, 860),
              160 + pageRect.top + remap(scrollTop, 687, 1800, -220, 860),
            ) - 285,
          }}
        >
          <p className="text-lg font-pixel font-bold">{name}</p>
          <p className="text-sm max-w-full text-wrap">
            {desc} 
          </p>
        </div>
    </>
  );
};

const SkillsTicker: React.FC<RectReadOnly> = (props: RectReadOnly) => {

  const [isHoveringTicker, setHoveringTicker] = useState(false);

  return (
    <div className=" w-full max-h-full font-serif flex flex-col justify-between">
      <p className="text-2xl text-light-fuschia font-serif">
        &lt;SkillsTicker&gt;
      </p>
      <hr className="text-light-fuschia" />
        {/* I would love to put overflow-x-hidden, but it causes the tooltips to clip as well */}
      <div className="ticker-wrap flex">
        <div className="ticker flex justify-start items-center p-1" 
            onMouseEnter={() => setHoveringTicker(true)}
            onMouseLeave={() => setHoveringTicker(false)}
            >
          {icons.map((icon, index) => (
            <SkillsTickerIcon
              src={icon}
              name={names[index]}
              desc={descriptions[index]}
              pause={isHoveringTicker}
              pageRect={props}
              key={`ticker${index}`}
            />
          ))}
          {icons.map((icon, index) => (
            <SkillsTickerIcon
              src={icon}
              name={names[index]}
              desc={descriptions[index]}
              pause={isHoveringTicker}
              pageRect={props}
              key={`ticker2${index}`}
            />
          ))}
        </div>
      </div>
      <hr className="text-light-fuschia" />
      <p className="text-2xl text-light-fuschia font-serif text-right py-1">
        &lt;/SkillsTicker&gt;
      </p>
    </div>
  );
};

export default SkillsTicker;

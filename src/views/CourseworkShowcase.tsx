import CourseworkTile, { CardStyle } from '../components/CourseworkTile';
import './CourseworkShowcase.css'

const courses = [
  {
    code: "COP 4600",
    name: "Operating Systems",
    desc: "Piping, networking, multithreading, OS principles, and modification of a custom Unix kernel in C.",
    icon: "operatingSystems",
    customWidth: 48,
  },
  {
    code: "CEN 4930",
    name: "Performant Programming",
    desc: "Programming with Rust and Python. Learned Rust + Unity bindings, multithreading, parallel processing, and async I/O",
    icon: "performantProgramming",
    customWidth: 46,
  },
  {
    code: "COP 3530",
    name: "Data Structures & Algorithms",
    desc: "Custom implementation of various data structures and sorting/pathing algorithms in C++. Learned how to create linked lists, stacks, queues, BSTs, ASTs, graphs, and implement BFS, DFS, Djikstra, and A* algorithms",
    icon: "dsa",
    customWidth: 58,
  },
  {
    code: "MAS 3114",
    name: "Computational Linear Algebra",
    desc: "Vector and matrix math with MATLAB. Learned eigenvalues, echelon forms, vector spaces, and vector transformations.",
    icon: "linearAlgebra",
    customWidth: 44,
  },
  {
    code: "COP 4020",
    name: "Programming Language Concepts",
    desc: "OOP, regex, and creation of a custom programming language using Java. Learned regex, parsing, lexing, and object oriented programming.",
    icon: "plc",
    customWidth: 48,
  },
  {
    code: "CEN 4722",
    name: "UX Design",
    desc: "Learned how to implement UX through Figma. Learned about user stories, responsive design, principles of user-friendly design, and color theory.",
    icon: "ux",
    customWidth: 48,
  },
  {
    code: "DIG 4942",
    name: "Undergraduate Course Assistant",
    desc: "Assisted students in building cut-out animations with ToonBoom Harmony. Performed weekly assessment of student submissions with SyncSketch.",
    icon: "ta",
    customWidth: 76,
  },
  {
    code: "CEN 4930",
    name: "Cross Cultural Engineering & Design",
    desc: "Collaborated in a team of six in Kyoto, Japan to create a unity game centered around disaster prevention.",
    icon: "japan",
    customWidth: 48,
  }
]

const lgCardStyles: Array<CardStyle> = [
  {
    topBorderWidth: 1,
    leftBorderWidth: 1,
    rightBorderWidth: 1,
    bottomBorderWidth: 1,
    openDirection: 'right',
  },
  {
    topBorderWidth: 1,
    leftBorderWidth: 0,
    rightBorderWidth: 0,
    bottomBorderWidth: 1,
    openDirection: 'right',
  },
  {
    topBorderWidth: 1,
    leftBorderWidth: 1,
    rightBorderWidth: 0,
    bottomBorderWidth: 1,
    openDirection: 'left',
  },
  {
    topBorderWidth: 1,
    leftBorderWidth: 1,
    rightBorderWidth: 1,
    bottomBorderWidth: 1,
    openDirection: 'left',
  },
  {
    topBorderWidth: 0,
    leftBorderWidth: 1,
    rightBorderWidth: 1,
    bottomBorderWidth: 1,
    openDirection: 'right',
  },
  {
    topBorderWidth: 0,
    leftBorderWidth: 0,
    rightBorderWidth: 0,
    bottomBorderWidth: 1,
    openDirection: 'right',
  },
  {
    topBorderWidth: 0,
    leftBorderWidth: 1,
    rightBorderWidth: 0,
    bottomBorderWidth: 1,
    openDirection: 'left',
  },
  {
    topBorderWidth: 0,
    leftBorderWidth: 1,
    rightBorderWidth: 1,
    bottomBorderWidth: 1,
    openDirection: 'left',
  },
]

const CourseworkShowcase = () => {
  return (
    <section className="h-screen mt-20">
      <header className="md:px-32 px-4 pt-6 h-32 leading-3 md:text-right text-center relative">
        <h1 className="absolute text-gargantuan  font-outline text-black p-0 m-0">
          Coursework
        </h1>
      </header>
      <div className='big-container mx-auto w-10/12 h-min bg-off-white relative z-10'>
        <div className='py-20 px-6 w-8/12 mx-auto h-full gap-0'>
          <p className='text-fuschia font-serif leading-none'>&lt;Coursework&gt;</p>
          <div className='big-container__layout flex flex-wrap '>
            {courses.map((item, index) => (
              <CourseworkTile 
              data={item} 
              cardStyle={lgCardStyles[index]} 
              />
            ))}
          </div>
          <p className='text-fuschia font-serif text-right leading-none'>&lt;/Coursework&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default CourseworkShowcase;

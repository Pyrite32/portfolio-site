import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const Test1 = () => {
  const [val, set] = useState(0);

  // activates only once, ever.
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center">
      <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center">
        <animated.div
          onClick={() => set((old) => old + 1)}
          style={props}
          className="bg-teal w-1/2 h-1/6 flex items-center justify-center"
        >
          <animated.p className="text-black text-lg text-center pointer-events-none">
            {val}
          </animated.p>
        </animated.div>
        <div>
            useSpring w/o api. simple from and to. passed via props
        </div>
      </div>
    </div>
  );
};

const Test2 = () => {
    const [val, set] = useState(0);
  
    // activates only once, ever.
    const props = useSpring({
      opacity: 0.2,
    });
  
    return (
      <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center">
        <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center">
          <animated.div
            onClick={() => set((old) => old + 1)}
            style={props}
            className="bg-yellow w-1/2 h-1/6 flex items-center justify-center"
          >
            <animated.p className="text-black text-lg text-center pointer-events-none">
              {val}
            </animated.p>
          </animated.div>
          <div>
            useSpring w/o api. no from and to. passed via props, but values are static.
          </div>
        </div>
      </div>
    );
  };

  const Test3 = () => {
    const [val, set] = useState(0);
  
    // activates only once, ever.
    const props = useSpring({
      opacity: 0.2,
    });
  
    return (
      <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center">
        <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center">
          <animated.div
            onClick={() => set((old) => old + 1)}
            style={props}
            className="bg-purple w-1/2 h-1/6 flex items-center justify-center"
          >
            <animated.p className="text-white text-lg text-center pointer-events-none">
              {val}
            </animated.p>
          </animated.div>
          <div>
            useSpring w/o api. no from and to. passed via props, but values are static.
          </div>
        </div>
      </div>
    );
  };

const tests = [Test1, Test2, Test3];

const TestController = () => {
    const [index, setIndex] = useState(0);

    const currentTest = (index: number) => {
        console.log(index);
        const TestComponent = tests[index];
        return (
            <TestComponent />
        );
    }

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-3">
      {currentTest(index)}
      <div className="bg-white w-1/3 py-4 text-center mx-auto flex flex-row justify-between px-8">
        <button onClick={() => setIndex(old => (Math.max(old - 1, 0)))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m18.707 4.707-1.414-1.414L8.586 12l8.707 8.707 1.414-1.414L11.414 12l7.293-7.293zM5 3h2v18H5z"/></svg>
        </button>
        <p className="font-pixel text-xl text-teal">Test Controller</p>
        <button onClick={() => setIndex(old => (Math.min(old + 1, tests.length-1)))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M17 3h2v18h-2zM5.293 4.707 12.586 12l-7.293 7.293 1.414 1.414L15.414 12 6.707 3.293 5.293 4.707z"/></svg>
        </button>
      </div>
    </section>
  );
};

export default TestController;

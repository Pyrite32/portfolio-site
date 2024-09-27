import { useSpring, animated, config, useSpringRef, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

const Test1 = () => {
  const [val, set] = useState(0);

  // activates only once, ever.
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center cursor-pointer">
      <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center">
        <animated.div
          onClick={() => set((old) => old + 1)}
          style={props}
          className="bg-teal w-1/2 h-1/6 flex items-center justify-center"
        >
          <animated.p className="text-black text-lg text-center select-none">
            {val}
          </animated.p>
        </animated.div>
        <div>useSpring w/o api. simple from and to. passed via props</div>
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
    <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center cursor-pointer">
      <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center">
        <animated.div
          onClick={() => set((old) => old + 1)}
          style={props}
          className="bg-yellow w-1/2 h-1/6 flex items-center justify-center"
        >
          <animated.p className="text-black text-lg text-center select-none">
            {val}
          </animated.p>
        </animated.div>
        <div>
          useSpring w/o api. no from and to. passed via props, but values are
          static.
        </div>
      </div>
    </div>
  );
};

const Test3 = () => {
  const [val, set] = useState(0);

  // activates only once, ever.
  const props = useSpring({
    opacity: Math.max(0.1, (val % 5) / 4),
  });

  return (
    <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center cursor-pointer">
      <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center">
        <animated.div
          onClick={() => set((old) => old + 1)}
          style={props}
          className="bg-purple w-1/2 h-1/6 flex items-center justify-center"
        >
          <animated.p className="text-white text-lg text-center pointer-events-none select-none">
            {val}
          </animated.p>
        </animated.div>
        <div className="w-2/3">
          useSpring w/o api. no from and to. however, since opacity is dependent
          on the number, the spring updates when the number does.
        </div>
      </div>
    </div>
  );
};

const Test4 = () => {
  const [val, set] = useState(0);

  // activates only once, ever.
  const [{backgroundColor}] = useSpring(() => ({
    from: {backgroundColor: "yellow"},
    to: [
        {backgroundColor: "green"},
        {backgroundColor: "blue"},
        {backgroundColor: "purple"},
        {backgroundColor: "red"},
        {backgroundColor: "orange"},
        {backgroundColor: "yellow"},
    ],
    loop: {
      reverse: true,
    },
  }), []
);

const [{color}] = useSpring(() => ({
    from: {color: "yellow"},
    to: [
        {color: "green"},
        {color: "blue"},
        {color: "purple"},
        {color: "red"},
        {color: "orange"},
        {color: "yellow"},
    ],
    loop: {
      reverse: true,
    },
  }), [val]
);

const opacityStyle = useSpring({
    from: { opacity: 0},
    to: { opacity: 1} 
});

  return (
    <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center cursor-pointer">
      <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center">
        <animated.div
          onClick={() => set((old) => old + 1)}
          style={{backgroundColor}}
          className="bg-black w-1/2 h-1/6 flex items-center justify-center"
        >
          <animated.p className="text-white text-lg text-center pointer-events-none select-none">
            {val}
          </animated.p>
        </animated.div>
        <animated.div
          className="bg-black w-1/2 h-1/6 flex items-center justify-center"
        >
          <animated.p style={{color}} className="text-lg text-center pointer-events-none select-none">
            hello
          </animated.p>
        </animated.div>
        <animated.div style={opacityStyle} className="w-2/3">
          useSpring w/o api. to is an array of styles. from is required for typescript. styles must be applied right on top.
          Deps array causes animation to reset each time the deps array updates.
        </animated.div>
      </div>
    </div>
  );
};

const data = ['The Queen of Hatred', 'The King of Greed', 'Nothing There', 'The Knight of Despair']

const Test5 = () => {
    const [val, set] = useState(0);
  
    // activates only once, ever.
    const tr = useSpringRef();
    const transitions = useTransition(val, {
        ref: tr,
        from: {opacity: 0.8, backgroundColor: "black", transform: "scaleY(0.1)", transformOrigin:"bottom center"},
        enter: {opacity: 1.0, backgroundColor: "#18939B", top: "0%", transform: "scaleY(1.0)"},
        leave: {position: "absolute", top: "-70%", opacity: 0.0, backgroundColor: "gray"},
        config: config.stiff,
    });

    useEffect(() => {
        tr.start()
      }, [val])

    return (
      <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center cursor-pointer">
        <div className="w-full h-full mx-auto text-center flex flex-col gap-10 justify-center items-center relative">
          {transitions((style, i) => {
                return <animated.div
                onClick={() => set((old) => old + 1)}
                style={style}
                className="bg-purple w-1/2 h-1/6 flex items-center justify-center"
                >
                    <animated.p className="text-white text-lg text-center pointer-events-none select-none">
                        {data[i % data.length]}
                    </animated.p>
                </animated.div>
            }
            )}

          <div className="w-2/3">
            useTransition. Transitions tracks a useState index. when it updates, fade out the current element and fetch a new one.
            The new element it fetches is up to you and depends on index. init with the following:<br/>
            1. from: from nothing style<br/>
            2. enter: stable style<br/>
            3. leave: when getting replaced, go to this style.<br/>
            <em className="bg-yellow">you must use a springRef</em>
          </div>
        </div>
      </div>
    );
  };

  const data6a = [
    {name: 'ZAYIN', color: 'green'},
    {name: 'TETH', color: 'blue'},
    {name: 'HE', color: 'yellow'},
    {name: 'WAW', color: 'purple'},
    {name: 'ALEPH', color: 'red'},
  ]

  const data6b = [
    {name: 'Malkuth', color: 'orange'},
    {name: 'Yesod', color: 'purple'},
    {name: 'Hod', color: 'brown'},
    {name: 'Netzach', color: 'green'},
    {name: 'Tiphereth', color: 'yellow'},
    {name: 'Chesed', color: 'blue'},
    {name: 'Gebura', color: 'red'},
    {name: 'Hokma', color: 'gray'},
    {name: 'Binah', color: 'black'},
  ]


  const Test6 = () => {
    const [val, set] = useState(0);
  
    // activates only once, ever.
    const tr = useSpringRef();
    const transitions = useTransition(val % 2 === 1 ? data6b : data6a, {
        ref: tr,
        from: {opacity: 0.8, transform: "scaleX(0.1)", transformOrigin:"bottom left"},
        enter: {opacity: 1.0, transform: "scaleX(1.0)"},
        leave: {position: "absolute", transform: "scaleX(0.0)", opacity: 0.0, backgroundColor: "gray"},
        config: config.stiff,
    });

    useEffect(() => {
        tr.start()
      }, [val])

    return (
      <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center cursor-pointer">
        <div className="w-full h-full mx-auto text-center flex flex-col justify-center items-center relative">
          <div className="flex flex-row w-full p-10">
          {transitions((style, item) => {
                return <animated.div
                onClick={() => set((old) => old + 1)}
                style={{...style, backgroundColor: item.color}}
                className="flex items-center justify-center gap-2"
                >
                    <animated.p className="text-white text-lg text-center pointer-events-none select-none">
                        {item.name}
                    </animated.p>
                </animated.div>
            }
            )}
          </div>
          <div className="w-2/3">
            also useTransition, but uses arrays instead of indices, and serves the items of the array. the data is served all at once rather than one-by-one.  
            <br/><em className="bg-yellow">you must use a springRef</em>
          </div>
        </div>
      </div>
    );
  };

  const Test7 = () => {
    const [val, set] = useState(0);
  
    // activates only once, ever.
    const tr = useSpringRef();
    const transitions = useTransition(val % 2 === 1 ? data6b : data6a, {
        ref: tr,
        from: {opacity: 0.8, transform: "scaleX(0.1)", transformOrigin:"bottom left"},
        enter: {opacity: 1.0, transform: "scaleX(1.0)"},
        leave: {position: "absolute", transform: "scaleX(0.0)", opacity: 0.0, backgroundColor: "gray"},
        config: config.stiff,
    });

    useEffect(() => {
        tr.start()
      }, [val])

    return (
      <div className="test-1 h-1/2 w-1/3 bg-white mx-auto flex flex-col items-center cursor-pointer">
        <div className="w-full h-full mx-auto text-center flex flex-col justify-center items-center relative">
          <div className="flex flex-row w-full p-10">
          {transitions((style, item) => {
                return <animated.div
                onClick={() => set((old) => old + 1)}
                style={{...style, backgroundColor: item.color}}
                className="flex items-center justify-center gap-2"
                >
                    <animated.p className="text-white text-lg text-center pointer-events-none select-none">
                        {item.name}
                    </animated.p>
                </animated.div>
            }
            )}
          </div>
          <div className="w-2/3">
            also useTransition, but uses arrays instead of indices, and serves the items of the array. the data is served all at once rather than one-by-one.  
            <br/><em className="bg-yellow">you must use a springRef</em>
          </div>
        </div>
      </div>
    );
  };

const tests = [Test1, Test2, Test3, Test4, Test5, Test6, Test7];

const TestController = () => {
  const [index, setIndex] = useState(0);

  const currentTest = (index: number) => {
    console.log(index);
    const TestComponent = tests[index];
    return <TestComponent />;
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-3">
      {currentTest(index)}
      <div className="bg-white w-1/3 py-4 text-center mx-auto flex flex-row justify-between px-8">
        <button onClick={() => setIndex((old) => Math.max(old - 1, 0))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="m18.707 4.707-1.414-1.414L8.586 12l8.707 8.707 1.414-1.414L11.414 12l7.293-7.293zM5 3h2v18H5z" />
          </svg>
        </button>
        <p className="font-pixel text-xl text-teal">Test Controller #{index+1}</p>
        <button
          onClick={() => setIndex((old) => Math.min(old + 1, tests.length - 1))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M17 3h2v18h-2zM5.293 4.707 12.586 12l-7.293 7.293 1.414 1.414L15.414 12 6.707 3.293 5.293 4.707z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestController;

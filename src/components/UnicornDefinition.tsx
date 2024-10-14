import PopIn from "./PopIn";

const UnicornDefinition = (props: {onBackButtonClick: () => void}) => {
    return (
      <div className="absolute h-full w-full text-white">
        <PopIn topOffset={"-3rem"}>
          <div className="flex flex-col justify-center items-center mobile:w-11/12 lg:w-10/12 xl:6/12 mx-auto">
            <div className="text-center w-fit">
              <h1 className="rainbow-glow rainbow-no-border lg:text-9xl sm:text-8xl mobileL:text-7xl mobile:text-6xl font-sans font-black rounded-2xl">u·ni·corn</h1>
              <h2 className="md:text-5xl sm:text-4xl mobile:text-3xl mobile:pb-3">[ˈyo͞onəˌkôrn]</h2>
            </div>
            <div className="md:w-8/12 xl:w-6/12 w-11/12">
              <h2 className="font-nova italic text-5xl lg:mb-0 sm:mb-1 mobile:mb-2 mobile:text-center sm:text-left">Noun</h2>
              <ol className="list-decimal mobile:text-xl sm:text-2xl xl:leading-relaxed lg:leading-snug md:leading-normal font-nova mt-1">
                <li className="lg:my-0 my-2">A <u className="rainbow-glow rainbow-no-border p-0 rounded-2xl">mythical</u> animal typically represented as a horse with a single straight horn <u>projecting </u> from its <u>forehead</u>.</li>
                <li>A <u>multi-disciplinary</u> team member with prowess in interaction design skills, visual design skills, and coding ability.</li>
              </ol>
            </div>
            <button 
            onClick={props.onBackButtonClick}
            className="back-btn text-center mx-auto mobile:mt-8 xl:mt-2 lg:py-0.5 sm:py-1.5 mobile:py-3 lg:px-4 sm:px-8 mobile:px-24 rounded-2xl" >
            <svg fill="#222" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
            </button>
          </div>
        </PopIn>
      </div>
    )
  }

export default UnicornDefinition;
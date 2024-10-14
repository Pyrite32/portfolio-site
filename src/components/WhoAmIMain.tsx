import PopIn from "./PopIn";
import WhoAmITitle from "./WhoAmITitle";

const WhoAmIMain = (props: {onUnicornButtonClick: () => void, shouldPlayAnim:boolean}) => {
    return (
      <div className="absolute">
        <div className="mobile:w-full w-9/12 max-w-summary-inner mx-auto">
        <div className="inline-block mobile:mb-4">
          <h1 className="lg:text-7xl mobile:text-3xl mobileL:text-4xl sm:text-5xl text-white">
            <PopIn finished={!props.shouldPlayAnim} requireVisibility={true}>
                <span className="mobile:ml-4 xl:ml-0">Patrick</span> is... <br className="mobile:inline xl:hidden" /><WhoAmITitle onUnicornButtonClick={props.onUnicornButtonClick} />
            </PopIn>
          </h1>
          </div>
          
          <PopIn finished={!props.shouldPlayAnim} requireVisibility={true} waitForMs={6500} topOffset={"3rem"}>
            <p className="mobile:leading-normal sm:leading-snug mobile:text-xl mobileL:text-2xl lg:text-3xl mobile:mt-8 sm:mt-2 text-off-white">
              As a unicorn, I have passion for building beautiful and functional
              digital experiences. I bridge the gap between aesthetics and
              technology, ensuring every project I am involved in is able to deliver
              in all aspects of user experience.
            </p>
          </PopIn>
        <PopIn finished={!props.shouldPlayAnim} requireVisibility={true} waitForMs={7500}>
          <p className="font-pixel text-2xl mt-8">
            <span className="text-yellow">$</span> list skills
          </p>
        </PopIn>
        </div>
        <div className="w-9/12 ml-auto text-right">
          <PopIn finished={!props.shouldPlayAnim} requireVisibility={true} waitForMs={9000}>
            <ul className="font-pixel text-2xl">
              <li>
                <button
                  className="w-full text-right"
                  onClick={() => window.scrollTo(0, 2350)}
                >
                  <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                    code
                  </p>
                </button>
              </li>
              <li>
                <button 
                className="w-full text-right"
                onClick={() => window.scrollTo(0, 3390)}
                >
                  <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                    art
                  </p>
                </button>
              </li>
              <li>
                <button className="w-full text-right"
                onClick={() => window.scrollTo(0, 3390)}
                >
                  <p className="w-full pulse-glow font-pixel text-2xl my-0.5 px-2">
                    ux
                  </p>
                </button>
              </li>
            </ul>
          </PopIn>
        </div>
      </div>
    );
  };

export default WhoAmIMain;
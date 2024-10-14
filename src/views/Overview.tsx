import "./Overview.css";
import Logo from "../assets/logo.svg";
import TornPaperEdge from "../assets/torn-paper-edge.png";
import Profile from "../assets/profile.png";
import ProfileDrawn from "../assets/profile-drawn.png";
import { PopInText } from "../components/PopInText";
import PopIn from "../components/PopIn";

const Overview = () => {
  return (
    <>
      <section className="overview min-h-max" data-scroll-section>
        <header className="overview-top__bar-wrapper p-2 mx-4 my-4">
          <div className="overview-top__bar w-full flex justify-between align-middle">
            <span className="overview-top__bar-logo pt-2 pointer-events-none">
              <PopIn>
                <img src={Logo} className="pointer-events-none" alt="logo" width="48px" height="48px" data-scroll/>
              </PopIn>
            </span>
            {/* <span className="transition ease-out hover:scale-125 pr-16">
              <Burger />
            </span> */}
          </div>
        </header>
        <div className="overview-remainder relative">
          <span className="clip-paper grid-bg big-clip-paper bg-black absolute hidden mega:block " />
          <span className="clip-paper grid-bg clip-paper-small bg-black absolute hidden sm:block mega:hidden" />
          <div className="absolute mobile:pt-96 mobile:top-16 lg:top-0 lg:pt-0  xl:bottom-16 w-full h-full">
            <div className="relative top-20 z-10 flex items-end w-11/12 mobile:right-5 mobileL:mx-auto mobileL:right-0 pointer-events-none p-10">
              <div className="flex flex-col justify-center pb-16 leading-tight relative bottom-32 mr-auto">
                <h1 className="font-unbounded mobile:text-6xl mobile:text-center lg:text-left lg:text-6xl xl:text-7xl " data-scroll>
                  <PopInText delay={50}>Patrick Keefe</PopInText>
                </h1>
                <p className="text-off-white text-3xl mobile:hidden pt-4 sm:text-center lg:text-left sm:block">
                  <PopInText delay={500}>
                    FRONT-END ENGINEER | GAME DEVELOPER | ARTIST
                  </PopInText>
                </p>

                <p className="text-off-white pt-4 relative text-center sm:hidden">
                  <PopInText delay={500}>
                    FRONT-END ENGINEER GAME DEVELOPER ARTIST
                  </PopInText>
                </p>

              </div>
              <PopIn topOffset={"2rem"}>
                  <img
                    src={Profile}
                    width="860px"
                    height="860px"
                    className="profile-one max-w-min relative xl:mb-0 bottom-20"
                  />
                  <img
                    src={ProfileDrawn}
                    width="860px"
                    height="860px"
                    className="profile-two max-w-min xl:mb-0 relative bottom-20"
                  />
              </PopIn>
            </div>
          </div>
          <img
            src={TornPaperEdge}
            alt="paper-edge"
            className="relative top-36 pointer-events-none min-w-max hidden sm:block mega:hidden"
          />
          <img
            src={TornPaperEdge}
            alt="paper-edge"
            className="relative top-36 pointer-events-none min-w-max scale-x-300 hidden mega:block"
          />
        </div>
      </section>
    </>
  );
};

export default Overview;

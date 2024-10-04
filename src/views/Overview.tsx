import "./Overview.css";
import Logo from "../assets/logo-placeholder.png";
import Burger from "../components/Burger";
import TornPaperEdge from "../assets/torn-paper-edge.png";
import TornPaper from "../assets/torn-paper.png";
import Profile from "../assets/profile-placeholder.png";
import { PopInText } from "../components/PopInText";
import PopIn from "../components/PopIn";

const Overview = () => {
  return (
    <>
      <section className="overview">
        <header className="overview-top__bar-wrapper p-2 mx-4 my-4">
          <div className="overview-top__bar w-full flex justify-between align-middle">
            <span className="overview-top__bar-logo pt-2 pointer-events-none">
              <PopIn>
                <img src={Logo} alt="logo" width="48px" height="48px" />
              </PopIn>
            </span>
            <span className="transition ease-out hover:scale-125 pr-16">
              <Burger />
            </span>
          </div>
        </header>
        <div className="overview-remainder relative">
          <span className="clip-paper grid-bg big-clip-paper bg-black absolute hidden mega:block " />
          <span className="clip-paper grid-bg clip-paper-small bg-black absolute block mega:hidden" />
          <div className="absolute top-72 xl:top-32 w-full h-full">
            <div className="relative z-10 flex items-end w-11/12 mobile:right-5 mobileL:mx-auto mobileL:right-0 pointer-events-none p-10">
              <div className="flex flex-col leading-tight relative bottom-32 mr-auto">
                <h1 className="font-unbounded mobile:text-6xl mobile:text-center md:text-left lg:text-7xl mobile:mt-64 ">
                  <PopInText delay={50}>Patrick Keefe</PopInText>
                </h1>
                <p className="text-off-white pt-8 mobile:hidden sm:block">
                  <PopInText delay={500}>
                    FRONT-END ENGINEER | GAME DEVELOPER | ARTIST
                  </PopInText>
                </p>

                <p className="text-off-white pt-8 text-center sm:hidden">
                  <PopInText delay={500}>
                    FRONT-END ENGINEER GAME DEVELOPER ARTIST
                  </PopInText>
                </p>

              </div>
              <PopIn topOffset={"2rem"}>
                <img
                  src={Profile}
                  className="lg:block xl:static xl:mb-0 relative bottom-20 mobile:hidden"
                />
              </PopIn>
            </div>
          </div>
          <img
            src={TornPaperEdge}
            alt="paper-edge"
            className="relative top-36 pointer-events-none min-w-max block mega:hidden"
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

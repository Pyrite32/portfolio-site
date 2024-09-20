import "./Overview.css";
import Logo from "../assets/logo-placeholder.png";
import Burger from "../components/Burger";
import TornPaperEdge from "../assets/torn-paper-edge.png";
import TornPaper from "../assets/torn-paper.png";
import Profile from "../assets/profile-placeholder.png";

const Overview = () => {
  return (
    <>
      <section className="overview">
        <nav className="overview-top__bar-wrapper p-2 mx-4 my-4">
          <div className="overview-top__bar w-full flex justify-between align-middle">
            <span className="overview-top__bar-logo pt-2 pointer-events-none">
              <img src={Logo} alt="logo" width="48px" height="48px" />
            </span>
            <span className="transition ease-out hover:scale-125 pr-16">
              <Burger />
            </span>
          </div>
        </nav>
        <div className="__SPACER__ my-3">&nbsp;</div>
        <div className="overview-remainder">
          <span className="clip-paper grid-bg big-clip-paper bg-black absolute hidden mega:block " />
          <span className="clip-paper grid-bg clip-paper-small bg-black absolute block mega:hidden" />
          <div className="__MOVE_DOWN__ absolute top-32 w-full">
            <div className="relative flex items-end justify-between mx-auto top-32 pointer-events-none w-11/12 z-10 p-10">
                <div className="flex flex-col leading-tight text-white max-h-max mt-64 lg:mt-0 ">
                    <h1 className="font-unbounded overviewTextBp:text-8xl text-7xl ">
                        Patrick Keefe
                    </h1>
                    <p className="text-off-white">
                        FRONT-END ENGINEER - GAME DEVELOPER - ARTIST
                    </p>
                </div>
                <img
                src={Profile}
                className="box-border relative hidden lg:block origin-bottom scale-125"
                />
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

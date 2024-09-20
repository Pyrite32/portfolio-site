import "./Overview.css";
import Logo from "../assets/logo-placeholder.png";
import Burger from "../components/Burger";
import TornPaperEdge from "../assets/torn-paper-edge.png";
import TornPaper from "../assets/torn-paper.png";
import Profile from "../assets/profile-placeholder.png";

const Overview = () => {
  return (
    <>
      <header className="overview">
        <nav className="overview-top__bar-wrapper p-2 mx-4 my-4">
          <div className="overview-top__bar w-full flex justify-between align-middle">
            <span className="overview-top__bar-logo pt-2 pointer-events-none">
              <img src={Logo} alt="logo" width="48px" height="48px" />
            </span>
            <span className="transition ease-out hover:scale-125">
              <Burger />
            </span>
          </div>
        </nav>
        <div className="__SPACER__ my-3">&nbsp;</div>
        <div className="overview-image-container">
            <div className="clip-paper grid-bg clip-paper-small bg-black absolute block mega:hidden" />
            <div className="clip-paper grid-bg big-clip-paper bg-black absolute hidden mega:block" />
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
        <div className="relative flex justify-between pointer-events-none bottom-96 w-11/12 mx-auto">
          <div className="flex flex-col leading-tight text-white my-20">
            <h1 className="font-unbounded overviewTextBp:text-8xl text-7xl ">
              Patrick Keefe
            </h1>
            <p className="text-off-white">
              FRONT-END ENGINEER - GAME DEVELOPER - ARTIST
            </p>
          </div>
          <img
            src={Profile}
            className="box-border relative hidden lg:block origin-bottom scale-150 pb-60"
          />
        </div>
      </header>
    </>
  );
};

export default Overview;

import "./Overview.css";
import Logo from "../assets/logo-placeholder.png";
import Burger from "../components/Burger";
import TornPaperEdge from "../assets/torn-paper-edge.png";
import TornPaper from "../assets/torn-paper.png";
import Profile from "../assets/profile-placeholder.png";
import GridBG from "../assets/grid-bg.png";

const Overview = () => {
  return (
    <>
      <header className="overview">
        <div className="overview-top__bar-wrapper p-2 my-4 mx-auto">
          <div className="overview-top__bar w-full flex justify-between align-middle">
            <span className="overview-top__bar-logo pt-2 pointer-events-none">
              <img src={Logo} alt="logo" width="48px" height="48px" />
            </span>
            <span className="transition ease-out hover:scale-125">
              <Burger />
            </span>
          </div>
        </div>
        <div className="overview-middle__backdrop-img min-w-max relative top-32">
          <div className="torn-paper-bounds clip-paper bg-fuschia absolute">

          </div>
          {/* <img
            src={TornPaper}
            alt=""
            className="absolute top-36 pointer-events-none"
          /> */}
          <img
            src={TornPaperEdge}
            alt="paper-edge"
            className="relative top-36 pointer-events-none"
          />
        </div>
        <div className="overview-middle__backdrop-content absolute top-3/5 flex justify-between w-full pointer-events-none">
          <div className="mx-32 my-20 flex flex-col leading-tight text-white">
            <h1 className="font-unbounded overviewTextBp:text-8xl text-7xl ">
              Patrick Keefe
            </h1>
            <p className="text-off-white">
              FRONT-END ENGINEER - GAME DEVELOPER - ARTIST
            </p>
          </div>
          <img
            src={Profile}
            className="relative bottom-56 scale-150 hidden lg:block "
          />
        </div>
      </header>

    </>
  );
};

export default Overview;

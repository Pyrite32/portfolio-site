import './Overview.css';
import Logo  from '../assets/logo-placeholder.png';
import Burger from "../components/Burger";
import TornPaper from "../assets/torn-paper-combined.png";
const Overview = () => {
    return (
        <>
            <div className="overview-top__bar-wrapper p-2 my-4 mx-auto">
                <div className="overview-top__bar w-full flex justify-between align-middle">
                    <span className="overview-top__bar-logo pt-2 pointer-events-none">
                        <img src={Logo} alt="logo" width="48px" height="48px" />
                    </span>
                    <span className='transition ease-out hover:scale-125'>
                        <Burger />
                    </span>
                </div>
            </div>
            <div className='overview-middle h-full'>
                <div className='overview-middle__backdrop bg-contain'>
                    <img src={TornPaper} alt="paper-edge" className='' />
                </div>
            </div>
        </>
    );
}

export default Overview;
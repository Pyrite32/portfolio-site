import BurgerIcon from "../assets/hamburger-menu.svg"

const Burger = () => {
    return (
        <div className="sticky z-40">
            <a href="/test">
                <img src={BurgerIcon} alt="" width="48px" height="48px"/>
            </a>
        </div>
    );
}

export default Burger;
import logo from "../assets/logo.png";

const Navbar = () =>{
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="logo of institute" />
            <nav className="header__navlinks">
                <ul className="header__navlinks__links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
import logo from "../assets/main-logo.png";
import "./components.css";

const Navbar = () =>{
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="company logo"/>
            <div className="header__barmenu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="header__links-wrapper">
                <ul className="link">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Abroad Study</a></li>
                    <li><a>Services</a></li>
                </ul>
                <a className="contact-link">Contact Us</a>
            </div>
        </header>
    );
}

export default Navbar;
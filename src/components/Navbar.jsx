import logo from "../assets/logo.png";
import "./navbar.css";

const Navbar = ()=>{
    return(
       <header className="header">
        <img className="header__logo" src={logo} alt="company logo" />
        <nav className="header__navigation">
            <div className="navigation__barmenu">
                <dvi className="bar"></dvi>
                <dvi className="bar"></dvi>
                <dvi className="bar"></dvi>
            </div>
             <ul className="navigation__links">
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Services</a></li>
                    <li><a>Events</a></li>
            </ul>
            <button className="navigation__btn"> contact us</button>

        </nav>
       </header>
    );

}

export default Navbar;

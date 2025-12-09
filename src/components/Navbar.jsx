import { Link } from "react-router-dom";
import "./components.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(prev => !prev);
  }

  return (
    <header className="header">
      <img className="header__logo" src="images/logo.jpg" alt="company logo" />

      <div className="header__barmenu" onClick={openMenu}>
        <div className="bar one"></div>
        <div className="bar two"></div>
        <div className="bar three"></div>
      </div>

      <div className={`header__navigation ${isOpen ? "open" : ""}`}>
        <ul className="navigation__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>

        <Link className="navigation__anchor" to="/contact">
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

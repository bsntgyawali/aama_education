import logo from "../assets/main-logo.png";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import tiktok from "../assets/tiktok.svg";
import "./components.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [submenuVisible, setIsSubmenuVisible] = useState(false);


    function toggleMenu(){
        setIsOpen(prev=>!prev);
    }

    function closeMenu(){
        setIsOpen(false);
        setIsSubmenuVisible(false);
    }

    function toggleSubmenu(){
       setIsSubmenuVisible((prev) =>!prev);
    }

    function closeSubmenu(){
        setIsOpen(false);
        setIsSubmenuVisible(false);
    }
    return(
      <header className="header">
        <div className="header__media-wrapper">
            <ul>
                <li><img src={fb} alt="fb icon" /></li>
                <li><img src={insta} alt="insta icon" /></li>
                <li><img src={tiktok} alt="tiktok" /></li>
            </ul>
        </div>
        <div className="navbar">
            <img className="navbar__logo" src={logo} alt="company logo" />
            <div className="navbar__barmenu" onClick={()=>{toggleMenu()}}>
                <div className={`bar ${isOpen ? "one" : ""}`}></div>
                <div className={`bar ${isOpen ? "two" : ""}`}></div>
                <div className={`bar ${isOpen ? "three" : ""}`}></div>
            </div>
           <div className={`navbar__links-wrapper ${isOpen ? "open" : ""}`}>
                <ul className="navbar__links">
                    <li><Link to="/" onClick={()=>{closeMenu()}}>Home </Link></li>
                    <li><Link to="/about" onClick={()=>{closeMenu()}}>About</Link></li>
                    <li><a className="country-list" onClick={()=>{toggleSubmenu()}}>Study Abroad</a>
                    <ul className={` submenu ${submenuVisible ? "submenu-open": "" }`}>
                        <li><Link onClick={()=>{closeSubmenu()}} to="/abroadstudy/australia">Australia</Link></li>
                        <li><Link onClick={()=>{closeSubmenu()}} to="/abroadstudy/canada">Canada</Link></li>
                        <li><Link onClick={()=>{closeSubmenu()}} to="/abroadstudy/japan">Japan</Link></li>
                        <li><Link onClick={()=>{closeSubmenu()}} to="/abroadstudy/uk">UK</Link></li>
                        <li><Link onClick={()=>{closeSubmenu()}} to="/abroadstudy/usa">USA</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/services" onClick={()=>{closeMenu()}}>Services</Link></li>
                </ul>
                <Link to="/contact" className="contact-link" onClick={()=>{closeMenu()}}>Contact Us</Link>
            </div>
        </div>
      </header>
    );
}

export default Navbar;
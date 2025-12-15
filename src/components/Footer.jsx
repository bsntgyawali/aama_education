import logo from "../assets/main-logo.png";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import tiktok from "../assets/tiktok.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <footer className="footer">
         <div className="footer__content-wrapper">
            <div className="content__section-one">
                <img src={logo} alt="company logo" />
                <p>"Helping Students Shape Their Future"</p>
                <ul>
                    <li><a href="https://www.facebook.com/share/1ZQPbyJ57x/" target="_blank"><img src={fb} alt="facebook icon" /></a></li>
                    <li><a href="https://www.instagram.com/aamaeducational" target="_blank" ><img src={insta} alt="insta icon" /></a></li>
                    <li><a href="https://www.tiktok.com/@aama.educational1" target="_blank"><img src={tiktok} alt="insta icon" /></a></li>
                </ul>
            </div>
            <div className="content__section-two">
                <h4>Contact</h4>
                <ul>
                <li><img src={location} alt="pin icon"/>Butwal -8, Milanchowk</li>
                <li><img src={phone} alt="phone icon" />9860559643/9762899976</li>
                <li><img src={mail} alt="mail icon"/>info@aamaeducation.edu.np</li>
                </ul>
            </div>
            <div className="content__section-three">
                <h4>Quick Links</h4>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/abroadstudy/australia">Study Abroad</Link></li>
                <li><Link>Services</Link></li>
                </ul>
            </div>
            <div className="content__section-four">
              <h4>Resources</h4>
              <ul>
                <li>Universities</li>
                <li>Syllabus</li>
                <li>News & Updates</li>
              </ul>
            </div>
         </div>
         <hr />
         <div className="footer__policies">
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
                <li>Cookie Policy</li>
            </ul>
            <p>&copy; 2025 AES. All rights reserved</p>
         </div>
        </footer>
    );
}

export default Footer;

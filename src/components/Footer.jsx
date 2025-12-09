import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedIn from "../assets/linkedIn.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import "./components.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="subscribe-section">
                    <h3>Subscribe</h3>
                      <p>Join our community to receive updates</p>
                    <form className="subscribe-form">
                        <input type="text" />
                        <input type="submit" />
                    </form>
                     <p>By subscribing, you agree to our Privacy Policy.</p>
                </div>
                <div className="contact-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><img className="contact-icon" src={location} alt="pin-icon" />Butwal-8, Milanchowk</li>
                        <li><img className="contact-icon" src={phone} alt="phone icon" /> 9860559643, 9762899976</li>
                        <li><img className="contact-icon" src={mail} alt="mail icon"/>info@aamaeducation.edu.np</li>
                    </ul>
                </div>
                <div className="navigate-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div className="media-section">
                    <img className="footer__logo" src="/images/logo.jpg" alt="company's logo" />
                    <p>
                        The institution that has been working rigourously
                        to help students achieve thier international dreaam.
                    </p>
                    <ul>
                        <li><a><img className="media-icon" src={facebook} alt="facebook icon" /></a></li>
                        <li><a><img className="media-icon" src={instagram} alt="instagram icon"/></a></li>
                        <li><a><img className="media-icon" src={linkedIn} alt="linkedIn icon" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__policies">
                <ul>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Terms of Service</a></li>
                    <li><a>Cookie Policy</a></li>
                </ul>
                <span>
                    &copy; 2025 AES. All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;
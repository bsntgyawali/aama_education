import logo from "../assets/logo.jpg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import linkedIn from "../assets/linkedIn.svg";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div>
                    <h4>Subscribe</h4>
                    <p>Join our community to receive updates</p>
                    <form className="subscribe__form">
                        <input type="email" placeholder="Enter your email..." />
                        <button> Subscribe</button>
                    </form>
                    <p>By subscribing, you agree to our Privacy Policy.</p>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <ul>
                        <li><img className="contact-icon" src={location} alt="pin icon" />Butwal-8, Milanchowk</li>
                        <li><img className="contact-icon" src={phone} alt="phone icon" />9860559643</li>
                        <li><img className="contact-icon" src={mail} alt="mail icon" />info@aamaeducation.edu.np</li>
                    </ul>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Services</a></li>
                        <li><a>Events</a></li>
                    </ul>
                </div>
                <div>
                    <img className="footer__logo" src={logo} alt="company logo" />
                    <p>
                        The institution that has been working rigourously<br/>
                        to help students achieve thier international dreaam.
                    </p>
                    <ul>
                        <li><a><img className="media-icon" src={facebook} alt="facebook logo" /></a></li>
                        <li><a><img className="media-icon" src={insta} alt="insta logo" /></a></li>
                        <li><a><img className="media-icon" src={linkedIn} alt="linkedIn logo" /></a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer__policies">
                <ul>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Terms of Service</a></li>
                    <li><a>Cookie Policy</a></li>
                </ul>
                <p> &copy; 2025 AES. All rights reserved</p>
            </div>
        </footer >
    );
}

export default Footer;

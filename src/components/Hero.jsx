import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content-wrapper">
                <h1>Your Trusted Partner for Abroad Studies & Test Preparation</h1>
                <p> We guide you for IELTS/PTE, Documentation & admission — with 100% transparent counselling.</p>
                <div className="hero__links-wrapper">
                    <Link to="/counselling" className="primary-link">Book Free Counselling</Link>
                    <a className="secondary-link" href="#abroadStudy">Apply for Abroad Study</a>
                </div>
            </div>
            <div className="hero__image-wrapper">
                <img src={hero} alt="students" />
            </div>
        </div>
    );
}

export default Hero;
const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__navlinks">
                <div className="section__location">
                    <h3>Location</h3>
                    <ul>
                        <li>Butwal-8, Milanchowk</li>
                        <li>9860559643, 9762899976</li>
                        <li>info@aamaeducation.edu.np</li>
                    </ul>
                </div>
                <div className="section__quick-links">
                    <h3>Navigate</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="section__social-media">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div>
                <p>Copyright &copy; 2025 Aama Education Services</p>
                <div>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
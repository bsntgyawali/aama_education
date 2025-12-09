import "./pages.css";
import Form from "../components/Form";
const Contact = () => {
    return (
        <div className="contact">
           <Form />
            <div className="map-wrapper">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.914202580283!2d83.46713587370759!3d27.689046526301592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968686007adf7b%3A0x9fbfbdf688b29d42!2sButwal%20Sub-Metro%20Ward%20No.%208%20Office!5e0!3m2!1sen!2snp!4v1765202956072!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Contact;
import Form from "../components/Form";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__form-wrapper">
               < div className="contact__image-wrapper">
               <img src="/images/contact-us.jpg" alt="contact medium" />
               </div> 
               <Form title="Get In Toutch with Us" action="Submit"/>
            </div>
            <div className="contact__map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8818206563756!2d83.46587221142065!3d27.69004725811615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399686886cd94753%3A0xb7bf4f7562bf754d!2sMFQ8%2BW9C%2C%20Mahendra%20Hwy%2C%20Butwal%2032907!5e0!3m2!1sen!2snp!4v1765542242191!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    );
}

export default Contact;
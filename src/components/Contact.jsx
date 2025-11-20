import Form from "./Form";
import from from "../assets/form.png"

const Contact = () =>{
    return(
        <div className="contact">
            <img className="section__image" src={from} alt="description"/>
        <div className="form__container">
            <h2>Get Connected With Us</h2>
            <Form />
        </div>
        </div>
    );
}

export default Contact;
import { useState } from "react";

const Form = ({title, action}) =>{
    return(
        <form className="contact-form">
             <h2>{title}</h2>
            <div className="form__section">
                <label>Name*</label>
                <input type="text" placeholder="Enter your name..." />
                <p className="warning">Your cannot leave required field empty</p>
            </div>
             <div className="form__section">
                <label>Phone*</label>
                <input type="text" placeholder="98XXXXXXXX" />
                <p className="warning">Your cannot leave required field empty</p>
            </div>
             <div className="form__section">
                <label>Email*</label>
                <input type="text" placeholder="example@text.com" />
                <p className="warning">Your cannot leave required field empty</p>
            </div>
             <div className="form__section">
                <label>Message</label>
                <textarea placeholder="Write your message..."/>
            </div>
            <input type="submit" value={action}/>
        </form>
    );
}

export default Form;
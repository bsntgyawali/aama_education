const Form = ()=>{
    return(
         <form className="contact-form">
                <h2>Get In Touch With Us</h2>
                <div className="form-section">
                    <label for="name">Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                </div>
                <div className="form-section">
                    <label for="address">Address</label>
                    <input type="text" placeholder="Enter your address" name="address" />
                </div>
                <div className="form-section">
                    <label for="phone">Phone</label>
                    <input type="text" placeholder="98XXXXXXXX" name="phone" />
                </div>
                <div className="form-section">
                    <label for="email">Email</label>
                    <input type="text" placeholder="example@testmail.com" name="email" />
                </div>
                <div className="form-section">
                    <label for="name">Message</label>
                    <textarea placeholder="Write your message..." />
                </div>
                <input type="submit" value="Submit" />
            </form>
    );
}

export default Form;
const Form = () => {
    return (
        <>
            <div className="contact-form-container">
                <form >
                    <div className="form-group1">
                        <input type="text" id="product" name="product" required placeholder="Enter Product Name" />
                        <input type="text" id="yourName" name="yourName" required placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group2">
                        <input type="email" id="email" name="email" required placeholder="Enter Your Email" />
                        <input type="text" id="country" name="country" readOnly placeholder="Your Country" />
                    </div>
                    <div className="form-group3">
                        <input type="tel" id="mobileNumber" name="mobileNumber" required placeholder="Enter Your Mobile Number" />
                    </div>
                    <div className="form-group4">
                        <textarea id="message" name="message" required placeholder="Type Your Message Here"></textarea>
                    </div>
                    <button className="button" type="submit">Send Message</button>
                </form>
            </div>


        </>
    )
}
export default Form;

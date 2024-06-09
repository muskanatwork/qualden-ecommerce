const ContactUsForm = () => {
    return (
        <>
            <form className="form">
                <div className="form-group">
                    <label>Product:</label>
                    <input type="text" name="product" placeholder="Enter product name" />
                </div>
                <div className="form-group">
                    <label>Your Name:</label>
                    <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                    <label>Select Country:</label>
                    <select name="country">
                        <option value="">Select</option>
                        {/* Add options for countries */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Select State:</label>
                    <select name="state">
                        <option value="">Select</option>
                        {/* Add options for states based on selected country */}
                    </select>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" name="city" placeholder="Enter your city" />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label>Your Requirement:</label>
                    <textarea name="requirement" placeholder="Enter your requirements"></textarea>
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                    <button type="submit">Cancel</button>
                </div>
            </form>

        </>
    )
}

export default ContactUsForm
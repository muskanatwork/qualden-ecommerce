import PhoneInput from 'react-phone-input-2';


const ProductForm = () => {
    return (
        <>
            <div className='detailFormContainer'>
                <h1>Looking for "PT100 Industrial Temperature Sensor" ?
                </h1>
                <form>
                    <div className='deatilForm'>
                        <label>Name:</label>
                        <input type="text" name="name" />
                        <label>Email:</label>
                        <input type="email" name="email" />

                    </div>
                    <div className='deatilForm'>
                        <label>Phone Number:</label>
                        <PhoneInput
                            country={'in'}
                            placeholder="Mobile No."
                            inputClass="input-field"
                            buttonClass="phone-select-button">
                        </PhoneInput>
                        <label>Quantity:</label>
                        <input type="number" name="quantity" />
                        <input
                            type="number"
                            placeholder="Piece(s)"
                            className="input-field"
                        />
                    </div>
                    <div className='deatilForm'>

                        <label for="purpose">Purpose of Requirement:</label>
                        <input type="radio" id="purpose1" name="purpose" value="option1" />
                        <label for="purpose1">Reselling</label>
                        <input type="radio" id="purpose2" name="purpose" value="option2" />
                        <label for="purpose2">End Use</label>
                    </div>
                    <div className='deatilForm'>
                        <label>Requirement Details:</label>
                        <textarea name="details" />
                    </div>
                    <div className='detailbutton'>
                        <button type="submit">Send Enquiry</button>
                    </div>
                </form>
            </div>

        </>
    )

}

export default ProductForm;

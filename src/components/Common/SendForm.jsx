import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
const SendForm = ({ isOpen, onCloseForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={onCloseForm}>
                            <CloseIcon />
                        </span>
                        <h2>Send Email</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="product" placeholder="Product" required />

                            <textarea  name="description" placeholder="Description" required  />

                            <input type="text" name="name" placeholder="Name" required />

                            <input type="email" name="email" placeholder="Email" required />

                            <input type="tel" name="mobile" placeholder="Mobile Number" required />

                            <button type="submit">Send Now</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default SendForm;

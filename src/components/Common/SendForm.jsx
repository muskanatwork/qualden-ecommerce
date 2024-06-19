import React, { useState } from 'react';

const SendForm = ({ isOpen, onCloseForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={onCloseForm}>&times;</span>
                        <h2>Product Form</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Product:</label>
                            <input type="text" name="product" required />

                            <label>Quantity:</label>
                            <input type="number" name="quantity" required />

                            <label>Piece:</label>
                            <input type="text" name="piece" required />

                            <label>Description:</label>
                            <textarea name="description" required />

                            <label>Name:</label>
                            <input type="text" name="name" required />

                            <label>Email:</label>
                            <input type="email" name="email" required />

                            <label>Mobile Number:</label>
                            <input type="tel" name="mobile" required />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default SendForm;

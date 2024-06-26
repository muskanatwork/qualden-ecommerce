import React from 'react';
import { Dialog, DialogContent, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const EnquiryFormDialog = ({ open, onClose }) => {
    return (
        <>
            {open && (
                <div className="enquryForm">
                    <div className="enqurycontent">
                        <span className="closeEnquiryIcon" onClick={onClose}>
                            <CloseIcon />
                        </span>
                        <div className='dialog-content'>
                            <div className='quoteImgDiv'>
                                <img className='quote-image' src="https://2.wlimg.com/product_images/bc-full/2020/2/4222645/wind-speed-sensor-1582793200-5316541.jpeg" alt="" />
                                <p>MOQ : 1 Piece(s)</p>
                                <p>Preferred Buyer From</p>
                                <p>Location : Anywhere in India</p>
                                <p>Get a Quick Quote</p>
                            </div>

                            <form className='quickQuoteForm'>
                                <div className='quickQuoteTextDiv'>
                                <h3>Get a Quick Quote</h3>
                                </div>
                                    <div className="number-input">
                                        <input
                                            type="number"
                                            placeholder="Quantity"
                                            className="input-field"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Piece(s)"
                                            className="input-field"
                                        />
                                    </div>
                                    <PhoneInput
                                        country={'in'}
                                        placeholder="Mobile No."
                                        inputClass="input-field"
                                        buttonClass="phone-select-button"
                                    />
                                    <button
                                        onClick={onClose}
                                        className="send-enquiry-button">Send Enquiry </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default EnquiryFormDialog;

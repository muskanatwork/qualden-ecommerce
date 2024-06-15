import React from 'react';
import { Dialog, DialogContent, Button, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const EnquiryFormDialog = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <IconButton
                aria-label="close"
                onClick={onClose}
                className="close-button"
            >
                <CloseIcon />
            </IconButton>
            <DialogContent className="dialog-content">
                <div>
                    <Box
                        component="img"
                        src="https://2.wlimg.com/product_images/bc-full/2020/3/4222645/pt100-industrial-temperature-sensor-1583473665-5327671.jpeg"
                        alt="Get a Quick Quote"
                        className="quote-image"
                    />
                    <p>MOQ : 1 Piece(s)</p>
                    <p>Preferred Buyer From</p>
                    <p>Location : Anywhere in India</p>
                    <p>Get a Quick Quote</p>
                </div>
                <div>
                    <h3>Get a Quick Quote</h3>
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
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EnquiryFormDialog;

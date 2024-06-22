import { FaEnvelope } from 'react-icons/fa';
import CallIcon from '@mui/icons-material/Call';
import EnquiryFormDialog from './EnquiryFormDialog'; // Ensure the import path is correct
import React, { useState } from 'react';

const ProductDescription = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };
    return (

        
        <>
            <div>
                <h2>PT100 Industrial Temperature Sensor</h2>
                <h3>1 Piece(s) (MOQ)</h3>
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
                    <button onClick={handleDialogOpen}>Get Best Price</button>
                </div>
                <div className="detailContant">
                    <div className="detailRow">
                        <p>Business Type</p>
                        <h4>Manufacturer, Supplier, Trader</h4>
                    </div>
                    <div className="detailRow">
                        <p>Temperature Range (°C)</p>
                        <h4>-200 to 420</h4>
                    </div>
                    <div className="detailRow">
                        <p>Probe Material</p>
                        <h4>Stainless Steel</h4>
                    </div>
                    <div className="detailRow">
                        <p>Probe Diameter (mm)</p>
                        <h4>4</h4>
                    </div>
                </div>

                <p>Click to view more</p>

                <h3>Preferred Buyer From</h3>
                <div className="preferredBuyerFrom">
                    <p>Location</p>
                    <h4>Anywhere in India</h4>
                </div>
                <div className='detail-button'>
                    <button className='detail-button1' onClick={handleDialogOpen}> <CallIcon /> Request to call</button>
                    <button className='detail-button2' onClick={handleDialogOpen}> <FaEnvelope />Send Enquiry</button>
                </div>
            </div>
            <EnquiryFormDialog open={dialogOpen} onClose={handleDialogClose} />


        </>
    )
}

export default ProductDescription;

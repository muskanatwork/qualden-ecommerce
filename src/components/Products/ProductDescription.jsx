import { FaEnvelope } from 'react-icons/fa';
import CallIcon from '@mui/icons-material/Call';
import EnquiryFormDialog from './EnquiryFormDialog'; 
import React, { useState} from 'react';

const ProductDescription = ({product}) => {
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
                <h2>{product.productName}</h2>
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
                        <h4>{product.businessType}</h4>
                    </div>
                    <div className="detailRow">
                        <p>Temperature Range (°C)</p>
                        <h4>{product.temperature}</h4>
                    </div>
                    <div className="detailRow">
                        <p>Probe Material</p>
                        <h4>{product.probeMaterial}</h4>
                    </div>
                    <div className="detailRow">
                        <p>Probe Diameter (mm)</p>
                        <h4>{product.probeDiameter}</h4>
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

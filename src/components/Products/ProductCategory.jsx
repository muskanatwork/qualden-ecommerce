import React, { useState } from 'react';
import EnquiryFormDialog from './EnquiryFormDialog';
import { useNavigate } from 'react-router-dom';

const ProductCategory = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();

    const handleDialogOpen = (event) => {
        event.stopPropagation(); 
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleNavigate = () => {
        navigate('productDetails');
    };

    return (
        <>
            <div className="productItem" onClick={handleNavigate}>
                <div className="productItem-image-container">
                    <img
                        src="https://2.wlimg.com/product_images/bc-full/2020/3/4222645/pt100-industrial-temperature-sensor-1583473665-5327671.jpeg"
                        alt="Wind Speed Sensor"
                        className="productItem-image"
                    />
                </div>
                <h3 className="productItem-title">Wind Speed Sensor</h3>
                <div className="productItem-hover-card">
                    <div>
                        <h5>PT100 Industrial Temperature Sensor</h5>
                        <p>Temperature Range(°C):-200 to 420</p>
                        <p>Probe Material: Stainless Steel</p>
                        <p>Probe Diameter(mm): 4</p>
                        <p>Probe Length(mm): 30</p>
                        <p>Cable Length: 1.05 Meter</p>
                        <button onClick={handleDialogOpen}>Enquiry Now</button>
                        <button onClick={(e) => { e.stopPropagation(); handleNavigate(); }}>View More</button>
                    </div>
                </div>
            </div>
            <EnquiryFormDialog open={isDialogOpen} onClose={handleDialogClose} />
        </>
    );
}

export default ProductCategory;

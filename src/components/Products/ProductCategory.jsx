import React, { useState } from 'react';
import EnquiryFormDialog from './EnquiryFormDialog';
import { useNavigate } from 'react-router-dom';

const ProductCategory = ({ product }) => {
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
        navigate('productDetails', { state: product  });
    };

    return (
        <>
            <div className="productItem" onClick={handleNavigate}>
                <div className="productItem-image-container">
                    <img
                        src={product.productImg}
                        alt={product.productName}
                        className="productItem-image"
                    />
                </div>
                <h3 className="productItem-title">{product.productName}</h3>
                <div className="productItem-hover-card">
                    <div>
                        <h5>{product.productName}</h5>
                        <p>Temperature Range(°C): {product.temperature}</p>
                        <p>Probe Material: {product.probeMaterial}</p>
                        <p>Probe Diameter(mm): {product.probeDiameter}</p>
                        <p>Probe Length(mm): {product.businessType}</p>
                        <p>Cable Length: 1.05 Meter</p>
                        <button onClick={handleDialogOpen}>Enquiry Now</button>
                        <button onClick={(e) => { e.stopPropagation(); handleNavigate(); }}>View More</button>
                    </div>
                </div>
            </div>
            <EnquiryFormDialog open={isDialogOpen} onClose={handleDialogClose} />
        </>
    );
};

export default ProductCategory;

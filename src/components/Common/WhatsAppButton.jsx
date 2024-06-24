import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const WhatsAppButton = ({ phoneNumber, message }) => {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className='whatsApp'>       
             <WhatsAppIcon onClick={handleClick} />
        </div>

    );
};

export default WhatsAppButton;

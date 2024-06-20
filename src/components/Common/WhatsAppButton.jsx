import React from 'react';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = ({ phoneNumber, message }) => {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Button 
            variant="contained" 
            color="success" 
            startIcon={<WhatsAppIcon />} 
            onClick={handleClick}
        >
            Chat on WhatsApp
        </Button>
    );
};

export default WhatsAppButton;

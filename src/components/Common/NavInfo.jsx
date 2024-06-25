import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SendForm from './SendForm'; // Make sure to adjust the import path as needed

const NavInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="Nav-info">
            <div className="info-heading">
                <div className="icon-text">
                    <MailOutlineIcon /><span>qualden@gmail.com</span>
                </div>
                <div className="icon-text">
                    <PhoneIphoneIcon /><span>08069247354</span>
                </div>
                <span>Ext : 036</span>
            </div>
            <div className="info-heading">
                <span>GST No. 05AWBPA1798G1ZS</span>
                <button className="info-button email-button" onClick={handleOpenModal}>
                    <MailOutlineIcon /> Send email
                </button>
                <button className="info-button sms-button" onClick={handleOpenModal}>
                    <PhoneIphoneIcon /> Send SMS
                </button>
            </div>
            <SendForm isOpen={isModalOpen} onCloseForm={handleCloseModal} />
        </div>
    );
}

export default NavInfo;

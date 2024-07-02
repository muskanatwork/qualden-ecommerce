import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const MobileLogoDiv = () => {
    return(
        <div className="logoDiv">
            <div className="logoImage">
                <img src="https://qualden.com/assets/imgs/template/logo.png" alt="Qualden Technologies Logo"/>
            </div>
            <div className="logoText">
                <h2>Qualden Technologies</h2>
                <p><i className="fas fa-map-marker-alt"></i> Dange Chowk Thergaon, Pune,</p>
                <p>Maharashtra 411033</p>
            </div>
        </div>
    )
}

export default MobileLogoDiv;

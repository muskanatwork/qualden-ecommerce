import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = () => {
    return (
        <>
            <div className='footer-nav'>
                <div className='nav-list'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className='horiLine'>
                <div></div>
            </div>
            <div className='footer-content'>
                <h3>All Rights Reserved. Kuchhal Brothers (Terms of Use)</h3>
                <h3>Developed & Managed By Weblink.In Pvt. Ltd.</h3>
            </div>
        </>
    );
}

export default FooterNav;

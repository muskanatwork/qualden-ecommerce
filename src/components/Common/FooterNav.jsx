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
                        <li><Link to="/currentJobs">Current Jobs</Link></li>

                    </ul>
                </div>
            </div>
            <div className='horiLine'>
                <div></div>
            </div>
            <div className='footer-content'>
                <h3>All Rights Reserved. Qualden (Terms of Use)</h3>
                <h3>Developed & Managed By Qualden</h3>
            </div>
        </>
    );
}

export default FooterNav;

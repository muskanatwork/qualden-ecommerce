import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Footer = () => {
    const [generalLinksOpen, setGeneralLinksOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const toggleGeneralLinks = () => {
        setGeneralLinksOpen(!generalLinksOpen);
    };

    const toggleProducts = () => {
        setProductsOpen(!productsOpen);
    };

    return (
        <>
            <footer>
                <div className="footer-section">
                    <h3 onClick={toggleGeneralLinks} className="toggle-heading">
                        General Links
                        <span className="toggle-icon">{generalLinksOpen ? <FaMinus /> : <FaPlus />}</span>
                    </h3>
                    <div className={`footer-box1 ${generalLinksOpen ? 'open' : ''}`}>
                        <div className='section2'>
                            <ul>
                                <li><a href="/" title="Home">Home</a></li>
                                <li><a href="/product" title="Products">Products</a></li>
                                <li><a href="/contact" title="Contact Us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='section1'>
                            <ul>
                                <li><a href="/about" title="About Us">About Us</a></li>
                                <li><a href="/currentJobs" title="Current Jobs">Current Jobs</a></li>
                                <li><a href="#" title="Site Map">Site Map</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 onClick={toggleProducts} className="toggle-heading">
                        Products
                        <span className="toggle-icon">{productsOpen ? <FaMinus /> : <FaPlus />}</span>
                    </h3>
                    <div className={`footer-box1 ${productsOpen ? 'open' : ''}`}>
                        <div className='section1'>
                            <ul>
                                <li><a href="#" title="Electronic Sensor">Electronic Sensor</a></li>
                                <li><a href="#" title="Tipping Bucket Rain Gauge">Tipping Bucket Rain Gauge</a></li>
                                <li><a href="#" title="D116 Ultrasonic Flow Meter">D116 Ultrasonic Flow Meter</a></li>
                                <li><a href="#" title="SMC BRNO-ECO Optical Rain Gauge">SMC BRNO-ECO Optical Rain Gauge</a></li>
                                <li><a href="#" title="SMKB MET ROAD FS1 Weather Station">SMKB MET ROAD FS1 Weather Station</a></li>
                            </ul>
                        </div>
                        <div className='section2'>
                            <ul>
                                <li><a href="#" title="Radar Sensor">Radar Sensor</a></li>
                                <li><a href="#" title="3D Ultrasonic Anemometer">3D Ultrasonic Anemometer</a></li>
                                <li><a href="#" title="GPS Receiver Rs232">GPS Receiver Rs232</a></li>
                                <li><a href="#" title="SMKB MET ROAD FS2 Weather Station">SMKB MET ROAD FS2 Weather Station</a></li>
                                <li><a href="/product" title="View All">View All</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='img-div'>
                    <div className='img-container'>
                        <img src='https://2.wlimg.com/product_images/bc-small/2020/2/4222645/ultrasonic-wind-sensor-1582793304-5316552.jpeg' alt='Ultrasonic Wind Sensor' title="Ultrasonic Wind Sensor"></img>
                        <a href="/product" className="specific-arrow" title="See all Products">See all Products</a>
                    </div>
                    <div className='img-container'>
                        <img src='https://2.wlimg.com/product_images/bc-small/2020/3/4222645/pt100-industrial-temperature-sensor-1583473665-5327671.jpeg' alt='PT100 Industrial Temperature Sensor' title="PT100 Industrial Temperature Sensor"></img>
                    </div>
                </div>
            </footer>
            <div className='buttomFooter'>
                <div className='footerHeading'>
                    <h3>All Rights Reserved. Qualden (Terms of Use)</h3>
                    <h3>Developed & Managed By Qualden</h3>
                </div>
            </div>
        </>
    );
};

export default Footer;

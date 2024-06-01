import React from 'react';

const Footer = () => {
    return (
        <footer>

            <div className="footer-section">
                <h3>General Links</h3>
                <div className='footer-box1'>
                    <div className='section2'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">RSS</a></li>
                        </ul>
                    </div>
                    <div className='section1'>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Current Jobs</a></li>
                            <li><a href="#">Site Map</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="footer-section">
                <h3>Products</h3>
                <div className='footer-box1'>
                    <div className='section1'>
                        <ul>
                            <li><a href="#">Electronic Sensor</a></li>
                            <li><a href="#">Tipping Bucket Rain Gauge</a></li>
                            <li><a href="#">D116 Ultrasonic Flow Meter</a></li>
                            <li><a href="#">SMC BRNO-ECO Optical Rain Gauge</a></li>
                            <li><a href="#">SMKB MET ROAD FS1 Weather Station</a></li>
                        </ul>
                    </div>
                    <div className='section2'>
                        <ul>
                            <li><a href="#">Radar Sensor</a></li>
                            <li><a href="#">3D Ultrasonic Anemometer</a></li>
                            <li><a href="#">GPS Receiver Rs232</a></li>
                            <li><a href="#">SMKB MET ROAD FS2 Weather Station</a></li>
                            <li><a href="#">View All</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='img-div'>
                <div>
                    <img src='https://2.wlimg.com/product_images/bc-small/2020/2/4222645/ultrasonic-wind-sensor-1582793304-5316552.jpeg'></img>
                </div>
                <div>
                    <img src='https://2.wlimg.com/product_images/bc-small/2020/3/4222645/pt100-industrial-temperature-sensor-1583473665-5327671.jpeg'></img>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

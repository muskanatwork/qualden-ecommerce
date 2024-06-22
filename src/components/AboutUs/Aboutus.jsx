import React from 'react';
import Accordion from "./Accordian";
import NavInfo from '../Common/NavInfo';
import Breadcrumbs from '../Common/Breadcrumbs';
import FooterNav from '../Common/FooterNav';
import Nav from '../Home/Nav';
import ScrollToTopButton from '../Common/ScrollToTopButton';
import '../css/AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div className="container">
                <div className="main">
                    <NavInfo />
                    <Nav />
                    <div className='breadcrumbs'>
                        <div>
                            <h2>About US</h2>
                        </div>
                        <div>
                            <Breadcrumbs />
                        </div>
                    </div>

                    <div className="aboutusContentDiv">
                        <div className="aboutusContent">
                            <div className="paragraph">
                                <p>Sensor Mart is one of the prestigious organizations from
                                    Roorkee (Uttarakhand) that are active in the manufacturing
                                    sector and producing the finest gauges, meters, and sensors.
                                    The company is known as a trustworthy manufacturer, exporter,
                                    and supplier of premium quality tipping bucket rain gauge, 3D
                                    ultrasonic anemometer, and electronic sensor. We specialize in
                                    serving these quality tested and approved products in good
                                    quality packaging materials so that the buyers get damage-free
                                    products on delivery. The company sources only the finest
                                    electrical, mechanical, and other components from the trusted
                                    vendors only, after ascertaining the product quality and
                                    performance, price competitiveness, shipping costs, transit
                                    period etc.
                                </p>
                                <p>Sensor Mart was established in the year 2016 with a vision
                                    to cater to the buyers demands for gauges, meters, and
                                    sensors with commitment and precision. Under the aegis of
                                    Co-Founders of the organization viz., Mr. Anshuman Agarwal
                                    and Ms. Anchal Agarwal, today we can say that the buyers we
                                    have served so far are quite satisfied with our products.
                                </p>
                                <p>Infrastructure
                                    The company boasts of a vast infrastructural facility that is
                                    spread over a sprawling land area where modernistic machinery
                                    and equipment are installed for the speedy production of meters,
                                    sensors, and gauges. We are capable of producing these products
                                    in bulk to cater to the urgent requirement of the buyers. Our
                                    production facility is supported by departments like manufacturing,
                                    engineering, quality management, research & development, sales &
                                    marketing, etc.
                                </p>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="cell1">Alfreds Futterkiste</td>
                                            <td className="cell2">Maria Anders</td>
                                        </tr>
                                        <tr>
                                            <td className="cell1">Centro comercial Moctezuma</td>
                                            <td className="cell2">Francisco Chang</td>
                                        </tr>
                                        <tr>
                                            <td className="cell1">Ernst Handel</td>
                                            <td className="cell2">Roland Mendel</td>
                                        </tr>
                                        <tr>
                                            <td className="cell1">Island Trading</td>
                                            <td className="cell2">Helen Bennett</td>
                                        </tr>
                                        <tr>
                                            <td className="cell1">Laughing Bacchus Winecellars</td>
                                            <td className="cell2">Yoshi Tannamuri</td>
                                        </tr>
                                        <tr>
                                            <td className="cell1">Magazzini Alimentari Riuniti</td>
                                            <td className="cell2">Giovanni Rovelli</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div className='aside'>
                                <Accordion />
                                <div className="ContactUsDiv">
                                    <h3>Contact Us</h3>
                                    <hr />
                                    <h4>Kuchhal Brothers</h4>
                                    <div>1104,1105 Salempur Rajputana industrial Area,
                                        Salempur, Roorkee, Uttarakhand - 247667, India</div>
                                    <div>Mobile : +91-9719411764, +91-7017880914</div>
                                    <div>Call Us : 08069247354 Ext : 036</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterNav />
                    <ScrollToTopButton />
                </div>
            </div>
        </>
    );
};

export default AboutUs;

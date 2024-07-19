import React, { useState } from 'react';
import Carousel from "./Carousel";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Form from "./Form";
import Nav from "./Nav";
import { Link } from 'react-router-dom';
import SubmitRequirement from "../Common/RequrimentButton";
import ScrollToTopButton from "../Common/ScrollToTopButton";
import WhatsAppButton from "../Common/WhatsAppButton";
import Data from '../Products/Data.json';
import '../css/Home.css';
import MobileFooter from "../Common/MobileFooter";
import MobileLogoDiv from "../Common/MobileLogoDiv";
import Grid from '@mui/material/Grid';
import CallUs from "../Common/CallUsButton";
import MobileCarousel from "../Common/MobileCarousel";
import FooterCompanyName from '../Common/FooterCompanyName'

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const ProductCardArr = Data[0]["Electronic-Sensor"];

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="container">
                <Nav />
                <MobileLogoDiv />
                <div className="main">
                    <Carousel />
                    <MobileCarousel />
                    <div className="homeContant">
                        <div className="paraDiv">
                            <h1 className="heading">WELCOME TO OUR WEBSITE</h1>
                            <p>
                                Sensor Mart is one of the prestigious organizations from Roorkee (Uttarakhand) that are active in the
                                manufacturing sector and producing the finest gauges, meters, and sensors. The company is known as a trustworthy
                                manufacturer, exporter, and supplier of premium quality tipping bucket rain gauge, 3D ultrasonic anemometer, and
                                electronic sensor. We specialize in serving these quality tested and approved products in good quality packaging
                                materials so that the buyers get damage-free products on delivery. The company sources only the finest electrical,
                                mechanical, and other components from the trusted vendors only, after ascertaining the product quality and performance,
                                price competitiveness, shipping costs, transit period etc. Sensor Mart was established in the year 2016 with a visi
                                {isExpanded && (
                                    <>
                                        <span>
                                            on to deliver superior quality products to its customers. Our experienced team ensures that every product meets
                                            the highest standards of quality before it is delivered to the customers. We are committed to continuous improvement
                                            and innovation to meet the evolving needs of our clients.
                                        </span>
                                        <Link className="readMore" onClick={toggleExpand}><span>Read less...</span></Link>
                                    </>
                                )}
                                {!isExpanded && (
                                    <Link className="readMore" onClick={toggleExpand}><span>Read more...</span></Link>
                                )}
                            </p>
                            <Link className="readMoreDesktop" to={'/about'}><span>Read more...</span></Link>
                        </div>
                        <div className="cartContainer">
                            <h1>Product Range</h1>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {ProductCardArr.map((item, index) => (
                                    <ProductCard key={index} product={item} />
                                ))}
                            </Grid>
                            <div className='view-all-button'>
                                <Link to="/product"><button>View All Products</button></Link>
                            </div>
                        </div>
                        <Form />
                        <FooterCompanyName/>
                    </div>
                    <SubmitRequirement />
                    <Footer />
                    <CallUs />
                    <MobileFooter />
                    <ScrollToTopButton />
                    <WhatsAppButton
                        phoneNumber="919876543210"
                        message="Hello, I want to chat with you!"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;

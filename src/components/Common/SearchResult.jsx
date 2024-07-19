import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Home/Nav';
import NavInfo from './NavInfo';
import Accordion from '../AboutUs/Accordian';
import SubmitRequirement from './RequrimentButton';
import FooterNav from './FooterNav';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTopButton from './ScrollToTopButton';
import MobileFooter from './MobileFooter';
import Breadcrumbs from './Breadcrumbs';
import CallUs from './CallUsButton';
import MobileBreadcrumbs from '../Common/MobileBreadcrumbs'

const SearchResults = () => {
    const location = useLocation();
    const { results, searchTerm } = location.state || { results: [], searchTerm: '' };

    return (
        <>
            <div className="container">
                <NavInfo />
                <Nav />
                <div className="main">
                    <div className='breadcrumbs'>
                        <div>
                            <h2>Search Results</h2>
                        </div>
                        <div>
                            <Breadcrumbs />
                        </div>
                    </div>
                    <MobileBreadcrumbs/>
                    <div className='main-Content'>
                        <div className='resultContent'>
                        <p className='search-header'>
                            There are products/services that match your keyword "<span className='bold'>{searchTerm}</span>"
                        </p>
                            {results.length > 0 && (
                                <ul>
                                    {results.map((result, index) => (
                                        <li className='resultList' key={index}>
                                            <h3 className='productResult'>{result.productName}</h3>
                                            <hr className="customHr" /> 
                                            <div className='resultProduct'>
                                                <div>
                                                    <img className='resultImg' src={result.productImg} alt={result.productName} />
                                                </div>
                                                <div className='productListResult'>
                                                    <div>{result.businessType}</div>
                                                    <div>{result.temperature}</div>
                                                    <div>{result.probeMaterial}</div>
                                                    <div>{result.probeDiameter}</div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='aside1'>
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
                    <SubmitRequirement />
                    <FooterNav />
                    <MobileFooter />
                    <CallUs/>
                    <ScrollToTopButton />
                    <WhatsAppButton
                        phoneNumber="919876543210" // Change this to your WhatsApp number with country code
                        message="Hello, I want to chat with you!"
                    />
                </div>
            </div>
        </>
    );
};

export default SearchResults;

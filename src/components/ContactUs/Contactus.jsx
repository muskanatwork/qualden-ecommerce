import React from 'react';
import ContactUsForm from './ContactUsForm';
import ContactUsTable from "./ContactUsTable";
import Breadcrumbs from '../Common/Breadcrumbs';
import NavInfo from '../Common/NavInfo';
import FooterNav from '../Common/FooterNav';
import Nav from '../Home/Nav';
import SubmitRequirement from '../Common/RequrimentButton';
import '../css/ContactUs.css'
import WhatsAppButton from '../Common/WhatsAppButton';
import ScrollToTopButton from '../Common/ScrollToTopButton';
import MobileFooter from '../Common/MobileFooter';
import MobileBreadcrumbs from '../Common/MobileBreadcrumbs'
import CallUs from '../Common/CallUsButton';
const ContactUs = () => {
    return (
        <>
            <div className="container">
            <NavInfo />
            <Nav/>
                <div className="main">
                    <div className='breadcrumbs'>
                        <div><h2>Contact Us</h2></div>
                        <div className='breadcrumbs-link'><Breadcrumbs /></div>
                    </div>
                    <MobileBreadcrumbs/>

                    <div className="contact-container">
                        <ContactUsTable />
                        <ContactUsForm />
                    </div>
                    <FooterNav/>
                    <MobileFooter/>
                    <SubmitRequirement />
                    <ScrollToTopButton />
                    <CallUs/>
                    <WhatsAppButton
                        phoneNumber="919876543210" // Change this to your WhatsApp number with country code
                        message="Hello, I want to chat with you!"
                    />
                </div>
            </div>
        </>
    );
};

export default ContactUs;

import React from 'react';
import ContactUsForm from './ContactUsForm';
import ContactUsTable from "./ContactUsTable";
import Breadcrumbs from '../Common/Breadcrumbs';
import NavInfo from '../Common/NavInfo';
import FooterNav from '../Common/FooterNav';
import Nav from '../Home/Nav';
import SubmitRequirement from '../Common/RequrimentButton';
import '../css/ContactUs.css'
const ContactUs = () => {
    return (
        <>
            <div className="container">
                <div className="main">
                <NavInfo />
                <Nav/>
                    <div className='breadcrumbs'>
                        <div><h2>Contact Us</h2></div>
                        <div className='breadcrumbs-link'><Breadcrumbs /></div>
                    </div>

                    <div className="contact-container">
                        <ContactUsTable />
                        <ContactUsForm />
                    </div>
                    <FooterNav/>
                    <SubmitRequirement />
                </div>
            </div>
        </>
    );
};

export default ContactUs;

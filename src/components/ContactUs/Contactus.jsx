import React from 'react';
import Nav from "../Home/Nav";
import ContactUsForm from './ContactUsForm';
import ContactUsTable from "./ContactUsTable";
import Breadcrumbs from '../Common/Breadcrumbs';
import NavInfo from '../Common/NavInfo';
import FooterNav from '../Common/FooterNav';

const ContactUs = () => {
    return (
        <>
            <div className="container1">
                
                <div className="box1"></div>
                <div className="box2">
                <Nav />
                <NavInfo />
                <div className='breadcrumbs'>
                        <div><h2>Contact Us</h2></div>
                        <div className='breadcrumbs-link'><Breadcrumbs /></div>
                    </div>

                    <div className="contact-container">
                        <ContactUsTable />
                        <ContactUsForm />
                    </div>
                    <FooterNav/>
                </div>
                <div className="box3"></div>
            </div>
        </>
    );
};

export default ContactUs;

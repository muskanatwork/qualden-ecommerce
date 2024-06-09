import React from 'react';
import Nav from "../Home/Nav";
import ContactUsForm from './ContactUsForm';
import ContactUsTable from "./ContactUsTable";

const ContactUs = () => {
    return (
        <>
            <div className="container1">
                <Nav />
                <div className="box1"></div>
                <div className="box2">
                    <div className="contact-container">
                        <ContactUsTable />
                        <ContactUsForm />
                    </div>
                </div>
                <div className="box3"></div>
            </div>
        </>
    );
};

export default ContactUs;

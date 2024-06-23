import React from 'react';
import Accordion from '../AboutUs/Accordian';
import NavInfo from './NavInfo';
import Breadcrumbs from '../Common/Breadcrumbs';
import FooterNav from '../Common/FooterNav';
import Nav from '../Home/Nav'
import JobApplicationForm from './CurrentJobsForm';

const CurrentJobs = () => {
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
                        <div>
                            <JobApplicationForm />
                            <div className='aside'>
                                <Accordion />
                                <div className="ContactUsDiv">
                                    <h3>Contact Us</h3>
                                    <hr/>
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
                </div>
            </div>

        </>
    );
}

export default CurrentJobs;

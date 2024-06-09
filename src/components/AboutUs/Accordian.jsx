import React, { useState } from 'react';

const Accordion = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className='accordianDiv'>
            <h3>Products</h3>
            <hr/>
            <div>Electronic Sensor </div>
            <div>Radar Sensor </div>
            <div>Tipping Bucket Rain Gauge</div>
            <div>3D Ultrasonic Anemometer </div>
            <div>SMC BRNO-ECO Optical Rain Gauge </div>
            <div> GPS Receiver Rs232</div>
            <div> D116 Ultrasonic Flow Meter</div>
            <div>SMKB MET ROAD FS1 Weather Station </div>
            <div> SMKB MET ROAD FS2 Weather Station</div>
            <div>KB -Tab100 Industrial Pc </div>
            <div>mujhe eska accordian bna ke dijiye</div>
        </div>
    );
};

export default Accordion;

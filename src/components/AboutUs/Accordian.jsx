import React, { useState } from 'react';

const Accordion = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const products = [
        "Electronic Sensor",
        "Radar Sensor",
        "Tipping Bucket Rain Gauge",
        "3D Ultrasonic Anemometer",
        "SMC BRNO-ECO Optical Rain Gauge",
        "GPS Receiver Rs232",
        "D116 Ultrasonic Flow Meter",
        "SMKB MET ROAD FS1 Weather Station",
        "SMKB MET ROAD FS2 Weather Station",
        "KB -Tab100 Industrial Pc"
    ];

    const productDetails = [
        "Details about Electronic Sensor",
        "Details about Radar Sensor",
        "Details about Tipping Bucket Rain Gauge",
        "Details about 3D Ultrasonic Anemometer",
        "Details about SMC BRNO-ECO Optical Rain Gauge",
        "Details about GPS Receiver Rs232",
        "Details about D116 Ultrasonic Flow Meter",
        "Details about SMKB MET ROAD FS1 Weather Station",
        "Details about SMKB MET ROAD FS2 Weather Station",
        "Details about KB -Tab100 Industrial Pc"
    ];

    return (
        <div className='accordianDiv'>
            <h3>Products</h3>
            <hr />
            {products.map((product, index) => (
                <div key={index} className='accordianItem'>
                    <div onClick={() => handleAccordion(index)} className='accordianHeader'>
                        {product} <span className='accordianIcon'>{openAccordion === index ? '-' : '+'}</span>
                    </div>
                    {openAccordion === index && <p className='accordianContent'>{productDetails[index]}</p>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;

import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://2.wlimg.com/product_images/bc-small/2020/2/4222645/siphon-tipping-bucket-rain-gauge-1582793140-5316535.jpeg",
        "https://2.wlimg.com/product_images/bc-small/2020/2/4222645/atmospheric-temperature-and-humidity-sensor-1582793223-5316544.jpeg",
        "https://2.wlimg.com/product_images/bc-small/2020/2/4222645/wind-speed-sensor-1582793200-5316541.jpeg"
    ];

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <button className="carousel-button" onClick={goToPrevSlide}>
                &lt;
            </button>
            <div className="carousel-slide">
                <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button className="carousel-button" onClick={goToNextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;

import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://catalog.wlimg.com/1/4222645/other-images/357186.jpg",
        "https://catalog.wlimg.com/1/4222645/other-images/357188.jpg",
        "https://catalog.wlimg.com/1/4222645/other-images/357187.jpg"
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
                <div className="img">
                        <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>
            </div>
            <button className="carousel-button" onClick={goToNextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;

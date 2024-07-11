import React, { useState, useEffect } from 'react';

const MobileCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "https://catalog.wlimg.com/1/4222645/other-images/357186.jpg",
    "https://catalog.wlimg.com/1/4222645/other-images/357188.jpg",
    "https://catalog.wlimg.com/1/4222645/other-images/357187.jpg"
  ];

  // Automatically transition slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;

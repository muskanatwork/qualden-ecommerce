import React, { useState } from 'react';

import Data from './Data.json';

const Carousel = () => {
    const initialCards = Data.slice(0, 4); 
    const [cards, setCards] = useState(initialCards);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex + 4 < Data.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setCards((prevCards) => [...prevCards.slice(1), Data[currentIndex + 4]]);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setCards((prevCards) => [Data[currentIndex - 1], ...prevCards.slice(0, prevCards.length - 1)]);
        }
    };

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {cards.map((card, index) => (
                    <div key={index} className="carousel-item">
                        <div className="card">
                            <img src={card.image} alt={card.heading} />
                            <div className="card-body">
                                <h5 className="card-title">{card.heading}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide} disabled={currentIndex === 0}>
                &lt;
            </button>
            <button className="carousel-control next" onClick={nextSlide} disabled={currentIndex + 4 >= Data.length}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;

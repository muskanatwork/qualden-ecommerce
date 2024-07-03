import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from './Data.json';

const CarouselCard = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive}>
            {Data.map((card, index) => (
                <div key={index} className="carousel-item">
                    <div className="card">
                        <img src={card.image} alt={card.heading} />
                        <div className="card-body">
                            <h5 className="card-title">{card.heading}</h5>
                            <button className="btn">Get Best Quoto</button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselCard;

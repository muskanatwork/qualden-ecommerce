import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from './Data.json';
import { Link } from 'react-router-dom';

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

    // Flatten the data
    const flattenedData = [];
    Data.forEach(category => {
        const categoryName = Object.keys(category)[0];
        category[categoryName].forEach(product => {
            flattenedData.push(product);
        });
    });

    return (
        <Link to={'/product/productDetails'}>
        <Carousel responsive={responsive}>
            {flattenedData.map((product, index) => (
                <div key={index} className="carousel-item">
                    <div className="card">
                        <img src={product.productImg} alt={product.productName} />
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <button className="btn">Get Best Quoto</button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
        </Link>
    );
};

export default CarouselCard;

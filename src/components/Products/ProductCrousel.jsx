import React, { useState } from 'react';
import Data from './Data.json';
import ProductCardCarousel from './ProductCardCrousel';

const ProductCarousel = () => {

    return (
        <>
        {
            Data.map((item,index)=>{
                return(
                    <ProductCardCarousel key={index} item={item}/>
                )
            })
        }
        </>
    );
};

export default ProductCarousel;

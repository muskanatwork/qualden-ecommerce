import React from 'react';
import Nav from "../Home/Nav";
import NavInfo from '../Common/NavInfo';
import FooterNav from '../Common/FooterNav';
import ImagePreview from './ImagePreview';
import TableInfo from './TableInfo';
import ProductForm from './ProductForm';
import Carousel from './ProductCardCrousel';
import Breadcrumbs from '../Common/Breadcrumbs';
import ProductDescription from './ProductDescription';
const ProductDetails = () => {

    return (
        <>
            <div className="container">
                <div className="main">
                    <Nav />
                    <NavInfo />
                    <Breadcrumbs/>
                    <div className="detailsContainer">
                    <ImagePreview />
                    <ProductDescription/>
                    </div>
                    <TableInfo />
                    <ProductForm/>
                    <Carousel />
                    <FooterNav />
                </div>
            </div>
            
        </>
    );
}

export default ProductDetails;

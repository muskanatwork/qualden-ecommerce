import React from 'react';
import Nav from "../Home/Nav";
import NavInfo from '../Common/NavInfo';
import FooterNav from '../Common/FooterNav';
import ImagePreview from './ImagePreview';
import TableInfo from './TableInfo';
import ProductForm from './ProductForm';
import CarouselCard from './ProductCardCrousel';
import Breadcrumbs from '../Common/Breadcrumbs';
import ProductDescription from './ProductDescription';
import MobileFooter from '../Common/MobileFooter';
const ProductDetails = () => {

    return (
        <>
            <div className="container">
                <NavInfo />
                <Nav />
                <div className="main">
                    <Breadcrumbs />
                    <div className="detailsContainer">
                        <ImagePreview />
                        <ProductDescription />
                    </div>
                    <TableInfo />
                    <ProductForm />
                    <CarouselCard />
                    <FooterNav />
                    <MobileFooter/>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;

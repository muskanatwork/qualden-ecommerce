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
import { useLocation } from 'react-router-dom';
const ProductDetails = () => {
    const location = useLocation();
    const product = location.state
    return (
        <>
            <div className="container">
                <NavInfo />
                <Nav />
                <div className="main">
                    <Breadcrumbs />
                    <div className="detailsContainer">
                        <ImagePreview product={product} />
                        <ProductDescription product={product} />
                    </div>
                    <TableInfo product={product}/>
                    <ProductForm />
                    <CarouselCard product={product} />
                    <FooterNav />
                    <MobileFooter/>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;

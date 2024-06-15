import React from 'react';
import Nav from "../Home/Nav";
import NavInfo from '../Common/NavInfo';
import FooterNav from '../Common/FooterNav';
import TableDetail from './TableDetail';
import TableInfo from './TableInfo';
import ProductForm from './ProductForm';
const ProductDetails = () => {
    return (
        <>
            <div className="container1">
                <div className="box1"></div>
                <div className="box2">
                    <Nav />
                    <NavInfo />
                    <TableDetail />
                    <TableInfo />
                    <ProductForm/>
                    <FooterNav />
                </div>
                <div className="box3"></div>
            </div>
        </>
    );
}

export default ProductDetails;

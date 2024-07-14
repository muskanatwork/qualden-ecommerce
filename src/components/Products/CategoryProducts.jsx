import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Products/Data.json';
import ImagePreview from './ImagePreview';
import ProductDescription from './ProductDescription';
import Nav from '../Home/Nav';
import NavInfo from '../Common/NavInfo';
import WhatsAppButton from '../Common/WhatsAppButton';
import CallUs from '../Common/CallUsButton';
import ScrollToTopButton from '../Common/ScrollToTopButton';
import MobileFooter from '../Common/MobileFooter';
import SubmitRequirement from '../Common/RequrimentButton';
import FooterNav from '../Common/FooterNav';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const categoryData = Data.find(category => category[categoryName]);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const products = categoryData[categoryName];

  return (
    <>
      <div className="container">
        <NavInfo />
        <Nav />
        <div className="main">
          <div className="category-products">
            <h1>{categoryName}</h1>
            <div className="product-list">
              {products.map((product, index) => (
                <div key={index} className="product-detail">
                  <ImagePreview product={product} />
                  <ProductDescription product={product} />
                </div>
              ))}
            </div>
          </div>
          <SubmitRequirement />
          <FooterNav />
          <MobileFooter />
          <CallUs />
          <ScrollToTopButton />
          <WhatsAppButton
            phoneNumber="919876543210" // Change this to your WhatsApp number with country code
            message="Hello, I want to chat with you!"
          />
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;

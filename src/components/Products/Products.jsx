import Nav from "../Home/Nav"
import ProductCategory from "./ProductCategory";
import NavInfo from "../Common/NavInfo";
import Breadcrumbs from "../Common/Breadcrumbs";
import FooterNav from "../Common/FooterNav";
import '../css/Products.css'
import SubmitRequirement from "../Common/RequrimentButton";
import WhatsAppButton from "../Common/WhatsAppButton";
import ScrollToTopButton from "../Common/ScrollToTopButton";
import MobileFooter from "../Common/MobileFooter";
import Data from '../Products/Data.json'
import MobileBreadcrumbs from '../Common/MobileBreadcrumbs'
import CallUs from "../Common/CallUsButton";
const Products = () => {
    const electronicArr = Data[0]["Electronic-Sensor"]
    const radarArr = Data[1]["Radar Sensor"]
    const tippingBucketArr = Data[2]["Siphon Tipping Bucket Rain Gauge"]
    const otherProductArr = Data[3]["Other Products"]

    return (
        <>
            <div className="container">
                <NavInfo />
                <Nav />
                <div className="main">
                    <div className='breadcrumbs'>
                        <div>
                            <h2>Products</h2>
                        </div>
                        <div>
                            <Breadcrumbs />
                        </div>
                    </div>
                    <MobileBreadcrumbs/>

                    <div className="categoryContainer">
                        <div className="categoryTittle">
                            <h2>Electronic Sensor</h2>
                            <hr />
                        </div>
                        <div className="Electronicdiv">
                            {
                                electronicArr.map((electronicProduct, index) => {
                                    return (
                                        <ProductCategory product = {electronicProduct} key={index} />
                                    )
                                })
                            }
                        </div>
                        <div className="categoryTittle">
                            <h2>Radar Sensor</h2>
                            <hr />
                        </div>
                        <div className="radarDiv">
                            {
                                radarArr.map((radarProduct, index) => {
                                    return (
                                        <ProductCategory key={index} product={radarProduct}/>
                                    )
                                })
                            }
                        </div>
                        <div className="categoryTittle">
                            <h2>Tipping Bucket Rain Gauge</h2>
                            <hr />
                        </div>
                        <div className="tippingBucketDiv">
                            {
                                tippingBucketArr.map((tippingBucketProduct, index) => {
                                    return (
                                        <ProductCategory key={index} product={tippingBucketProduct}/>
                                    )
                                })
                            }
                        </div>
                        <div className="categoryTittle">
                            <h2>Other Products</h2>
                            <hr />
                        </div>
                        <div className="otherProductDiv">
                            {
                                otherProductArr.map((otherProduct, index) => {
                                    return (
                                        <ProductCategory key={index} product={otherProduct}/>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <SubmitRequirement />
                    <FooterNav />
                    <CallUs/>
                    <MobileFooter/>
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

export default Products;

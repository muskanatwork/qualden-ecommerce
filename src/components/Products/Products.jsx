import Nav from "../Home/Nav"
import ProductCategory from "./ProductCategory";
 import NavInfo from "../Common/NavInfo";
 import Breadcrumbs from "../Common/Breadcrumbs";
 import FooterNav from "../Common/FooterNav";
 import '../css/Products.css'
 import SubmitRequirement from "../Common/RequrimentButton";
const Products = () => {
    const electronicArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5]
    const radarArr = [1, 2, 3, 4, 5]
    const tippingBucketArr = [1, 2]
    const otherProductArr = [1, 2, 3, 4, 5, 6, 7]


    return (
        <>
            <div className="container">
                <div className="main">
                    <NavInfo/>
                    <Nav/>
                    <div className='breadcrumbs'>
                        <div>
                            <h2>Products</h2>
                        </div>
                        <div>
                            <Breadcrumbs />
                        </div>
                    </div>

                    <div className="categoryContainer">
                        <div className="categoryTittle">
                            <h2>Electronic Sensor</h2>
                            <hr />
                        </div>
                        <div className="Electronicdiv">
                            {
                                electronicArr.map((item, index) => {
                                    return (
                                        <ProductCategory key={index} />
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
                                radarArr.map((item, index) => {
                                    return (
                                        <ProductCategory key={index} />
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
                                tippingBucketArr.map((item, index) => {
                                    return (
                                        <ProductCategory key={index} />
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
                                otherProductArr.map((item, index) => {
                                    return (
                                        <ProductCategory key={index} />
                                    )
                                })
                            }
                        </div>

                    </div>
                    <SubmitRequirement />
                    <FooterNav/>
                </div>
            </div>
        </>
    );
};

export default Products;

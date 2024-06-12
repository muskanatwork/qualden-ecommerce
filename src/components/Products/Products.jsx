import Nav from "../Home/Nav"
import ProductCategory from "./ProductCategory";


const Products = () => {
    const electronicArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5]
    const radarArr = [1, 2, 3, 4, 5]
    const tippingBucketArr = [1, 2]
    const otherProductArr = [1, 2, 3, 4, 5, 6, 7]


    return (
        <>
            <div className="container2">
                <div className="box1"></div>
                <div className="box2">
                    <Nav />
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
                <div className="box3"></div>
            </div>
        </>
    );
};

export default Products;

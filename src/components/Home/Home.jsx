import Carousel from "./Carousel"
import Footer from "./Footer"
import ProduntCard from "./ProductCard"
import Form from "./Form"
import Nav from "./Nav"
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    const ProductCartArr = [1, 2, 3, 4, 5, 5, 4, 3, 3, 3, 2, 2]
    return (
        <>
            <div className="container">
            <Nav />
                <div className="box1"></div>
                <div className="box2">
                    <Carousel />
                    <div className="homeContant">
                        <div className="paraDiv">
                            <h1 className="heading">WELCOME TO OUR WEBSITE</h1>
                            <p>Sensor Mart is one of the prestigious organizations
                                from Roorkee (Uttarakhand) that are active in the
                                manufacturing sector and producing the finest gauges,
                                meters, and sensors. The company is known as a trustworthy
                                manufacturer, exporter, and supplier of premium quality
                                tipping bucket rain gauge, 3D ultrasonic anemometer, and
                                electronic sensor. We specialize in serving these quality
                                tested and approved products in good quality packaging
                                materials so that the buyers get damage-free products on
                                delivery. The company sources only the finest electrical,
                                mechanical, and other components from the trusted vendors
                                only, after ascertaining the product quality and performance,
                                price competitiveness, shipping costs, transit period etc.
                                Sensor Mart was established in the year 2016 with a visi Read more...
                            </p>
                        </div>
                        <div className="cartContainer">
                            <h1>Product Range</h1>
                            <div className="productCartContainer">
                                {
                                    ProductCartArr.map((item, index) => {
                                        return (
                                            <ProduntCard key={index} />
                                        )
                                    })
                                }
                            </div>
                            <div className='view-all-button'>
                              <Link to="/products"><button>View All Products</button></Link>
                            </div>

                        </div>
                        <Form />
                    </div>
                    <Footer />
                </div>
                <div className="box3"></div>
            </div>
        </>
    )
}

export default Home
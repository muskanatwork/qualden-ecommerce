import Carousel from "./Carousel"
import Footer from "./Footer"
import ProduntCard from "./ProductCard"
import Form from "./Form"
import Nav from "./Nav"
import { Link} from 'react-router-dom';
import SubmitButton from "../Common/RequrimentButton"
import ScrollToTopButton from "../Common/ScrollToTopButton"
import WhatsAppButton from "../Common/WhatsAppButton"
import Data from '../Products/Data.json'
import {useState} from 'react';
import '../css/Home.css'

const Home = () => {
    const [data, setData] = useState(Data);
    return (
        <>
            <div className="container">
                <div className="main">
                    <Nav />
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
                                    data.map((item, index) => {
                                        return (
                                            <ProduntCard key={index} item={item} />
                                        )
                                    })
                                }
                            </div>
                            <div className='view-all-button'>
                                <Link to="/product"><button>View All Products</button></Link>
                            </div>

                        </div>
                        <Form />
                    </div>
                    <SubmitButton />
                    <Footer />
                    <ScrollToTopButton />
                    <WhatsAppButton
                        phoneNumber="919876543210" // Change this to your WhatsApp number with country code
                        message="Hello, I want to chat with you!"
                    />
                </div>
            </div>
        </>
    )
}

export default Home
import Nav from './Nav'
import Carousel from './Carousel';
import ProductCard from './ProductCard'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Form from './Form'
function Home() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <>
            <Nav />
            <div className='main-container'>
                <div className='box1'></div>
                <div className='box2'>
                    <Carousel />
                    <div className='websiteContent'>
                        <h1>WELCOME TO OUR WEBSITE</h1>
                        <p>Sensor Mart is one of the prestigious organizations
                            from Roorkee (Uttarakhand) that are active in the manufacturing
                            sector and producing the finest gauges, meters, and sensors. The company
                            is known as a trustworthy manufacturer, exporter, and supplier of premium
                            quality tipping bucket rain gauge, 3D ultrasonic anemometer, and electronic
                            sensor. We specialize in serving these quality tested and approved products
                            in good quality packaging materials so that the buyers get damage-free products
                            on delivery. The company sources only the finest electrical, mechanical,
                            and other components from the trusted vendors only, after ascertaining the
                            product quality and performance, price competitiveness, shipping costs, transit
                            period etc.Sensor Mart was established in the year 2016 with a visi <Link to='/about'>                <p>Read more...</p>
                            </Link>
                        </p>
                    </div>
                    <div className='container'>
                        {arr.map((item, index) => {
                            return (
                                <ProductCard key={index} />
                            )
                        })
                        }
                    </div>
                    <div className='view-all-button'>
                        <button>View All Products</button>
                    </div>
                    <Form/>
                    <Footer/>
                </div>

                
                <div className='box3'></div>
            </div>
        </>
    )
}

export default Home

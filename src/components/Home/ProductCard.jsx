import { Link} from 'react-router-dom';


const ProductCard = () => {
    return (
        <>
            <Link to='/product/productDetails'>
                <div className="ProductCardDiv">
                    <div>
                        <img src="https://2.wlimg.com/product_images/bc-small/2020/2/4222645/wind-speed-sensor-1582793200-5316541.jpeg" />
                    </div>
                    <h3>Industrial Noise Sensor</h3>
                </div>\
            </Link>
        </>
    )
}

export default ProductCard
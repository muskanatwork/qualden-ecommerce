const ProductCategory = () => {
    return (

        <div className="productItem">
            <div className="productItem-image-container">
                <img
                    src="https://2.wlimg.com/product_images/bc-small/2020/2/4222645/wind-speed-sensor-1582793200-5316541.jpeg"
                    alt="Wind Speed Sensor"
                    className="productItem-image"
                />
            </div>
            <h3 className="productItem-title">Wind Speed Sensor</h3>
            <div className="productItem-hover-card">
                <div>
                    <h5>PT100 Industrial Temperature Sensor</h5>
                    <p>Temperature Range(°C):-200 to 420</p>
                    <p>Probe MaterialStainless:Steel</p>
                    <p>Probe Diameter(mm):4</p>
                    <p>Probe Length(mm):30</p>
                    <p>Cable Length:1.05 Meter</p>
                    <button>Enquiry Now</button>
                    <button>View More</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCategory;







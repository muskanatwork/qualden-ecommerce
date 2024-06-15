import { FaEnvelope, FaMobile } from 'react-icons/fa';
import CallIcon from '@mui/icons-material/Call';


const TableDetail = () => {
    return (
        <>
            <div className="detailsContainer">
                <div className='zoomingImg'>
                    <img src="https://2.wlimg.com/product_images/bc-full/2020/3/4222645/pt100-industrial-temperature-sensor-1583473665-5327671.jpeg" alt="PT100 Industrial Temperature Sensor" />
                </div>
                <div >
                    <h2>PT100 Industrial Temperature Sensor</h2>
                    <h3>1 Piece(s) (MOQ)</h3>
                    <div className="number-input">
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="input-field"
                        />
                        <input
                            type="number"
                            placeholder="Piece(s)"
                            className="input-field"
                        />
                        <button>Get Best Price</button>
                    </div>
                    <div className="detailContant">
                        <div className="detailRow">
                            <p>Business Type</p>
                            <h4>Manufacturer, Supplier, Trader</h4>
                        </div>
                        <div className="detailRow">
                            <p>Temperature Range (°C)</p>
                            <h4>-200 to 420</h4>
                        </div>
                        <div className="detailRow">
                            <p>Probe Material</p>
                            <h4>Stainless Steel</h4>
                        </div>
                        <div className="detailRow">
                            <p>Probe Diameter (mm)</p>
                            <h4>4</h4>
                        </div>
                    </div>

                    <p>Click to view more</p>

                    <h3>Preferred Buyer From</h3>
                    <div className="preferredBuyerFrom">
                        <p>Location</p>
                        <h4>Anywhere in India</h4>
                    </div>
                    <div className='detail-button'>
                        <button className='detail-button1'> <CallIcon /> Request to call</button>
                        <button className='detail-button2'> <FaEnvelope />Send Enquiry</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TableDetail;

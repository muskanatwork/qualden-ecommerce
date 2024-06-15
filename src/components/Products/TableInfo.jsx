const TableInfo = () => {
    return (
        <>
            <div className='DetailsContainertable'>
                <h2>Product Details</h2>
                {/* <div className='productDetails'>
                    <div >
                        <p>Probe Length(mm)	</p>
                        <p>Accuracy</p>
                        <p>Shipment Dimensions	</p>
                    </div>
                    <div >
                        <h3>30</h3>
                        <h3>±(0.3°C+0.5%|t|)</h3>
                        <h3>8 × 6 × 2 cm </h3>
                    </div>
                    <div>
                        <p>Cable Length	</p>
                        <p>Response Time(s)	</p>
                        <p>Shipment Weight	</p>
                    </div>
                    <div>
                        <h3>1.05 Meter</h3>
                        <h3>0.5</h3>
                        <h3>0.095 kg</h3>
                    </div>

                </div> */}
                <div className='productDetails'>
                    <div className="detailContant">
                        <div className="detailRow">
                            <p>Probe Length(mm)	</p>
                            <h4>30</h4>
                        </div>
                        <div className="detailRow">
                            <p>Accuracy	</p>
                            <h4>±(0.3°C+0.5%|t|)</h4>
                        </div>
                        <div className="detailRow">
                            <p>Shipment Dimensions	</p>
                            <h4>8 × 6 × 2 cm</h4>
                        </div>
                    </div>
                    <div className="detailContant">
                        <div className="detailRow">
                            <p>Cable Length	</p>
                            <h4>1.05 Meter</h4>
                        </div>
                        <div className="detailRow">
                            <p>Response Time(s)	</p>
                            <h4>0.5</h4>
                        </div>
                        <div className="detailRow">
                            <p>Shipment Weight	</p>
                            <h4>0.095 kg</h4>
                        </div>
                    </div>
                </div>


                <h5>Description</h5>
                <p>The SMKBTRTD100 Waterproof 1m 30mm Probe PTFE FTARP05 Stainless Steel Pole Probe Temperature Sensor has a water-immersible probe suitable for precision air or liquid temperature measurements. You can immerse both the probe and the cable in the water for continuous operation. It also can be used with a thermal well.</p>
                <div className='interested'>
                    <button className='interested'>Yes! I am interested</button>
                </div>
            </div>

        </>
    )
}

export default TableInfo;

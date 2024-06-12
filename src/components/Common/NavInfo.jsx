import { FaEnvelope, FaMobile } from 'react-icons/fa'; 

const NavInfo = () => {
    return (
        <div className="Nav-info">
            <div className="info-heading">
                <h3><FaEnvelope /> qualden@gmail.com</h3>
                <h3><FaMobile /> 08069247354</h3>
                <h3>Ext : 036</h3>
            </div>
            <div className="info-heading">
                <h3>GST No. 05AWBPA1798G1ZS</h3>
                <button className="info-button email-button"><FaEnvelope /> Send email</button>
                <button className="info-button sms-button"><FaMobile />Send SMS</button>
            </div>
        </div>
    );
}

export default NavInfo;

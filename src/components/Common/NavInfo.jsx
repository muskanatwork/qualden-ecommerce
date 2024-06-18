import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const NavInfo = () => {
    return (
        <div className="Nav-info">
            <div className="info-heading">
                <div className="icon-text"><MailOutlineIcon /><span>qualden@gmail.com</span></div>
                <div className="icon-text"><PhoneIphoneIcon /><span>08069247354</span></div>
                <span>Ext : 036</span>
            </div>
            <div className="info-heading">
                <span>GST No. 05AWBPA1798G1ZS</span>
                <button className="info-button email-button"><MailOutlineIcon /> Send email</button>
                <button className="info-button sms-button"><PhoneIphoneIcon /> Send SMS</button>
            </div>
        </div>
    );
}

export default NavInfo;

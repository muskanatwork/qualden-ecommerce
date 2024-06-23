import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from '../Common/SearchBar';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to='/'>
        <img className='logo' src="https://i.ytimg.com/vi/PhYXIuG0jZY/maxresdefault.jpg" alt="Logo" />
      </Link>
      <div className='nav-right'>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Us</NavLink>
          </li>
          <li className='dropdown'>
            <NavLink to='/product'>Products</NavLink>
            <ul className='dropdown-content'>
              <li className='dropdown'>
                <NavLink to='/product/industrial-noise-sensor'>Industrial Noise Sensor</NavLink>
              </li>
              <li>
                <NavLink to='/product/siphon-tipping-bucket-rain-gauge'>Siphon Tipping Bucket Rain Gauge</NavLink>
              </li>
              <li>
                <NavLink to='/product/smkbrn-eco-tipping-bucket-rain-gauge'>SMKBRN-ECO Tipping Bucket Rain Gauge</NavLink>
              </li>
              <li>
                <NavLink to='/product/wind-direction-sensor'>Wind Direction Sensor</NavLink>
              </li>
              <li>
                <NavLink to='/product/wind-speed-sensor'>Wind Speed Sensor</NavLink>
              </li>
              <li>
                <NavLink to='/product/3d-ultrasonic-anemometer'>3D Ultrasonic Anemometer</NavLink>
              </li>
              <li>
                <NavLink to='/product/atmospheric-temperature-and-humidity-sensor'>Atmospheric Temperature and Humidity Sensor</NavLink>
              </li>
              <li>
                <NavLink to='/product/barometric-pressure-sensor'>Barometric Pressure Sensor</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to='/contact'>Contact Us</NavLink>
          </li>
        </ul>
        <Search />
        <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

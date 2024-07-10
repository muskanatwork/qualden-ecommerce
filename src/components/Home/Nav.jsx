import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from '../Common/SearchBar';
import Data from "../Products/Data.json";
import PhoneSearch from '../Common/PhoneSearch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [viewAll, setViewAll] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (categoryName) => {
    setHoveredCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setViewAll({});
  };

  const handleViewAll = (categoryName) => {
    setViewAll({ ...viewAll, [categoryName]: true });
  };

  return (
    <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <nav ref={navRef}>
        <Link to='/'>
          <img className='logo' src="https://qualden.com/assets/imgs/template/logo.png" alt="qualden" />
        </Link>
        <div className='nav-right'>
          <ul className={menuOpen ? 'open' : ''}>
            {menuOpen && (
              <li>
                <span className='close-menu' onClick={() => setMenuOpen(false)}>
                  &times;
                </span>
              </li>
            )}
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li className='dropdown'>
              <NavLink to='/product'>Products </NavLink>
              <div className="dropdown-content">
                {Data.map((category, index) => (
                  Object.keys(category).map(catName => (
                    <div
                      key={catName}
                      className='category'
                      onMouseEnter={() => handleMouseEnter(catName)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {catName}
                      {hoveredCategory === catName && (
                        <div className='product-names'>
                          {category[catName].slice(0, viewAll[catName] ? category[catName].length : 5).map((product, productIndex) => (
                            <Link key={productIndex} to={`/product/${catName}/${product.productName}`}>
                              {product.productName}
                            </Link>
                          ))}
                          {catName === "Electronic-Sensor" && category[catName].length > 5 && !viewAll[catName] && (
                            <button className='viewAllButton' onClick={() => handleViewAll(catName)}>View All</button>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ))}
              </div>
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
        <PhoneSearch />
      </nav>
     </div>
  );
}

export default Nav;

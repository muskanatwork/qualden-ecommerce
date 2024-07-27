import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Search from '../Common/SearchBar';
import Data from "../Products/Data.json";
import PhoneSearch from '../Common/PhoneSearch';
import MobileLogoDiv from '../Common/MobileLogoDiv';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

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
  };

  const handleViewAll = (categoryName) => {
    navigate(`/product/${categoryName}`);
  };

  return (
    <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <nav ref={navRef}>
        <Link to='/'>
          <img className='logo' src="https://qualden.com/assets/imgs/template/logo.png" alt="qualden" />
        </Link>
        <div className='nav-right'>
          {menuOpen && (
            <button className='close-menu' onClick={() => setMenuOpen(false)}>×</button>
          )}
          <ul className={menuOpen ? 'open' : ''}>
            {menuOpen && (
              <li className='mobile-menu-header'>
                <div className='mobile-logo-div'>
                  <MobileLogoDiv />
                </div>
              </li>
            )}
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li className='dropdown'>
              <NavLink to='/product'>
                Products
                <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
              </NavLink>
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
                          {category[catName].slice(0, 5).map((product, productIndex) => (
                            <Link key={productIndex} to={`/product/${catName}/${product.productName}`}>
                              {product.productName}
                            </Link>
                          ))}
                          {category[catName].length > 5 && (
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

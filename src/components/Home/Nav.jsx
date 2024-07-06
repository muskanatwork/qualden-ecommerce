import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from '../Common/SearchBar';
import Data from '../Products/Data.json';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
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

  return (
    <nav ref={navRef} className={scrolled ? 'scrolled' : ''}>
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
            <NavLink to='/product'>Products</NavLink>
            <ul className='dropdown-content'>
              {Object.keys(Data).map((productCategory, index) => (
                <li key={index} className='dropdown-item'>
                  <NavLink to={`/product/${productCategory}`}>{productCategory}</NavLink>
                </li>
              ))}
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

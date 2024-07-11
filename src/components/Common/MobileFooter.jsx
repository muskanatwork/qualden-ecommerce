import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CallIcon from '@mui/icons-material/Call';

const MobileFooter = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const handleDoubleClick = (path) => {
    if (currentPage === path) {
      alert(`You are already on the ${path} page`);
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with the actual phone number
  };

  return (
    <div className="mobileFooter">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
          onDoubleClick={() => handleDoubleClick('/')}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon />}
          component={Link}
          to="/about"
          onDoubleClick={() => handleDoubleClick('/about')}
        />
        <BottomNavigationAction
          label="Product"
          icon={<StoreIcon />}
          component={Link}
          to="/product"
          onDoubleClick={() => handleDoubleClick('/product')}
        />
        <BottomNavigationAction
          label="Contact"
          icon={<ContactMailIcon />}
          component={Link}
          to="/contact"
          onDoubleClick={() => handleDoubleClick('/contact')}
        />
        <BottomNavigationAction
          label="Call Us"
          icon={<CallIcon />}
          onClick={handleCallClick}
          onDoubleClick={handleCallClick}
        />
      </BottomNavigation>
    </div>
  );
};

export default MobileFooter;

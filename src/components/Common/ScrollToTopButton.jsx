import React, { useState, useEffect } from 'react';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <button onClick={scrollToTop}>
        <KeyboardControlKeyIcon/> </button>}
    </div>
  );
};

export default ScrollToTopButton;

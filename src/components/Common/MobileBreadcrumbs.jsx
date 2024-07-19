import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const MobileBreadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const pathParts = location.pathname.split('/').filter((part) => part);
  const currentPage = pathParts[pathParts.length - 1] || 'Home';

  return (
    <nav className="mobile-breadcrumbs">
      <button onClick={handleBackClick} className="mobile-back-button">
        <FaArrowLeft />
        <span className="current-page">{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</span>
      </button>
    </nav>
  );
};

export default MobileBreadcrumbs;

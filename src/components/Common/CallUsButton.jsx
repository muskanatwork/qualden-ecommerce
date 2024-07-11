import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CallUs = () => {
  const handleCall = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  return (
    <>
      <FaPhoneAlt onClick={handleCall} className="call-icon" />
    </>
  );
};

export default CallUs;

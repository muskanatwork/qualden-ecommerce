// src/components/SubmitRequirement.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SubmitRequirement = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <div>
      {!showForm ? (
        <button onClick={handleButtonClick} className="submit-button">
          Submit Your Requirement
        </button>
      ) : (
        <div className="requirement-form-container">
          <div className="requirement-heading">
            <h1>Tell us what you are looking for?</h1>
            <button onClick={handleCancelClick} className="cancel-button">-</button>
          </div>
          <form>
            <div className="form-group1">
              <input type="text" id="product" name="product" required placeholder="Enter Product Name" />
              <input type="text" id="yourName" name="yourName" required placeholder="Enter Your Name" />
            </div>
            <div className="form-group2">
              <input type="email" id="email" name="email" required placeholder="Enter Your Email" />
              <input type="text" id="country" name="country" readOnly placeholder="Your Country" />
            </div>
            <div className="form-group3">
              <input type="tel" id="mobileNumber" name="mobileNumber" required placeholder="Enter Your Mobile Number" />
            </div>
            <div className="form-group4">
              <textarea id="message" name="message" required placeholder="Type Your Message Here"></textarea>
            </div>
            <button className="button" type="submit">Send Message</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SubmitRequirement;

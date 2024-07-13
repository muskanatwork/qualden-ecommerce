import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import data from '../Products/Data.json';

const PhoneSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // State for custom alert
  const navigate = useNavigate();

  // Flatten the JSON data
  const flattenData = (data) => {
    const items = [];
    data.forEach(category => {
      Object.values(category).forEach(products => {
        items.push(...products);
      });
    });
    return items;
  };

  const items = flattenData(data);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('Input changed:', event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setShowAlert(true); // Show custom alert
      return;
    }

    console.log('Search initiated with term:', searchTerm);
    const filteredResults = items.filter(item =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Filtered results:', filteredResults);
    setResults(filteredResults);

    // Navigate to the SearchResults page with the search term and results
    navigate('/search-results', { state: { results: filteredResults, searchTerm } });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      handleSearch();
    }
  };

  return (
    <div className="phoneSearch">
      {showAlert && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <p>Please enter the text</p>
            <button onClick={() => setShowAlert(false)}>OK</button>
          </div>
        </div>
      )}
      <div className="phone-search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="phone-search-input"
        />
        <SearchIcon className="phone-search-icon" onClick={handleSearch} />
      </div>
      {results.length > 0 && (
        <div className="phone-search-results">
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <img src={result.productImg} alt={result.productName} />
                <div>{result.productName}</div>
                <div>{result.businessType}</div>
                <div>{result.temperature}</div>
                <div>{result.probeMaterial}</div>
                <div>{result.probeDiameter}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhoneSearch;

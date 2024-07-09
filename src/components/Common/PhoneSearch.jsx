import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import data from '../Products/Data.json';

const PhoneSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

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
    console.log('Search initiated with term:', searchTerm); 
    const filteredResults = items.filter(item =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Filtered results:', filteredResults); 
    setResults(filteredResults);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed'); 
      handleSearch();
    }
  };

  return (
    <div className="phoneSearch">
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
      {results.length === 0 && searchTerm && (
        <div className="phone-search-no-results">No results found</div>
      )}
    </div>
  );
};

export default PhoneSearch;

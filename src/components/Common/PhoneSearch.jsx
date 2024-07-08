import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const PhoneSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const items = [
    'Industrial Noise Sensor',
    'Siphon Tipping Bucket Rain Gauge',
    'SMKBRN-ECO Tipping Bucket Rain Gauge',
    'Wind Speed Sensor',
    'Radar Type Water Level Sensor',
    'Soil Moisture and Temperature Sensor',
    'Industrial Noise Sensor'
  ];

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filteredResults = items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="phoneSearch">
      <div className="phone-search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="phone-search-input"
        />
        <SearchIcon className="phone-search-icon" onClick={handleSearch} />
      </div>
      {results.length > 0 && (
        <div className="phone-search-results">
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
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

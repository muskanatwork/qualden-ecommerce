import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
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

  const handleSearchIconClick = () => {
    setShowSearch(true);
  };

  const handleCancelIconClick = () => {
    setShowSearch(false);
    setSearchTerm('');
    setResults([]);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  

  const handleGoClick = () => {
    const filteredResults = items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleGoClick();
    }
  };

  return (
    <div className="App">
      <div className="search-bar">
        <button className="no-border" onClick={showSearch ? handleCancelIconClick : handleSearchIconClick}>
          <i className="search-icon">{showSearch ? <CloseIcon/> : <SearchIcon/>}</i>
        </button>
      </div>
      {showSearch && (
        <div className='inputSearch'>
          <input 
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search text here..."
          />
          <button className='search-button-go' onClick={handleGoClick}>Go</button>
        </div>
      )}
      {results.length > 0 && (
        <div className="search-results">
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
      {results.length === 0 && searchTerm && (
        <div className="no-results">No results found</div>
      )}
    </div>
  );
};

export default Search;

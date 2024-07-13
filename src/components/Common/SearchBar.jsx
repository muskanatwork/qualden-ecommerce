import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import data from '../Products/Data.json';

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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setShowSearch(true);
    console.log('Search icon clicked');
  };

  const handleCancelIconClick = () => {
    setShowSearch(false);
    setSearchTerm('');
    setResults([]);
    console.log('Cancel icon clicked');
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('Input changed:', event.target.value);
  };
  
  const handleGoClick = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter the text');
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
      handleGoClick();
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      handleCancelIconClick();
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  return (
    <div className="App">
      <div className="search-bar">
        <button className="no-border" onClick={showSearch ? handleCancelIconClick : handleSearchIconClick}>
          <i className="search-icon">{showSearch ? <CloseIcon/> : <SearchIcon/>}</i>
        </button>
      </div>
      {showSearch && (
        <div className='inputSearch' ref={searchRef}>
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
    </div>
  );
};

export default Search;

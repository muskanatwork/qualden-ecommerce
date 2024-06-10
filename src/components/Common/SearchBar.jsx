import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearch(true);
  };

  const handleCancelIconClick = () => {
    setShowSearch(false);
    setSearchTerm('');
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGoClick = () => {
    alert(`Searching for: ${searchTerm}`);
    // Yahan par aap apna search logic add kar sakte hain
  };

  return (
    <div className="App">
      <div className="search-bar">
        <button onClick={showSearch ? handleCancelIconClick : handleSearchIconClick}>
          <i className="search-icon">{showSearch ? '❌' : '🔍'}</i>
        </button>
        {showSearch && (
          <>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search text here..."
            />
            <button className='search-button-go' onClick={handleGoClick}>Go</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;

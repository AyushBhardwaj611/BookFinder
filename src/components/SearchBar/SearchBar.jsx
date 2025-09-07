// SearchBar.jsx
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange, onSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search for a book..."
    />
    <button onClick={onSearch}>Search</button>
  </div>
);

export default SearchBar;

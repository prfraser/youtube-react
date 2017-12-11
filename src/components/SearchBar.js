import React from 'react';
import '../App.css';

const SearchBar = ({ searchTerm, onChange }) => (
  <div className="search-bar">
    <input
      onChange={(event) => onChange(event.target.value)}
      value={searchTerm}/>
  </div>
)

export default SearchBar;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';


export const SearchBar = ({ getSearchQuery, searchQuery, placeholder }) => {
  const [preparePlaceholder, setPreparePlaceholder] = useState('');

  useEffect(() => (
    setPreparePlaceholder(placeholder)
  ), [placeholder])

  return(
    <input
      className="searchBar"
      autoComplete="off"
      name="searchQuery"
      type="text"
      onChange={getSearchQuery}
      value={searchQuery}
      placeholder={preparePlaceholder}
    />
  )
}

SearchBar.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
}

SearchBar.default = {
  searchQuery: '',
}

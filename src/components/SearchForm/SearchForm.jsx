import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  searchForm,
  searchFormWrapper,
  searchFormInput,
  searchFormButton,
} from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  }

  function handleChange({ target }) {
    setQuery(target.value);
  }

  return (
    <form className={searchForm} onSubmit={handleSubmit}>
      <div className={searchFormWrapper}>
        <input
          className={searchFormInput}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Add city to favorites..."
        />
        <button type="submit" className={searchFormButton}>
          &#10010;
        </button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

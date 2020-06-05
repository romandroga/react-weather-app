import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  searchForm,
  searchFormWrapper,
  searchFormInput,
  searchFormButton,
} from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={searchForm} onSubmit={this.handleSubmit}>
        <div className={searchFormWrapper}>
          <input
            className={searchFormInput}
            type="text"
            value={query}
            onChange={this.handleChange}
            placeholder="Add city..."
          />
          <button type="submit" className={searchFormButton}>
            &#9733;
          </button>
        </div>
      </form>
    );
  }
}

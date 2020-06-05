import React, { Component } from 'react';
import { connect } from 'react-redux';
// Utilities
import { fetchWeatherByName } from '../../redux/operations';
import * as actions from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
// Components
import Card from '../../components/Card/Card';
import SearchForm from '../../components/SearchForm/SearchForm';
// Styles
import { gallery } from './HomePage.module.css';

class HomePage extends Component {
  componentDidMount() {
    const { addCities } = this.props;
    const previousCities = JSON.parse(localStorage.getItem('cities'));

    if (!previousCities) return;

    addCities(previousCities);
  }

  componentDidUpdate(prevProps) {
    const { cities, query, onLoad } = this.props;

    localStorage.setItem('cities', JSON.stringify(Array.from(new Set(cities))));

    if (prevProps.query === query) return;

    onLoad(query);
  }

  render() {
    const { cities, onSubmit } = this.props;
    return (
      <>
        <SearchForm onSubmit={onSubmit} />
        <ul className={gallery}>
          {!!cities && cities.map(city => <Card key={uuidv4()} city={city} />)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
  query: state.query,
});

const mapDispatchToProps = {
  onLoad: fetchWeatherByName,
  onSubmit: actions.addQuery,
  addCities: actions.addCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

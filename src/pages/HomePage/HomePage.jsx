import React, { Component } from 'react';
import { fetchWeatherByName } from '../../redux/operations';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
// Components
import Card from '../../components/Card/Card';
import { gallery } from './HomePage.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';

class HomePage extends Component {
  componentDidMount() {
    const previousCities = JSON.parse(localStorage.getItem('cities'));
    if (!!previousCities.length) {
      this.props.addCities(previousCities);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.query !== this.props.state.query) {

      this.props.onLoad(this.props.state.query);

      localStorage.setItem('cities', JSON.stringify(this.props.state.cities));
    }
  }

  render() {
    const { cities } = this.props.state;
    return (
      <>
        <SearchForm onSubmit={this.props.onSubmit} />
        <ul className={gallery}>
          {cities.length !== 0 &&
            cities.map(city => <Card key={city.id} city={city} />)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = {
  onLoad: fetchWeatherByName,
  onSubmit: actions.addQuery,
  addCities: actions.addCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

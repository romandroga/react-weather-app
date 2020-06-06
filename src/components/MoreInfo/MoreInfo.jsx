import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Styles
import {
  card,
  title,
  contentWrapper,
  dataWrapper,
  imageWrapper,
  weatherIcon,
  returnButton,
  bold,
} from './MoreInfo.module.css';

class MoreInfo extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };
  onGoBack = () => {
    const { push } = this.props.history;
    push('/');
  };
  render() {
    const { name, sys, main, clouds, coord, weather } = this.props.data;
    return (
      <>
        {!!this.props.data && (
          <div className={card}>
            <button className={returnButton} onClick={this.onGoBack}>
              &#8592;
            </button>
            <h2 className={title}>
              {name},{sys.country}
            </h2>
            <div className={contentWrapper}>
              <div className={dataWrapper}>
                <p>
                  Temperature:
                  <span className={bold}> {Math.round(main.temp)}°C</span>
                </p>
                <p>
                  Feels like:{' '}
                  <span className={bold}>{Math.round(main.feels_like)}°C</span>
                </p>
                <p>
                  <span>
                    t.max:
                    <span className={bold}> {Math.round(main.temp_max)}°C</span>
                  </span>
                  <span>
                    t.min:
                    <span className={bold}> {Math.round(main.temp_min)}°C</span>
                  </span>
                </p>
                <p>Сloudiness: {clouds.all} %</p>
                <p>Longitude: {coord.lon}°</p>
                <p>Latitude: {coord.lat}°</p>
              </div>

              <div className={imageWrapper}>
                <img
                  className={weatherIcon}
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                  alt="weather"
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(MoreInfo);

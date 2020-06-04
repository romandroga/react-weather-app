import React, { Component } from 'react';
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
import { withRouter } from 'react-router-dom';

class MoreInfo extends Component {
  onGoBack = () => {
    this.props.history.push('/');
  };
  render() {
    const { data } = this.props;
    return (
      <div className={card}>
        <button className={returnButton} onClick={this.onGoBack}>
          &#8592;
        </button>
        <h2 className={title}>
          {data.name},{data.sys.country}
        </h2>
        <div className={contentWrapper}>
          <div className={dataWrapper}>
            <p>
              Temperature:
              <span className={bold}> {Math.round(data.main.temp)}°C</span>
            </p>
            <p>Feels like: <span className={bold}>{Math.round(data.main.feels_like)}°C</span></p>
            <p>
              <span>
                t.max:<span className={bold}> {Math.round(data.main.temp_max)}°C</span>
              </span>
              <span>
                t.min:<span className={bold}> {Math.round(data.main.temp_min)}°C</span>
              </span>
            </p>
            <p>Сloudiness: {data.clouds.all} %</p>
            <p>Longitude: {data.coord.lon}°</p>
            <p>Latitude: {data.coord.lat}°</p>
          </div>

          <div className={imageWrapper}>
            <img
              className={weatherIcon}
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MoreInfo);

//`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`

//cities: [],
//   isLoading: true,
//   query: '',
//   moreInfoData: {
//     coord: {
//       lon: 37.62,
//       lat: 55.75
//     },
//     weather: [
//       {
//         id: 802,
//         main: 'Clouds',
//         description: 'scattered clouds',
//         icon: '03d'
//       }
//     ],
//     base: 'stations',
//     main: {
//       temp: 15.97,
//       feels_like: 13.47,
//       temp_min: 14,
//       temp_max: 17.22,
//       pressure: 1004,
//       humidity: 72
//     },
//     visibility: 10000,
//     wind: {
//       speed: 4,
//       deg: 190
//     },
//     clouds: {
//       all: 43
//     },
//     dt: 1591290154,
//     sys: {
//       type: 1,
//       id: 9029,
//       country: 'RU',
//       sunrise: 1591231814,
//       sunset: 1591293951
//     },
//     timezone: 10800,
//     id: 524901,
//     name: 'Moscow',
//     cod: 200
//   }

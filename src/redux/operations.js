import * as actions from './actions';
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '87cf27700817ed4e92adafa080b190b6';

export const fetchWeatherByName = query => dispatch => {
  dispatch(actions.fetchStart());

  return axios
    .get(
      `${BASE_URL}?q=${query}&appid=${API_KEY}&units=metric`,
    )
    .then(res => {
      dispatch(actions.fetchSuccess(res.data));
    });
};

export const fetchWeatherById = id => dispatch => {
  dispatch(actions.fetchStart());/////
  return axios
    .get(
      `${BASE_URL}?id=${id}&appid=${API_KEY}&units=metric`,
    )
    .then(res => {
      dispatch(actions.moreInfo(res.data));
    });
};


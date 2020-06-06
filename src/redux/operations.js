import axios from 'axios';
import * as actions from './actions';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '87cf27700817ed4e92adafa080b190b6';

export const fetchWeatherByName = query => dispatch => {
  return axios
    .get(`${BASE_URL}?q=${query}&appid=${API_KEY}&units=metric`)
    .then(res => {
      dispatch(actions.fetchSuccess(res.data));
    });
};

export const getRequest = cityName => {
  return axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
};
export const getRequestById = id => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}&units=metric`,
  );
};

export const fetchWeatherById = id => dispatch => {
  return axios
    .get(`${BASE_URL}?id=${id}&appid=${API_KEY}&units=metric`)
    .then(res => {
      dispatch(actions.moreInfo(res.data));
    });
};

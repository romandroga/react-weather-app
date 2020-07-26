import { combineReducers } from 'redux';
import * as actions from './actions';

const citiesReducer = (
  state = ['Minsk', 'Kyiv', 'Kharkiv'],
  { type, payload },
) => {
  switch (type) {
    case actions.ActionTypes.FETCH_SUCCESS:
      if (state.includes(payload.name)) return state;
      return [...state, payload.name];

    case actions.ActionTypes.ADD_CITIES:
      return payload;

    case actions.ActionTypes.DELETE_CARD:
      return state.filter(item => item !== payload);

    default:
      return state;
  }
};

const queryReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actions.ActionTypes.ADD_QUERY:
      return payload;

    default:
      return state;
  }
};

const moreInfoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actions.ActionTypes.MORE_INFO:
      return payload;

    case actions.ActionTypes.MORE_INFO_DIAGRAM:
      const response = payload.data.list.map(elem => {
        return {
          time: elem.dt_txt,
          temperature: Math.floor(elem.main.temp),
        };
      });
      const mappedArray = response.slice(0, 10);

      return { ...state, mappedArray };

    default:
      return state;
  }
};

export default combineReducers({
  cities: citiesReducer,
  query: queryReducer,
  moreInfoData: moreInfoReducer,
});

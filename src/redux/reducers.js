import { combineReducers } from 'redux';
import * as actions from './actions';

const citiesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actions.ActionTypes.FETCH_SUCCESS:
      return Array.from(new Set([...state, payload.name]));

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

const moreInfoReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actions.ActionTypes.MORE_INFO:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  cities: citiesReducer,
  query: queryReducer,
  moreInfoData: moreInfoReducer,
});

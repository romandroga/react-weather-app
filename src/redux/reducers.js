import * as actions from './actions';
import { combineReducers } from 'redux';

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ActionTypes.FETCH_SUCCESS:
      return [...state, action.payload];

    case actions.ActionTypes.ADD_CITIES:
      return action.payload;

    default:
      return state;
  }
};

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case actions.ActionTypes.FETCH_START:
      return true;

    default:
      return state;
  }
};

const queryReducer = (state = '', action) => {
  switch (action.type) {
    case actions.ActionTypes.ADD_QUERY:
      return action.payload;

    default:
      return state;
  }
};

const moreInfoReducer = (state = null, action) => {
  switch (action.type) {
    case actions.ActionTypes.MORE_INFO:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  cities: citiesReducer,
  isLoading: isLoadingReducer,
  query: queryReducer,
  moreInfoData: moreInfoReducer,
});

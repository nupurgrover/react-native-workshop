import { combineReducers } from 'redux';

const basicReducer = (state = {}, action = {}) => state;

const reducers = {
  basicReducer,
};

export default combineReducers(reducers);

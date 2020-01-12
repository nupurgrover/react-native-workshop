import { combineReducers } from 'redux';
import events from '../../features/events/reducer';

const reducers = {
  events,
};

export default combineReducers(reducers);

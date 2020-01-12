import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import eventsMiddleware from '../features/events/middleware';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

const enhancers = [];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware, eventsMiddleware), ...enhancers)
);

export default store;

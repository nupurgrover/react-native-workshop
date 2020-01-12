import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

const enhancers = [];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware), ...enhancers)
);

export default store;

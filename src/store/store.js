import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import apiReducer from './reducers/api';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootReducer = combineReducers({
  api: apiReducer,
  auth: authReducer,
  user: userReducer
});

const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

export default store;
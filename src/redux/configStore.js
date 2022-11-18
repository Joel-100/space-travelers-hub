import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rocket/rockets';

const rootReducer = combineReducers({ rockets: rocketReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

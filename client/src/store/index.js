import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import balanceReducer from '../reducer/balanceReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    balanceReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
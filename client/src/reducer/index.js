import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import lastEntriesReducer from './lastEntriesReducer';

export default combineReducers({
    balance: balanceReducer,
    lastEntries: lastEntriesReducer
})

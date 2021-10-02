import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import lastEntriesReducer from './lastEntriesReducer';
import entriesHistoryReducer from './entriesHistoryReducer';

export default combineReducers({
    balance: balanceReducer,
    lastEntries: lastEntriesReducer,
    entriesHistory: entriesHistoryReducer
})

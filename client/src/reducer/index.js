import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import lastEntriesReducer from './lastEntriesReducer';
import entriesHistoryReducer from './entriesHistoryReducer';
import editEntryReducer from './editEntryReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    balance: balanceReducer,
    lastEntries: lastEntriesReducer,
    entriesHistory: entriesHistoryReducer,
    editingEntry: editEntryReducer,
    categories: categoriesReducer
})

// const axios = require('axios');

function getAddEntries () {
    return function(dispatch) {
        return fetch('http://localhost:3001/entries/aditions')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_ADD', payload: json}))
        .catch(error => console.log(error));
    }
};

function getExtEntries () {
    return function(dispatch) {
        return fetch('http://localhost:3001/entries/extractions')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_EXT', payload: json}))
        .catch(error => console.log(error));
    }
};

function getEditForm (entry) {
    return function(dispatch) {
        try {
            dispatch({type: 'GET_EDENT', payload: entry})
        } catch (e) {
        console.error(e);
        }
    }
};

function updateEntries (params) {    
    return function(dispatch) {
        return fetch(`http://localhost:3001/entries/${params.query}`)
        .then(response => response.json())
        .then(json => dispatch({type: params.type, paryload: json}))
        .catch(error => console.error(error));
    }
};

function getAllCategories () {
    return function(dispatch) {
        return fetch('http://localhost:3001/categories/find/all')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_ALL_CATS', payload: json}))
        .catch(error => console.error(error));
    }
};

function setEntryCategories(categories) {
    return function(dispatch) {
        const cleanCategories = categories.filter(category => category !== undefined);
        return dispatch({type: 'SET_ENTRY_CATS', payload: cleanCategories});
    }
}

function resetEntryCategories() {
    return function(dispatch) {
        return dispatch({type: 'RESET_ENTRY_CATS'});
    }
}

export {
    getAddEntries,
    getExtEntries,
    getEditForm,
    updateEntries,
    getAllCategories,
    setEntryCategories,
    resetEntryCategories,
};
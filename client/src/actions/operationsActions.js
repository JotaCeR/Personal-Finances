// const axios = require('axios');

function getAddEntries () {
    return function(dispatch) {
        return fetch('http://localhost:3001/entries/adition')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_ADD', payload: json}))
        .catch(error => console.log(error));
    }
};

function getExtEntries () {
    return function(dispatch) {
        return fetch('http://localhost:3001/entries/extraction')
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

export {
    getAddEntries,
    getExtEntries,
    getEditForm,
    updateEntries
};
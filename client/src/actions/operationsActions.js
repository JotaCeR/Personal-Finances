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

module.exports = {
    getAddEntries,
    getExtEntries
};
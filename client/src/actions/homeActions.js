function getBalance () {
    return function (dispatch) {
        return fetch('http://localhost:3001/balance')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_BALANCE', payload: json}))
        .catch(error => console.log(error));
    }
};

function getLastEntries () {
    return function (dispatch) {
        return fetch('url')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_LAST', payload: json}))
        .catch(error => console.log(error));
    }
};

module.exports = {
    getBalance,
    getLastEntries
}
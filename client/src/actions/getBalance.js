function getBalance () {
    return function (dispatch) {
        return fetch('http://localhost:3001/balance')
        .then(response => response.json())
        .then(json => dispatch({type: 'GET_BALANCE', payload: json}))
        .catch(error => console.log(error));
    }
}

module.exports = {
    getBalance
}
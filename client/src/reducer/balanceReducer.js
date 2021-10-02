let initialState = {
    totalAditions: 0,
    totalExtractions: 0,
    balance: 0
};

export default function balanceReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_BALANCE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};
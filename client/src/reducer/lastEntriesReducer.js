let initialState = {
    entries: null
};

export default function lastEntriesReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_LAST':
            return {
                ...state,
                entries: action.payload
            }
            default:
                return state;
    }
};
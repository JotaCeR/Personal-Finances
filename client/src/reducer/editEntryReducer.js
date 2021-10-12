let initialState = {
    entry: null
};

export default function editEntryReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_EDENT':
            return {
                ...state,
                entry: action.payload
            }
            default:
                return state;
    }
};
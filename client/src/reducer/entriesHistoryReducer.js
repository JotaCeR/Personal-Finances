let initialState = {
    addEntries: null,
    extEntries: null
};

export default function entriesHistoryReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_ADD':
            return {
                ...state,
                addEntries: action.payload
            }
        case 'GET_EXT':
            return {
                ...state,
                extEntries: action.payload
            }
        default:
            return state
    }
}


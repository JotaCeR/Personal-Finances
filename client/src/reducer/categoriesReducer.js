let initialState = {
    allCategories: null,
    entryCategories: null,
};

export default function categoriesReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_CATS':
            return {
                ...state,
                allCategories: action.payload
            };
        case 'SET_ENTRY_CATS':
            return {
                ...state,
                entryCategories: action.payload
            };
        case 'RESET_ENTRY_CATS':
            return {
                ...state,
                entryCategories: null
            }
        default:
            return state
    }
};
const tagReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TAG':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_TAG':
            return state.filter(tag => tag.id !== action.tagToDeleteID);
        default:
            return state;
    }
}

export default tagReducer;
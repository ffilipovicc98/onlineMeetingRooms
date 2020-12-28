const initialState = {};

const availibaleRoomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return action.payload;
        default:
            break;
    }
};

export default availibaleRoomsReducer;

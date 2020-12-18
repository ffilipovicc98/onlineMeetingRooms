const initalState = {
    userName: undefined,
    roomName: undefined,
    hostName: undefined,
    isCurrentUserHost: undefined,
};

const currentUserReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return { ...state, userName: action.payload };
        case 'SET_ROOM_NAME':
            return { ...state, roomName: action.payload };
        case 'SET_HOST_NAME':
            return { ...state, hostName: action.payload };
        case 'SET_IS_CURRENT_USER_HOST':
            return { ...state, isCurrentUserHost: action.payload };
        default:
            return state;
    }
};

export default currentUserReducer;

const initialState = {
    isUserComingFromHomePage: false,
    isUserComingFromJoinPage: false,
    isUserComingFromRoomPage: false,
    isUserComingFromInvalidPage: false,
    isUserComingFromUrl: false,
};

const userPageHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_USER_COMING_FROM_HOME_PAGE':
            return {
                ...initialState,
                isUserComingFromHomePage: action.payload,
            };
        case 'SET_IS_USER_COMING_FROM_JOIN_PAGE':
            return {
                ...initialState,
                isUserComingFromJoinPage: action.payload,
            };
        case 'SET_IS_USER_COMING_FROM_ROOM_PAGE':
            return {
                ...initialState,
                isUserComingFromRoomPage: action.payload,
            };
        case 'SET_IS_USER_COMING_FROM_INVALID_PAGE':
            return {
                ...initialState,
                isUserComingFromInvalidPage: action.payload,
            };
        case 'SET_IS_USER_COMING_FROM_URL':
            return { ...initialState, isUserComingFromUrl: action.payload };
        default:
            return state;
    }
};

export default userPageHistoryReducer;

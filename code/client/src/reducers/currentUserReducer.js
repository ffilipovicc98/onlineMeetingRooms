const initalState = {
    userName: undefined,
    roomName: undefined,
    roomID: undefined,
    hostName: undefined,
    isCurrentUserHost: false,
    socket: undefined,
    isVideoEnabled: true,
    isAudioEnabled: true,
};

const currentUserReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return { ...state, userName: action.payload };
        case 'SET_ROOM_NAME':
            return { ...state, roomName: action.payload };
        case 'SET_ROOM_ID':
            return { ...state, roomID: action.payload };
        case 'SET_HOST_NAME':
            return { ...state, hostName: action.payload };
        case 'SET_IS_CURRENT_USER_HOST':
            return { ...state, isCurrentUserHost: action.payload };
        case 'SET_USER_SOCKET':
            return { ...state, socket: action.payload };
        case 'TOGGLE_IS_VIDEO_ENABLED':
            return { ...state, isVideoEnabled: !state.isVideoEnabled };
        case 'TOGGLE_IS_AUDIO_ENABLED':
            return { ...state, isAudioEnabled: !state.isAudioEnabled };
        case 'RESET_CURRENT_USER':
            return { ...initalState, socket: state.socket };
        default:
            return state;
    }
};

export default currentUserReducer;

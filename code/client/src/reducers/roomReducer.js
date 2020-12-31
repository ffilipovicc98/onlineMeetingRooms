const initalState = {
    roomID: undefined,
    roomName: undefined,
    hostName: undefined,
    users: [],
    messages: [],
    messageContent: '',
};

const roomReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ROOM_REDUCER_SET_ROOM_ID':
            return { ...state, roomID: action.payload };
        case 'ROOM_REDUCER_SET_ROOM_NAME':
            return { ...state, roomName: action.payload };
        case 'ROOM_REDUCER_SET_HOST_NAME':
            return { ...state, hostName: action.payload };
        case 'ROOM_REDUCER_SET_USERS_ON_JOIN':
            return { ...state, users: Array.from(action.payload) };
        case 'ROOM_REDUCER_ADD_USER':
            return { ...state, users: [...state.users, action.payload] };
        case 'ROOM_REDUCER_REMOVE_USER':
            const users = state.users;
            const newUsers = users.filter(
                (user) => user.userID != action.payload.userID
            );
            return { ...state, users: newUsers };
        case 'ROOM_REDUCER_SET_MESSAGES_ON_JOIN':
            return { ...state, messages: action.payload };
        case 'ROOM_REDUCER_ADD_MESSAGE':
            return { ...state, messages: [...state.messages, action.payload] };
        case 'ROOM_REDUCER_SET_MESSAGE_CONTENT':
            return { ...state, messageContent: action.payload };
        case 'ROOM_REDUCER_OTHER_USER_CHANGED_AUDIO_SETTINGS':
            const newUsersAudioChanged = state.users.map((user) => {
                if (user.userID === action.payload.userID) {
                    user.isAudioEnabled = action.payload.isAudioEnabled;
                }
                return user;
            });
            return { ...state, users: newUsersAudioChanged };
        case 'ROOM_REDUCER_OTHER_USER_CHANGED_VIDEO_SETTINGS':
            const newUsersVideoChanged = state.users.map((user) => {
                if (user.userID === action.payload.userID) {
                    user.isVideoEnabled = action.payload.isVideoEnabled;
                }
                return user;
            });
            return { ...state, users: newUsersVideoChanged };

        case 'ROOM_REDUCER_ADD_PEER_OBJECT_TO_USER':
            const newUsersAddPeer = state.users.map((user) => {
                if (user.peerID === action.payload.peerID) {
                    user.peer = action.payload.peer;
                }
                return user;
            });
            return { ...state, users: newUsersAddPeer };
        case 'ROOM_REDUCER_ADD_STREAM_OBJECT_TO_USER':
            const newUsersAddStream = state.users.map((user) => {
                if (user.peerID === action.payload.peerID) {
                    user.stream = action.payload.stream;
                }
                return user;
            });
            return { ...state, users: newUsersAddStream };
        case 'ROOM_REDUCER_RESET':
            return initalState;

        default:
            return state;
    }
};

export default roomReducer;

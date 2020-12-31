// pageAnimationsReducer

export const resetAllPagesAnimations = () => ({
    type: 'RESET_HOME_PAGE_ANIMATIONS',
});
export const resetHomePageAnimations = () => ({
    type: 'RESET_HOME_PAGE_ANIMATIONS',
});
export const slideRightHomePageOnExit = () => ({
    type: 'SLIDE_RIGHT_HOME_PAGE_ON_EXIT',
});
export const slideRightHomePageOnEnter = () => ({
    type: 'SLIDE_RIGHT_HOME_PAGE_ON_ENTER',
});
export const resetJoinPageAnimations = () => ({
    type: 'RESET_JOIN_PAGE_ANIMATIONS',
});
export const slideRightJoinPageOnExit = () => ({
    type: 'SLIDE_RIGHT_JOIN_PAGE_ON_EXIT',
});
export const slideRightJoinPageOnEnter = () => ({
    type: 'SLIDE_RIGHT_JOIN_PAGE_ON_ENTER',
});
export const resetRoomPageAnimations = () => ({
    type: 'RESET_ROOM_PAGE_ANIMATIONS',
});
export const slideRightRoomPageOnExit = () => ({
    type: 'SLIDE_RIGHT_ROOM_PAGE_ON_EXIT',
});
export const slideRightRoomPageOnEnter = () => ({
    type: 'SLIDE_RIGHT_ROOM_PAGE_ON_ENTER',
});
export const setIsUserSawAnimationsOnHomePage = (value) => ({
    type: 'SET_IS_USER_SAW_ANIMATIONS_ON_HOME_PAGE',
    payload: value,
});

// userPageHistoryReducer

export const setIsUserComingFromHomePage = (value) => ({
    type: 'SET_IS_USER_COMING_FROM_HOME_PAGE',
    payload: value,
});
export const setIsUserComingFromJoinPage = (value) => ({
    type: 'SET_IS_USER_COMING_FROM_JOIN_PAGE',
    payload: value,
});
export const setIsUserComingFromRoomPage = (value) => ({
    type: 'SET_IS_USER_COMING_FROM_ROOM_PAGE',
    payload: value,
});
export const setIsUserComingFromInvalidPage = (value) => ({
    type: 'SET_IS_USER_COMING_FROM_INVALID_PAGE',
    payload: value,
});
export const setIsUserComingFromUrl = (value) => ({
    type: 'SET_IS_USER_COMING_FROM_URL',
    payload: value,
});

// currentUserReducer

export const setUserName = (value) => ({
    type: 'SET_USER_NAME',
    payload: value,
});

export const setRoomName = (value) => ({
    type: 'SET_ROOM_NAME',
    payload: value,
});

export const setRoomID = (value) => ({
    type: 'SET_ROOM_ID',
    payload: value,
});

export const setHostName = (value) => ({
    type: 'SET_HOST_NAME',
    payload: value,
});

export const setIsCurrentUserHost = (value) => ({
    type: 'SET_IS_CURRENT_USER_HOST',
    payload: value,
});

export const setUserSocket = (value) => ({
    type: 'SET_USER_SOCKET',
    payload: value,
});

export const toggleIsVideoEnabled = (value) => ({
    type: 'TOGGLE_IS_VIDEO_ENABLED',
});

export const toggleIsAudioEnabled = (value) => ({
    type: 'TOGGLE_IS_AUDIO_ENABLED',
});

export const setStream = (value) => ({
    type: 'SET_STREAM',
    payload: value,
});

export const setPeer = (value) => ({
    type: 'SET_PEER',
    payload: value,
});

export const setPeerID = (value) => ({
    type: 'SET_PEER_ID',
    payload: value,
});

export const resetCurrentUser = () => ({
    type: 'RESET_CURRENT_USER',
});

// availibaleRooms

export const setCurrentPage = (value) => ({
    type: 'SET_CURRENT_PAGE',
    payload: value,
});

// roomReducer

export const roomReducerSetRoomID = (value) => ({
    type: 'ROOM_REDUCER_SET_ROOM_ID',
    payload: value,
});

export const roomReducerSetRoomName = (value) => ({
    type: 'ROOM_REDUCER_SET_ROOM_NAME',
    payload: value,
});

export const roomReducerSetHostName = (value) => ({
    type: 'ROOM_REDUCER_SET_HOST_NAME',
    payload: value,
});

export const roomReducerSetUsersOnJoin = (value) => ({
    type: 'ROOM_REDUCER_SET_USERS_ON_JOIN',
    payload: value,
});

export const roomReducerAddUser = (value) => ({
    type: 'ROOM_REDUCER_ADD_USER',
    payload: value,
});

export const roomReducerRemoveUser = (value) => ({
    type: 'ROOM_REDUCER_REMOVE_USER',
    payload: value,
});

export const roomReducerSetMessagesOnJoin = (value) => ({
    type: 'ROOM_REDUCER_SET_MESSAGES_ON_JOIN',
    payload: value,
});

export const roomReducerAddMessage = (value) => ({
    type: 'ROOM_REDUCER_ADD_MESSAGE',
    payload: value,
});

export const roomReducerSetMessageContent = (value) => ({
    type: 'ROOM_REDUCER_SET_MESSAGE_CONTENT',
    payload: value,
});

export const roomReducerOtherUserChangedAudioSettings = (value) => ({
    type: 'ROOM_REDUCER_OTHER_USER_CHANGED_AUDIO_SETTINGS',
    payload: value,
});

export const roomReducerOtherUserChangedVideoSettings = (value) => ({
    type: 'ROOM_REDUCER_OTHER_USER_CHANGED_VIDEO_SETTINGS',
    payload: value,
});

export const roomReducerAddPeerObjectToUser = (value) => ({
    type: 'ROOM_REDUCER_ADD_PEER_OBJECT_TO_USER',
    payload: value,
});

export const roomReducerAddStreamObjectToUser = (value) => ({
    type: 'ROOM_REDUCER_ADD_STREAM_OBJECT_TO_USER',
    payload: value,
});

export const roomReducerReset = (value) => ({
    type: 'ROOM_REDUCER_RESET',
    payload: value,
});

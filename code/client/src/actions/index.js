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

export const setHostName = (value) => ({
    type: 'SET_HOST_NAME',
    payload: value,
});

export const setIsCurrentUserHost = (value) => ({
    type: 'SET_IS_CURRENT_USER_HOST',
    payload: value,
});

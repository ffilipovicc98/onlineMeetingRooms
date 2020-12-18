const springType = {
    type: 'spring',
    bounce: 0,
    duration: 1,
    restDelta: 0.005,
};

const initialVariants = {
    initialState: {
        x: '100vw',
        transition: springType,
    },
    animateState: {
        x: '0',
        transition: springType,
    },
    exitState: {
        x: '-100vw',
        transition: springType,
    },
};

const pageAnimationsReducer = (
    state = {
        homePageVariants: initialVariants,
        joinPageVariants: initialVariants,
        roomPageVariants: initialVariants,
        isUserSawAnimationsOnHomePage: false,
    },
    action
) => {
    switch (action.type) {
        case 'RESET_ALL_PAGES_ANIMATIONS':
            return {
                ...state,
                homePageVariants: initialVariants,
                joinPageVariants: initialVariants,
                roomPageVariants: initialVariants,
            };
        case 'RESET_HOME_PAGE_ANIMATIONS':
            return {
                ...state,
                homePageVariants: initialVariants,
            };
        case 'SLIDE_RIGHT_HOME_PAGE_ON_EXIT':
            return {
                ...state,
                homePageVariants: {
                    ...state.homePageVariants,
                    exitState: { x: '100vw', transition: springType },
                },
            };
        case 'SLIDE_RIGHT_HOME_PAGE_ON_ENTER':
            return {
                ...state,
                homePageVariants: {
                    ...state.homePageVariants,
                    initialState: { x: '-100vw', transition: springType },
                },
            };

        case 'RESET_JOIN_PAGE_ANIMATIONS':
            return {
                ...state,
                joinPageVariants: initialVariants,
            };

        case 'SLIDE_RIGHT_JOIN_PAGE_ON_EXIT':
            return {
                ...state,
                joinPageVariants: {
                    ...state.joinPageVariants,
                    exitState: { x: '100vw', transition: springType },
                },
            };
        case 'SLIDE_RIGHT_JOIN_PAGE_ON_ENTER':
            return {
                ...state,
                joinPageVariants: {
                    ...state.joinPageVariants,
                    initialState: { x: '-100vw', transition: springType },
                },
            };

        case 'RESET_ROOM_PAGE_ANIMATIONS':
            return {
                ...state,
                roomPageVariants: initialVariants,
            };

        case 'SLIDE_RIGHT_ROOM_PAGE_ON_EXIT':
            return {
                ...state,
                roomPageVariants: {
                    ...state.roomPageVariants,
                    exitState: { x: '100vw', transition: springType },
                },
            };
        case 'SLIDE_RIGHT_ROOM_PAGE_ON_ENTER':
            return {
                ...state,
                roomPageVariants: {
                    ...state.roomPageVariants,
                    initialState: { x: '-100vw', transition: springType },
                },
            };
        case 'SET_IS_USER_SAW_ANIMATIONS_ON_HOME_PAGE':
            return {
                ...state,
                isUserSawAnimationsOnHomePage: action.payload,
            };
        default:
            return state;
    }
};

export default pageAnimationsReducer;

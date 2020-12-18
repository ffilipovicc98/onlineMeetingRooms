import './App.css';
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import JoinPage from './components/JoinPage/JoinPage';
import RoomPage from './components/RoomPage/RoomPage';
import { AnimatePresence, useAnimation } from 'framer-motion';
import PageContainer from './components/PageContainer/PageContainer';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { usePageAnimations } from './components/PageAnimationsContext/PageAnimationsContext';
import {
    resetPageAnimations,
    slideRightOnExit,
    slideRightOnEnter,
    setIsUserComingFromHomePage,
    setIsUserComingFromJoinPage,
    setIsUserComingFromRoomPage,
    setIsUserComingFromInvalidPage,
    setIsUserComingFromUrl,
    setRoomName,
} from './actions';
import { useSelector, useDispatch } from 'react-redux';

const springType = {
    type: 'spring',
    bounce: 0,
    duration: 1,
    restDelta: 0.005,
};

// const shouldRedirectToHomePage = (currentUserLocation) => {
//     const isUserComingToJoinPage = currentUserLocation.pathname === '/join';
//     const isUserComingFromPageWhichDidntSetStateRoomName =
//         currentUserLocation.state === undefined ||
//         currentUserLocation.state.roomName === undefined ||
//         (currentUserLocation.state.roomName !== undefined &&
//             currentUserLocation.state.roomName === '');
//     // TODO isRoomAvailibaleOnTheServer
//     return (
//         isUserComingToJoinPage && isUserComingFromPageWhichDidntSetStateRoomName
//         /*&& isRoomAvailibaleOnTheServer */
//     );
// };

const shouldRedirectToHomePage = (
    currentUserLocation,
    history,
    currentUser,
    dispatch
) => {
    const { userName, roomName } = currentUser;
    const isUserComingToJoinPage = currentUserLocation.pathname === '/join';
    const isUserComingFromPageWhichDidntSetStateRoomName =
        roomName === undefined || roomName === '';
    const shouldRedirectToHomePage =
        isUserComingToJoinPage &&
        isUserComingFromPageWhichDidntSetStateRoomName;
    /*&& isRoomAvailibaleOnTheServer */
    // debugger;
    if (shouldRedirectToHomePage) {
        console.log('shouldRedirectToHomePage');
        dispatch(setIsUserComingFromInvalidPage(true));
        history.push({ pathname: '/' });
    }

    return shouldRedirectToHomePage;
};

const shouldRedirectToJoinPage = (
    currentUserLocation,
    history,
    currentUser,
    dispatch
) => {
    const { userName, roomName } = currentUser;
    const pom = currentUserLocation.pathname.split('/');
    const isUserComingToRoomPage = pom[1] === 'rooms';
    const isUserComingFromPageWhichDidntSetStateRoomName =
        roomName === undefined;
    const shouldRedirectToJoinPage =
        isUserComingToRoomPage &&
        isUserComingFromPageWhichDidntSetStateRoomName;
    // debugger;
    if (shouldRedirectToJoinPage) {
        const roomName = pom[2];
        dispatch(setRoomName(roomName));
        dispatch(setIsUserComingFromUrl(true));
        history.push({ pathname: '/join' });
    }
    return shouldRedirectToJoinPage;
};

const StyledApp = styled.div`
    background-color: #fff;
    position: relative;
    height: 100%;
`;

const App = () => {
    let location = useLocation();
    let history = useHistory();

    const currentUser = useSelector((state) => state.currentUserReducer);
    const userPageHistory = useSelector(
        (state) => state.userPageHistoryReducer,
        () => true // prevent rerender on updates of state.userPageHistoryReducer
    );
    const dispatch = useDispatch();

    // // if HomePage is loading for the first time
    // if (
    //     location.pathname === '/' &&
    //     !location.state?.isUserSeeAnimationsOnHomePage
    // ) {
    //     pageAnimationsContextObject.setVariantsForFirstVisit();
    // }

    // // If user is on '/rooms/:roomName' page, slide left on exit
    // if (location.pathname.split('/')[1] === 'rooms') {
    //     pageAnimationsContextObject.setVariantsForSlidingLeftExit();
    // }

    // // if user is transitioning from '/rooms/:roomName' page to '/' page
    // if (
    //     location.pathname === '/' &&
    //     (userPageHistory.isUserComingFromJoinPage ||
    //         userPageHistory.isUserComingFromRoomPage)
    // ) {
    //     dispatch(slideRightOnEnter());
    // }
    shouldRedirectToHomePage(location, history, currentUser, dispatch);
    shouldRedirectToJoinPage(location, history, currentUser, dispatch);
    return (
        <StyledApp>
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route
                        exact
                        path='/'
                        render={(routeProps) => (
                            <PageContainer
                                pageName='Home'
                                key={routeProps.location.pathname}
                            >
                                <HomePage {...routeProps} />
                            </PageContainer>
                        )}
                    />
                    <Route
                        exact
                        path='/join'
                        render={(routeProps) => (
                            <PageContainer
                                pageName='Join'
                                key={routeProps.location.pathname}
                            >
                                <JoinPage {...routeProps} />
                            </PageContainer>
                        )}
                    />
                    <Route
                        exact
                        path='/rooms/:roomName'
                        render={(routeProps) => {
                            return (
                                <PageContainer
                                    pageName='Room'
                                    key={routeProps.location.pathname}
                                >
                                    <RoomPage {...routeProps} />
                                </PageContainer>
                            );
                        }}
                    />
                    {(() => {
                        // console.log('cao');
                        // dispatch(setIsUserComingFromInvalidPage(true));
                        return <Redirect to={{ pathname: '/' }} />;
                    })()}
                </Switch>
            </AnimatePresence>
        </StyledApp>
    );
};

export default App;

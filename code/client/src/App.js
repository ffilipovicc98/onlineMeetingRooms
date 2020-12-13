import './App.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import JoinPage from './components/JoinPage/JoinPage';
import RoomPage from './components/RoomPage/RoomPage';
import { AnimatePresence, useAnimation } from 'framer-motion';
import PageContainer from './components/PageContainer/PageContainer';
import { useContext } from 'react';
import styled from 'styled-components';
import { usePageAnimations } from './components/PageAnimationsContext/PageAnimationsContext';

const springType = {
    type: 'spring',
    bounce: 0,
    duration: 1,
    restDelta: 0.005,
};

const shouldRedirectToHomePage = (currentUserLocation) => {
    const isUserComingToJoinPage = currentUserLocation.pathname === '/join';
    const isUserComingFromPageWhichDidntSetStateRoomName =
        currentUserLocation.state === undefined ||
        currentUserLocation.state.roomName === undefined ||
        (currentUserLocation.state.roomName !== undefined &&
            currentUserLocation.state.roomName === '');
    // TODO isRoomAvailibaleOnTheServer
    return (
        isUserComingToJoinPage && isUserComingFromPageWhichDidntSetStateRoomName
        /*&& isRoomAvailibaleOnTheServer */
    );
};

const shouldRedirectToJoinPage = (currentUserLocation) => {
    const isUserComingToRoomPage =
        currentUserLocation.pathname.split('/')[1] === 'rooms';
    const isUserComingFromPageWhichDidntSetStateRoomName =
        currentUserLocation.state === undefined ||
        currentUserLocation.state.roomName === undefined;

    return (
        isUserComingToRoomPage && isUserComingFromPageWhichDidntSetStateRoomName
    );
};

const StyledApp = styled.div`
    background-color: #fff;
    position: relative;
    height: 100%;
`;

const App = () => {
    const location = useLocation();
    const pageAnimationsContextObject = usePageAnimations();
    pageAnimationsContextObject.resetVariants();

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
    //     (location.state.isUserComingFromJoinPage ||
    //         location.state?.isUserComingFromRoomPage)
    // ) {
    //     pageAnimationsContextObject.setVariantsForSlidingLeftInitialAnimate();
    // }

    return (
        <StyledApp>
            {shouldRedirectToHomePage(location) ? (
                <Redirect
                    to={{
                        pathname: '/',
                        state: {
                            roomName: undefined,
                            hostName: undefined,
                            userName: undefined,
                            isUserHost: undefined,
                            isUserSeeAnimationsOnHomePage:
                                location.isUserSeeAnimationsOnHomePage,
                            isUserComingFromHomePage: false,
                            isUserComingFromJoinPage: false,
                            isUserComingFromRoomPage: false,
                            isUserComingFromInvalidPage: true,
                            isUserComingFromUrl: false,
                        },
                    }}
                />
            ) : shouldRedirectToJoinPage(location) ? (
                <Redirect
                    to={{
                        pathname: '/join',
                        state: {
                            roomName: location.pathname.split('/')[2],
                            hostName: undefined,
                            userName: undefined,
                            isUserHost: false,
                            // isUserSeeAnimationsOnHomePage:
                            // location.state.isUserSeeAnimationsOnHomePage,
                            isUserComingFromHomePage: false,
                            isUserComingFromJoinPage: false,
                            isUserComingFromRoomPage: false,
                            isUserComingFromInvalidPage: false,
                            isUserComingFromUrl: true,
                        },
                    }}
                />
            ) : (
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route
                            exact
                            path='/'
                            render={(routeProps) => (
                                <PageContainer
                                    variantsForAnimatingPages={
                                        pageAnimationsContextObject.variants
                                    }
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
                                    variantsForAnimatingPages={
                                        pageAnimationsContextObject.variants
                                    }
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
                                        variantsForAnimatingPages={
                                            pageAnimationsContextObject.variants
                                        }
                                        key={routeProps.location.pathname}
                                    >
                                        <RoomPage {...routeProps} />
                                    </PageContainer>
                                );
                            }}
                        />
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    roomName: undefined,
                                    hostName: undefined,
                                    userName: undefined,
                                    isUserHost: undefined,
                                    // isUserSeeAnimationsOnHomePage:
                                    // location.state
                                    // .isUserSeeAnimationsOnHomePage,
                                    isUserComingFromHomePage: false,
                                    isUserComingFromJoinPage: false,
                                    isUserComingFromRoomPage: false,
                                    isUserComingFromInvalidPage: true,
                                    isUserComingFromUrl: false,
                                },
                            }}
                        />
                    </Switch>
                </AnimatePresence>
            )}
        </StyledApp>
    );
};

export default App;

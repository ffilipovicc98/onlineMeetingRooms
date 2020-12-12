import './App.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import JoinPage from './components/JoinPage/JoinPage';
import RoomPage from './components/RoomPage/RoomPage';
import { AnimatePresence, useAnimation } from 'framer-motion';
import PageContainer from './components/PageContainer/PageContainer';
import { useEffect } from 'react';

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

const App = () => {
    const location = useLocation();

    const variantsForAnimatingPages = {
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

    // if HomePage is loading for the first time
    if (location.pathname === '/' && location.state === undefined) {
        variantsForAnimatingPages.initialState = {
            transition: springType,
        };
        variantsForAnimatingPages.animateState = {
            transition: {
                ...springType,
                duration: 0.2,
                delayChildren: 0.2,
            },
        };
    }

    // If user is on '/rooms/:roomName' page, slide left on exit
    if (location.pathname.split('/')[1] === 'rooms') {
        variantsForAnimatingPages.exitState = {
            x: '100vw',
            transition: springType,
        };
    }

    // if user is transitioning from '/rooms/:roomName' page to '/' page
    if (
        location.pathname === '/' &&
        location.state !== undefined &&
        location.state.roomName !== undefined
    ) {
        variantsForAnimatingPages.initialState = {
            x: '-100vw',
            transition: springType,
        };
        variantsForAnimatingPages.animateState = {
            x: '0',
            transition: springType,
        };
    }

    return (
        <div className='App'>
            {shouldRedirectToHomePage(location) ? (
                <Redirect to={{ pathname: '/', state: undefined }} />
            ) : shouldRedirectToJoinPage(location) ? (
                <Redirect
                    to={{
                        pathname: '/join',
                        state: {
                            ...location.state,
                            roomName: location.pathname.split('/')[2],
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
                                        variantsForAnimatingPages
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
                                        variantsForAnimatingPages
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
                                            variantsForAnimatingPages
                                        }
                                        key={routeProps.location.pathname}
                                    >
                                        <RoomPage {...routeProps} />
                                    </PageContainer>
                                );
                            }}
                        />
                        <Redirect to='/' />
                    </Switch>
                </AnimatePresence>
            )}
        </div>
    );
};

export default App;

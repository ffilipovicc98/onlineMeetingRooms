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
    setUserSocket,
    roomReducerSetRoomName,
    roomReducerSetRoomID,
    roomReducerSetHostName,
    roomReducerSetMessagesOnJoin,
    roomReducerSetUsersOnJoin,
    setHostName,
    setRoomID,
    roomReducerAddUser,
    roomReducerRemoveUser,
    roomReducerAddMessage,
    setPeer,
    setPeerID,
    roomReducerOtherUserChangedAudioSettings,
    roomReducerOtherUserChangedVideoSettings,
    roomReducerAddPeerObjectToUser,
    roomReducerAddStreamObjectToUser,
} from './actions';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import roomReducer from './reducers/roomReducer';
import Peer from 'peerjs';

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
        const roomID = pom[2];
        fetch(`${process.env.REACT_APP_API_URL}/rooms/${roomID}`)
            .then((response) => response.json())
            .then(({ roomName, hostName }) => {
                dispatch(setRoomName(roomName));
                dispatch(setHostName(hostName));
                dispatch(setRoomID(roomID));
                history.push({ pathname: '/join' });
            })
            .catch((err) => {
                throw new Error('Greska shouldRedirectToJoinPage');
            });
        dispatch(setIsUserComingFromUrl(true));
        // history.push({ pathname: '/join' });
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

    useEffect(() => {
        const peer = new Peer();
        peer.on('open', (currentUserPeerID) => {
            dispatch(setPeerID(currentUserPeerID));
        });
        dispatch(setPeer(peer));

        const socket = io(process.env.REACT_APP_API_URL);

        socket.on('roomInfoOnJoin', (room) => {
            dispatch(roomReducerSetRoomName(room.roomName));
            dispatch(roomReducerSetRoomID(room.roomID));
            dispatch(roomReducerSetHostName(room.hostName));
            dispatch(roomReducerSetMessagesOnJoin(room.messages));
            dispatch(roomReducerSetUsersOnJoin(room.users));
        });

        socket.on('userLeft', (user) => {
            const { userName, userID, isHost } = user;
            dispatch(roomReducerRemoveUser(user));
        });

        socket.on('meetingEnded', () => {
            alert('Meeting ended!');
        });

        socket.on('sendMessageToUsersInRoom', (message) => {
            dispatch(roomReducerAddMessage(message));
        });

        socket.on(
            'otherUserChangedAudioSettings',
            ({ userID, isAudioEnabled }) => {
                dispatch(
                    roomReducerOtherUserChangedAudioSettings({
                        userID,
                        isAudioEnabled,
                    })
                );
            }
        );

        socket.on(
            'otherUserChangedVideoSettings',
            ({ userID, isVideoEnabled }) => {
                dispatch(
                    roomReducerOtherUserChangedVideoSettings({
                        userID,
                        isVideoEnabled,
                    })
                );
            }
        );

        dispatch(setUserSocket(socket));

        return () => {
            // currentUser.socket.emit('disconnect');
            currentUser.socket.off();
        };
    }, []);

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

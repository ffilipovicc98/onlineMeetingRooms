import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import RoomNameAndHostText from '../RoomNameAndHostText/RoomNameAndHostText';
import RoomPageBlob from './RoomPageBlob.svg';
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';
import { FaVideo, FaVideoSlash } from 'react-icons/fa';
import StateButton from '../StateButton/StateButton';
import SimpleButton from '../SimpleButton/SimpleButton';
import { BsPlus } from 'react-icons/bs';
import { motion } from 'framer-motion';
import VideoGrid from '../VideoGrid/VideoGrid';
import CircleNameInitials from '../CircleNameInitials/CircleNameInitials';
import SectionWithBoxAndTextOver from '../SectionWithBoxAndTextOver/SectionWithBoxAndTextOver';
import Chat from '../Chat/Chat';
import { useDispatch, useSelector } from 'react-redux';
import {
    setIsUserComingFromRoomPage,
    resetRoomPageAnimations,
    slideRightRoomPageOnExit,
    slideRightHomePageOnEnter,
    resetCurrentUser,
    toggleIsVideoEnabled,
    toggleIsAudioEnabled,
} from './../../actions';
import currentUserReducer from '../../reducers/currentUserReducer';

const StyledRoomPage = styled.div`
    --right_part_width: 450px;
    --left_part_width: calc(100% - var(--right_part_width));

    height: 100%;
    width: 100%;
    padding: 0px 20px;
    background: url(${RoomPageBlob}) bottom -140px left 0px no-repeat #fff;
    /* background-size: 90% 90%; */

    display: flex;
    justify-content: center;
`;

const LeftPart = styled.div`
    /* background-color: #99afd2; */
    /* border: 3px blue solid; */
    opacity: 1;
    width: var(--left_part_width);
    margin-top: 120px;
    height: calc(100% - 120px);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

const StyledRoomNameAndHostText = styled(RoomNameAndHostText)`
    position: fixed;
    top: 10px;
    left: 20px;
`;

const RightPart = styled.div`
    /* background-color: #adc222; */
    /* opacity: 0.5; */
    width: var(--right_part_width);
    height: 100%;
`;

const ButtonsSection = styled.section`
    /* border: 5px solid #f82f8a; */

    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonsBox = styled.div`
    /* border: 5px solid #11a1ee; */
    opacity: 1;

    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CircleButton = styled(SimpleButton)`
    border-radius: 100%;
`;

const IconSpan = styled.span`
    /* background-color: #667; */

    width: 40px;
    height: 40px;

    font-size: 1.7em;
    transform: rotateZ(45deg);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserElementContainer = styled(motion.div)`
    /* border: solid 3px paleturquoise; */
    margin: 15px 0;
    padding: 7px 10px;

    border-radius: 3px;

    box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.15);

    background-color: #f9f9f9;
    color: #2b517f;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    cursor: grab;

    :active {
        cursor: grabbing;
    }
`;

const UserElementText = styled.p`
    padding-left: 10px;
    flex-grow: 1;
`;

const UserElementIcons = styled.div`
    /* background-color: #9af; */
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-end;
`;

const UserElementIconSpan = styled.span`
    /* background-color: ${(props) =>
        props.isEnabled ? '#08af07' : '#e73a38'}; */
    color: ${(props) => (props.isEnabled ? '#08af07' : '#e73a38')};
    border: solid 1px ${(props) => (props.isEnabled ? '#08af07' : '#e73a38')};
    border-radius: 50px;
    padding: 7px;
    margin: 0px 3px;
    width: 30px;
    height: 30px;

    font-size: 0.9em;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const RoomPage = () => {
    const currentUser = useSelector((state) => state.currentUserReducer);
    const roomReducer = useSelector((state) => state.roomReducer);

    const history = useHistory();

    const dispatch = useDispatch();
    const users = roomReducer.users ? roomReducer.users : [];

    // const people = [
    // { userName: userName, userID: 1 },
    // { userName: hostName, userID: 2 },
    // { userName: 'Petar Mitic', userID: 3 },
    // { userName: 'Miskovic Milenko', userID: 4 },
    // { userName: 'goxxy92', userID: 5 },
    // { userName: 'Ana Peric', userID: 6 },
    // { userName: 'Dragana Perisic', userID: 7 },
    // { userName: 'Mitrovic Petar', userID: 8 },
    // { userName: 'Dunja Dunjic', userID: 9 },
    // { userName: 'Marija Okanovic', userID: 10 },
    // { userName: 'Stanko Stanic', userID: 11 },
    // { userName: 'Filip Tasic', userID: 12 },
    // { userName: 'Mirkovic', userID: 13 },
    // { userName: 'Marko Markovic Mare', userID: 14 },
    // { userName: 'Petar Mitic', userID: 15 },
    // { userName: 'Milica Milic', userID: 16 },
    // ];

    return (
        <StyledRoomPage>
            <StyledRoomNameAndHostText />
            <LeftPart>
                <VideoGrid users={users} />
            </LeftPart>
            <RightPart>
                <ButtonsSection>
                    <ButtonsBox>
                        <StateButton
                            isOn={currentUser.isAudioEnabled}
                            buttonWidth='100px'
                            buttonHeight='40px'
                            onTextBackgroundColor='#42c408'
                            offTextBackgroundColor='#ef5350'
                            onIconBackgroundColor='#08af07'
                            offIconBackgroundColor='#e73a38'
                            borderTopLeftRadius='3px'
                            borderTopRightRadius='3px'
                            borderBottomLeftRadius='3px'
                            borderBottomRightRadius='3px'
                            onClickCallback={() => {
                                currentUser.socket.emit(
                                    'audioSettingsChanged',
                                    { value: !currentUser.isAudioEnabled }
                                );
                                dispatch(toggleIsAudioEnabled());
                            }}
                            onText='Unmuted'
                            offText='Muted'
                            onIconCompoentGenerator={(props) => (
                                <BsFillMicFill />
                            )}
                            offIconCompoentGenerator={(props) => (
                                <BsFillMicMuteFill />
                            )}
                        />

                        <StateButton
                            isOn={currentUser.isVideoEnabled}
                            buttonWidth='140px'
                            buttonHeight='40px'
                            onTextBackgroundColor='#42c408'
                            offTextBackgroundColor='#ef5350'
                            onIconBackgroundColor='#08af07'
                            offIconBackgroundColor='#e73a38'
                            borderTopLeftRadius='3px'
                            borderTopRightRadius='3px'
                            borderBottomLeftRadius='3px'
                            borderBottomRightRadius='3px'
                            onClickCallback={() => {
                                currentUser.socket.emit(
                                    'videoSettingsChanged',
                                    { value: !currentUser.isVideoEnabled }
                                );
                                dispatch(toggleIsVideoEnabled());
                            }}
                            onText='Video Enabled'
                            offText='Video Disabled'
                            onIconCompoentGenerator={(props) => <FaVideo />}
                            offIconCompoentGenerator={(props) => (
                                <FaVideoSlash />
                            )}
                        />

                        <CircleButton
                            buttonWidth='40px'
                            buttonHeight='40px'
                            backgroundColor='#ef5350'
                            onClickCallback={() => {
                                dispatch(setIsUserComingFromRoomPage(true));
                                dispatch(slideRightRoomPageOnExit());
                                dispatch(slideRightHomePageOnEnter());
                                dispatch(resetCurrentUser());
                                currentUser.socket.emit('leave');
                                history.push({ pathname: '/' });
                            }}
                        >
                            <IconSpan>
                                <BsPlus />
                            </IconSpan>
                        </CircleButton>
                    </ButtonsBox>
                </ButtonsSection>
                <SectionWithBoxAndTextOver
                    textOver='Online People'
                    sectionWidth='100%'
                    sectionHeight='400px'
                >
                    {users.map((user) => (
                        <UserElementContainer
                            key={user.userID}
                            whileHover={{
                                // scale: 1.03,
                                scale: 0.97,
                                transition: {
                                    type: 'spring',
                                    bounce: 0.7,
                                    duration: 0.5,
                                },
                            }}
                            whileTap={{ scale: 0.94 }}
                            drag='x'
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.1}
                        >
                            <CircleNameInitials name={user.userName} />
                            <UserElementText>{user.userName}</UserElementText>
                            <UserElementIcons>
                                <UserElementIconSpan
                                    isEnabled={user.isAudioEnabled}
                                >
                                    {user.isAudioEnabled ? (
                                        <BsFillMicFill />
                                    ) : (
                                        <BsFillMicMuteFill />
                                    )}
                                </UserElementIconSpan>
                                <UserElementIconSpan
                                    isEnabled={user.isVideoEnabled}
                                >
                                    {user.isVideoEnabled ? (
                                        <FaVideo />
                                    ) : (
                                        <FaVideoSlash />
                                    )}
                                </UserElementIconSpan>
                            </UserElementIcons>
                        </UserElementContainer>
                    ))}
                </SectionWithBoxAndTextOver>
                <SectionWithBoxAndTextOver
                    textOver='Chat'
                    sectionWidth='100%'
                    sectionHeight='450px'
                >
                    <Chat />
                </SectionWithBoxAndTextOver>
            </RightPart>
        </StyledRoomPage>
    );
};

/*******************************************************************/

/*******************************************************************/

const ChatSection = styled.section`
    background-color: orange;
    opacity: 0.5;
    width: 100%;
    height: 400px;
`;

export default RoomPage;

{
    /* <button
                className='myButton'
                onClick={() =>
                    history.push({
                        pathname: '/',
                        state: {
                            roomName: undefined,
                            hostName: undefined,
                            userName: undefined,
                            isUserHost: undefined,
                            isUserSeeAnimationsOnHomePage:
                                history.location.state
                                    .isUserSeeAnimationsOnHomePage,
                            isUserComingFromHomePage: false,
                            isUserComingFromJoinPage: false,
                            isUserComingFromRoomPage: true,
                        },
                    })
                }
            >
                Nazad
            </button> */
}

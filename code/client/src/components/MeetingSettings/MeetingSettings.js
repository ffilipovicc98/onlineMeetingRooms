import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import InputBox from '../InputBox/InputBox';
import SimpleButton from '../SimpleButton/SimpleButton';
import {
    BsArrowRightShort,
    BsFillMicFill,
    BsFillMicMuteFill,
} from 'react-icons/bs';
import { FaVideo, FaVideoSlash } from 'react-icons/fa';
import StateButton from '../StateButton/StateButton';
import { useDispatch, useSelector } from 'react-redux';
import {
    setHostName,
    setIsUserComingFromJoinPage,
    setUserName,
    toggleIsAudioEnabled,
    toggleIsVideoEnabled,
} from './../../actions';

const Container = styled.div`
    --container_width: 1000px;
    --container_height: 680px;

    --video_preview_width: var(--container_width);
    --video_preview_height: calc(9 / 16 * var(--video_preview_width));

    --settings_row_width: 100%;
    --settings_row_height: calc(100% - var(--video_preview_height));

    --buttons_and_input_height: 42px;

    background-color: #f9f9f9;

    width: var(--container_width);
    height: var(--container_height);

    overflow: hidden;
    border-radius: 7px;
    border: solid 1px #3182ce;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
`;

const VideoPreviewBox = styled.div`
    background-color: #444;

    width: var(--video_preview_width);
    height: var(--video_preview_height);

    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.3);
`;

const VideoPreview = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SettingsRow = styled.div`
    /* background-color: #575; */
    width: var(--settings_row_width);
    height: var(--settings_row_height);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Settings = styled.div`
    /* background-color: #abaaa9; */
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const JoinButton = styled(SimpleButton)`
    display: flex;
    justify-content: center;
    align-items: center;

    /* box-shadow: 3px 2px 3px 1px rgba(0, 0, 0, 0.2); */
`;

const IconSpan = styled.span`
    /* background-color: #667; */

    width: 22px;
    height: 22px;

    font-size: 1.5em;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MeetingSettings = (props) => {
    const history = useHistory();
    const { roomName, hostName } = props;

    const currentUser = useSelector((state) => state.currentUserReducer);

    const dispatch = useDispatch();
    const videoPreviewRef = useRef(null);
    let isStreamReady = false;

    useEffect(() => {
        if (!currentUser.isVideoEnabled) {
            return;
        }
        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                videoPreviewRef.current.srcObject = stream;
                isStreamReady = true;
                // video.addEventListener('loadedmetadata', () => {
                //     video.play();
                // });
            })
            .catch((error) => console.log('Camera not found.', error));
        return () => {};
    }, [currentUser.isVideoEnabled]);

    return (
        <Container>
            <VideoPreviewBox>
                {currentUser.isVideoEnabled && (
                    <VideoPreview
                        ref={videoPreviewRef}
                        onLoadedMetadata={() => {
                            isStreamReady && videoPreviewRef.current.play();
                        }}
                    />
                )}
            </VideoPreviewBox>
            <SettingsRow>
                <Settings>
                    <InputBox
                        // inputWrapperWidth='100px'
                        // inputWrapperHeight='40px'
                        inputBoxWidth='200px'
                        inputBoxHeight='var(--buttons_and_input_height)'
                        inputPlaceHolder='Enter your name'
                        textOverInput='Your Name'
                        textOverInputSize='.85em'
                        onChangeCallback={(event) => {
                            dispatch(setUserName(event.currentTarget.value));
                            if (currentUser.isCurrentUserHost) {
                                dispatch(
                                    setHostName(event.currentTarget.value)
                                );
                            }
                        }}
                    />

                    <StateButton
                        isOn={currentUser.isAudioEnabled}
                        buttonWidth='100px'
                        buttonHeight='var(--buttons_and_input_height)'
                        onTextBackgroundColor='#42c408'
                        offTextBackgroundColor='#ef5350'
                        onIconBackgroundColor='#08af07'
                        offIconBackgroundColor='#e73a38'
                        borderTopLeftRadius='3px'
                        borderTopRightRadius='3px'
                        borderBottomLeftRadius='3px'
                        borderBottomRightRadius='3px'
                        onClickCallback={() => {
                            dispatch(toggleIsAudioEnabled());
                        }}
                        onText='Unmuted'
                        offText='Muted'
                        onIconCompoentGenerator={(props) => <BsFillMicFill />}
                        offIconCompoentGenerator={(props) => (
                            <BsFillMicMuteFill />
                        )}
                    />

                    <StateButton
                        isOn={currentUser.isVideoEnabled}
                        buttonWidth='140px'
                        buttonHeight='var(--buttons_and_input_height)'
                        onTextBackgroundColor='#42c408'
                        offTextBackgroundColor='#ef5350'
                        onIconBackgroundColor='#08af07'
                        offIconBackgroundColor='#e73a38'
                        borderTopLeftRadius='3px'
                        borderTopRightRadius='3px'
                        borderBottomLeftRadius='3px'
                        borderBottomRightRadius='3px'
                        onClickCallback={() => {
                            dispatch(toggleIsVideoEnabled());
                        }}
                        onText='Video Enabled'
                        offText='Video Disabled'
                        onIconCompoentGenerator={(props) => <FaVideo />}
                        offIconCompoentGenerator={(props) => <FaVideoSlash />}
                    />

                    <JoinButton
                        buttonWidth='80px'
                        buttonHeight='var(--buttons_and_input_height)'
                        onClickCallback={() => {
                            dispatch(setIsUserComingFromJoinPage(true));
                            history.push({
                                pathname: `/rooms/${currentUser.roomID}`,
                            });
                            currentUser.socket.emit(
                                'join',
                                {
                                    userName: currentUser.userName,
                                    roomName: currentUser.roomName,
                                    roomID: currentUser.roomID,
                                    hostName: currentUser.hostName,
                                    isCurrentUserHost:
                                        currentUser.isCurrentUserHost,
                                },
                                ({ status }) => {
                                    console.log(status);
                                }
                            );
                        }}
                    >
                        Join
                        <IconSpan>
                            <BsArrowRightShort />
                        </IconSpan>
                    </JoinButton>
                </Settings>
            </SettingsRow>
        </Container>
    );
};

export default MeetingSettings;

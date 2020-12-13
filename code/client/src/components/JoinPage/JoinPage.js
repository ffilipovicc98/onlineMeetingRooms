import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import JoinPageBackground from './JoinPageBackground.svg';
import JoinPageSvgIcon from '../JoinPageSvgIcon/JoinPageSvgIcon';
import SimpleButton from '../SimpleButton/SimpleButton';
import { BsArrowLeftShort } from 'react-icons/bs';
import RoomNameAndHostText from '../RoomNameAndHostText/RoomNameAndHostText';
import JoinHeader from '../JoinHeader/JoinHeader';

const StyledJoinPage = styled.div`
    height: 100%;
    width: 100%;
    background: url(${JoinPageBackground}) center #fff;

    /* flex properties as parent */
`;

const Row = styled.div`
    /* border: solid 10px #423; */

    width: 95%;
    position: absolute;
    top: 240px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const SvgIconHalf = styled.div`
    /* background-color: rgb(78, 148, 153); */
    /* opacity: 0.5; */

    width: 35%;
    height: 100%;

    margin-top: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MeetingSettingsHalf = styled.div`
    /* background-color: rgb(153, 78, 78); */
    /* opacity: 0.5; */

    /* width: 50%; */
    height: 100%;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const JoinPage = ({ location, match }) => {
    const history = useHistory();
    const roomName = location.state.roomName;
    const hostName = location.state.hostName;

    return (
        <StyledJoinPage>
            <JoinHeader roomName={roomName} hostName={hostName} />
            <Row>
                <SvgIconHalf>
                    <JoinPageSvgIcon />
                </SvgIconHalf>
                <MeetingSettingsHalf>
                    <MeetingSettings></MeetingSettings>
                </MeetingSettingsHalf>
            </Row>
        </StyledJoinPage>
    );
};

/************************************************************************/

/************************************************************************/

/************************************************************************/

const Container = styled.div`
    background-color: #f9f9f9;

    width: 1000px;
    height: 650px;

    overflow: hidden;
    border-radius: 7px;
    border: solid 1px #3182ce;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
`;

const VideoPreview = styled.div`
    background-color: #444;

    width: 100%;
    height: 85%;
`;

const MeetingSettings = () => {
    return (
        <Container>
            <VideoPreview />
        </Container>
    );
};

{
    /* <h1>Joining room {roomName}</h1>
            <input
                type='text'
                onChange={(event) => {
                    setUserNameInputValue(event.currentTarget.value);
                }}
            />
            <button
                className='myButton'
                onClick={() =>
                    history.push({
                        pathname: `/rooms/${roomName}`,
                        state: {
                            roomName: roomName,
                            userName: userNameInputValue,
                        },
                    })
                }
            >
                Next Page
            </button> */
}

export default JoinPage;

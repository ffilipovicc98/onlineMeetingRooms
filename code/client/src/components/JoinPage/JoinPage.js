import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import JoinPageBackground from './JoinPageBackground.svg';
import JoinPageSvgIcon from '../JoinPageSvgIcon/JoinPageSvgIcon';
import SimpleButton from '../SimpleButton/SimpleButton';
import { BsArrowLeftShort } from 'react-icons/bs';
import RoomNameAndHostText from '../RoomNameAndHostText/RoomNameAndHostText';
import JoinHeader from '../JoinHeader/JoinHeader';
import MeetingSettings from '../MeetingSettings/MeetingSettings';
import { useDispatch, useSelector } from 'react-redux';
import { resetJoinPageAnimations } from '../../actions';

const StyledJoinPage = styled.div`
    height: 100%;
    width: 100%;
    background: url(${JoinPageBackground}) center #fff;
    /* background-size: 120% 120%; */

    /* flex properties as parent */
`;

const Row = styled.div`
    /* border: solid 10px #423; */

    width: 95%;
    position: absolute;
    top: 220px;

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

const JoinPage = () => {
    return (
        <StyledJoinPage>
            <JoinHeader />
            <Row>
                <SvgIconHalf>
                    <JoinPageSvgIcon />
                </SvgIconHalf>
                <MeetingSettingsHalf>
                    <MeetingSettings />
                </MeetingSettingsHalf>
            </Row>
        </StyledJoinPage>
    );
};

/************************************************************************/

/************************************************************************/

/************************************************************************/

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

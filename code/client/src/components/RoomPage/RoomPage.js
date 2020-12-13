import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledRoomPage = styled.div`
    height: 100%;
    width: 100%;
    background-color: #809bb1;
`;

const RoomPage = ({ location }) => {
    const { userName, roomName } = location.state;
    const history = useHistory();

    return (
        <StyledRoomPage>
            <h1>{`User ${userName} has joined room ${roomName}`}</h1>
            <button
                className='myButton'
                onClick={() =>
                    history.push({
                        pathname: '/',
                        state: { roomName: roomName },
                    })
                }
            >
                Nazad
            </button>
        </StyledRoomPage>
    );
};

export default RoomPage;

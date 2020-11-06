import React from 'react';
import { useHistory } from 'react-router-dom';

const RoomPage = ({ location }) => {
    const { userName, roomName } = location.state;
    const history = useHistory();

    return (
        <div className='room_page'>
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
        </div>
    );
};

export default RoomPage;

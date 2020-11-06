import React from 'react';
import { useHistory } from 'react-router-dom';

const RoomPage = ({ location }) => {
    const history = useHistory();
    return (
        <div className='room_page'>
            <h1>RoomPage</h1>
            <button
                className='myButton'
                onClick={() =>
                    history.push({
                        pathname: '/',
                        state: { previousPage: 'room' },
                    })
                }
            >
                Nazad
            </button>
        </div>
    );
};

export default RoomPage;

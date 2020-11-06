import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const JoinPage = ({ location, match }) => {
    const history = useHistory();
    const roomName = location.state.roomName;
    const [userNameInputValue, setUserNameInputValue] = useState('');
    return (
        <div className='join_page'>
            <h1>Joining room {roomName}</h1>
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
            </button>
        </div>
        // </motion.div>
    );
};

export default JoinPage;

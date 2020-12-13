import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledJoinPage = styled.div`
    height: 100%;
    width: 100%;
    background-color: #4a7ca5;
`;

const JoinPage = ({ location, match }) => {
    const history = useHistory();
    const roomName = location.state.roomName;
    const [userNameInputValue, setUserNameInputValue] = useState('');
    return (
        <StyledJoinPage>
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
        </StyledJoinPage>
        // </motion.div>
    );
};

export default JoinPage;

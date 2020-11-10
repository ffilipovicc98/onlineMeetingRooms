import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HomePageSvgIcon from '../HomePageSvgIcon/HomePageSvgIcon';

const HomePage = () => {
    const history = useHistory();
    const [roomNameInputValue, setRoomNameInputValue] = useState('');
    return (
        <div className='home_page'>
            <h1>HomePage</h1>
            <input
                type='text'
                onChange={(event) => {
                    setRoomNameInputValue(event.currentTarget.value);
                }}
            />
            <button
                className='myButton'
                onClick={() =>
                    history.push({
                        pathname: `/join`,
                        state: {
                            roomName: roomNameInputValue,
                        },
                    })
                }
            >
                Next Page
            </button>
            <HomePageSvgIcon />
        </div>
    );
};

export default HomePage;

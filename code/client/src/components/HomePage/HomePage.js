import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HomePageSvgIcon from '../HomePageSvgIcon/HomePageSvgIcon';
import { motion } from 'framer-motion';
import AvailibaleRooms from '../AvailibaleRooms/AvailibaleRooms';
import AddNewRoomComponent from '../AddNewRoomComponent/AddNewRoomComponent';

const transitionOfHomePage = {
    duration: 1,
};

const variantsOfHomePage = {
    initialState: { opacity: 0, x: '-2vw', transition: transitionOfHomePage },
    animateState: { opacity: 1, x: '0vw', transition: transitionOfHomePage },
};

const variantsOfHomePageSvgIconHalf = {
    animateState: {
        transition: {
            delayChildren: 0.65,
        },
    },
};

const HomePage = () => {
    const history = useHistory();
    const [roomNameInputValue, setRoomNameInputValue] = useState('');

    return (
        <motion.div className='home_page' variants={variantsOfHomePage}>
            <input
                type='text'
                onChange={(event) => {
                    setRoomNameInputValue(event.currentTarget.value);
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    color: '#000',
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
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '250px',
                }}
            >
                Next Page
            </button>
            <AddNewRoomComponent />
            <motion.div className='home_page_availibale_rooms_half'>
                <AvailibaleRooms />
            </motion.div>
            <motion.div
                className='home_page_svg_icon_half'
                variants={variantsOfHomePageSvgIconHalf}
            >
                <HomePageSvgIcon />
            </motion.div>
        </motion.div>
    );
};

export default HomePage;

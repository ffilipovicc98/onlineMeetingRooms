import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HomePageSvgIcon from '../HomePageSvgIcon/HomePageSvgIcon';
import { motion } from 'framer-motion';

const transitionOfHomePage = {
    // type: 'spring',
    // bounce: 0,
    duration: 1,
    // delayChildren: 1,
    // staggerChildren: 1,
    // when: 'beforeChildren',
};

const variantsOfHomePage = {
    initialState: { opacity: 0, x: '-2vw', transition: transitionOfHomePage },
    animateState: { opacity: 1, x: '0vw', transition: transitionOfHomePage },
    exitState: { opacity: 1, transition: transitionOfHomePage },
};

const variantsOfHomePageSvgIconHalf = {
    initialState: {
        // opacity: 0
    },
    animateState: {
        // opacity: 1,
        transition: {
            delayChildren: 0.2,
            // when: 'beforeChildren',
        },
    },
    exitState: {},
};

const variantsOfHomePageAvailibaleRoomsHalf = {
    initialState: {
        //  opacity: 0
    },
    animateState: {
        // opacity: 1,
        transition: {
            delayChildren: 0.2,
            // when: 'beforeChildren',
        },
    },
    exitState: {},
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
            <motion.div
                className='home_page_availibale_rooms_half'
                variants={variantsOfHomePageAvailibaleRoomsHalf}
            ></motion.div>
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

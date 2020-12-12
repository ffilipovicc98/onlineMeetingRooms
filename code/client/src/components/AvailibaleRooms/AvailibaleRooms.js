import React, { useState, useEffect } from 'react';
import AvailibaleRoomsAnimatedText from '../AvailibaleRoomsAnimatedText/AvailibaleRoomsAnimatedText';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import AvailibaleRoomsWrapper from '../AvailibaleRoomsWrapper/AvailibaleRoomsWrapper';

const wait = (timeInMS = 0) =>
    new Promise((resolve) => setTimeout(resolve, timeInMS));

const openCloseTransition = {
    type: 'spring',
    bounce: 0.2,
    duration: 1,
};

const variantsOfAvailibaleRooms = {
    initialState: { scale: 0, width: '260px', height: '70px' },
    closedState: {
        scale: 1,
        width: '260px',
        height: '70px',
        backgroundColor: '#2b517f',
        transition: {
            type: 'spring',
            bounce: 0.5,
            duration: 1.5,
        },
    },
    exitState: {},
    openState: {
        width: 600,
        height: 700,
        transition: openCloseTransition,
        backgroundColor: '#f2f2f2',
    },
};

const AvailibaleRooms = () => {
    const animationControls = useAnimation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen((prevState) => !prevState);
    useEffect(
        () => {
            (async () => {
                animationControls.start('initialState');
                await wait(800);
                animationControls
                    .start('closedState')
                    .then(
                        () =>
                            (variantsOfAvailibaleRooms.closedState.transition = openCloseTransition)
                    );
            })();
        },
        [animationControls] /* run use effect only once */
    );

    return (
        <motion.div
            className='availibale_rooms'
            variants={variantsOfAvailibaleRooms}
            animate={animationControls}
            onClick={toggleIsOpen}
        >
            <AnimatePresence exitBeforeEnter>
                {isOpen ? (
                    <AvailibaleRoomsWrapper
                        key={1}
                        parentAnimationControls={animationControls}
                    />
                ) : (
                    <AvailibaleRoomsAnimatedText
                        key={2}
                        text='See Availibale Rooms'
                        parentAnimationControls={animationControls}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AvailibaleRooms;

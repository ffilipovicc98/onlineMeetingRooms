import React, { useState, useEffect } from 'react';
import AvailibaleRoomsAnimatedText from '../AvailibaleRoomsAnimatedText/AvailibaleRoomsAnimatedText';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import AvailibaleRoomsWrapper from '../AvailibaleRoomsWrapper/AvailibaleRoomsWrapper';
import styled from 'styled-components';

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
        boxShadow: '2px 2px 3px 2px rgba(0, 0, 0, 0.2)',
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
        boxShadow: '2px 2px 7px 7px rgba(0, 0, 0, 0.2)',
    },
};

const StyledAvailibaleRooms = styled(motion.div)`
    /* main properties */
    background-color: #2b517f;
    border-radius: 3px;
    font-size: 1.1em;
    cursor: pointer;
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);

    /* flex properties as parent */
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
        <StyledAvailibaleRooms
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
        </StyledAvailibaleRooms>
    );
};

export default AvailibaleRooms;

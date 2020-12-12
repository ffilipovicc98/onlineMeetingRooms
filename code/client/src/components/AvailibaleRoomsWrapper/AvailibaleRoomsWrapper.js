import React, { useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';
import AvailibaleRoomsHeader from '../AvailibaleRoomsHeader/AvailibaleRoomsHeader';
import AvailibaleRoomsListContainer from '../AvailibaleRoomsListContainer/AvailibaleRoomsListContainer';
import AvailibaleRoomsFooter from '../AvailibaleRoomsFooter/AvailibaleRoomsFooter';

const wait = (timeInMS = 0) =>
    new Promise((resolve) => setTimeout(resolve, timeInMS));

const transition = {
    staggerChildren: 0.1,
};

const variantOfAvailibaleRoomsWrapper = {
    open: { transition: { ...transition, staggerDirection: 1 } },
    close: { transition: { ...transition, staggerDirection: -1 } },
};

const AvailibaleRoomsWrapper = ({ parentAnimationControls }) => {
    const [isPresent, safeToRemove] = usePresence();
    useEffect(() => {
        !isPresent &&
            (async () => {
                await wait(700);
                parentAnimationControls.start('closedState');
                safeToRemove();
            })();
    }, [isPresent]);
    return (
        <motion.div
            className='availibale_rooms_wrapper'
            variants={variantOfAvailibaleRoomsWrapper}
            initial='close'
            animate='open'
            exit='close'
        >
            <AvailibaleRoomsHeader text='Availibale Rooms' />
            <AvailibaleRoomsListContainer />
            <AvailibaleRoomsFooter />
        </motion.div>
    );
};

export default AvailibaleRoomsWrapper;

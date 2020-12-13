import React, { useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';
import AvailibaleRoomsHeader from '../AvailibaleRoomsHeader/AvailibaleRoomsHeader';
import AvailibaleRoomsListContainer from '../AvailibaleRoomsListContainer/AvailibaleRoomsListContainer';
import AvailibaleRoomsFooter from '../AvailibaleRoomsFooter/AvailibaleRoomsFooter';
import styled from 'styled-components';

const wait = (timeInMS = 0) =>
    new Promise((resolve) => setTimeout(resolve, timeInMS));

const StyledWrapper = styled(motion.div)`
    /* background-color: red; */
    width: 90%;
    height: 97%;
`;

const variantOfStyledWrapper = {
    open: { transition: { staggerChildren: 0.1, staggerDirection: 1 } },
    close: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
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
        <StyledWrapper
            variants={variantOfStyledWrapper}
            initial='close'
            animate='open'
            exit='close'
        >
            <AvailibaleRoomsHeader text='Availibale Rooms' />
            <AvailibaleRoomsListContainer />
            <AvailibaleRoomsFooter />
        </StyledWrapper>
    );
};

export default AvailibaleRoomsWrapper;

import React from 'react';
import { motion } from 'framer-motion';
import AvailibaleRoomsListElement from '../AvailibaleRoomsListElement/AvailibaleRoomsListElement';
import styled from 'styled-components';

const StyledContainer = styled(motion.div)`
    /* background: rgb(14, 75, 165); */
    width: 100%;
    height: 75%;

    /* flex properties as parent */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const variantsOfStyledContainer = {
    open: { transition: { staggerChildren: 0.05, staggerDirection: 1 } },
    close: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const AvailibaleRoomsListContainer = () => {
    const hardcoded_data = [
        {
            roomName: 'MATF - Računarske mreže vežbe',
            host: 'Ivan Ristović',
            roomID: 1,
        },
        {
            roomName: 'MATF - Računarske mreže predavanja',
            host: 'Aleksandar Kartelj',
            roomID: 2,
        },
        {
            roomName: 'MATF - Razvoj softvera vežbe',
            host: 'Nikola Ajzenhamer',
            roomID: 3,
        },
        {
            roomName: 'JavaScript Workshop',
            host: 'Wes Bos',
            roomID: 4,
        },
        {
            roomName: 'RM Odbrana projekta',
            host: 'Filip Filipovic',
            roomID: 5,
        },
    ];
    return (
        <StyledContainer variants={variantsOfStyledContainer}>
            {hardcoded_data.map(({ roomName, host, roomID }) => (
                <AvailibaleRoomsListElement
                    roomID={roomID}
                    key={roomID}
                    hostName={host}
                    roomName={roomName}
                />
            ))}
        </StyledContainer>
    );
};

export default AvailibaleRoomsListContainer;

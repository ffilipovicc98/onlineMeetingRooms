import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
    const ENDPOINT = `${process.env.REACT_APP_API_URL}/rooms`;
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                setRooms(data);

                console.log(data);
            })
            .catch((err) => {
                throw new Error(
                    'Greska AvailibaleRoomsListContainer useEffect'
                );
            });
        return () => {};
    }, [ENDPOINT /* ???? */]);
    return (
        <StyledContainer variants={variantsOfStyledContainer}>
            {rooms.map(({ roomName, hostName, roomID }) => (
                <AvailibaleRoomsListElement
                    roomID={roomID}
                    key={roomID}
                    hostName={hostName}
                    roomName={roomName}
                />
            ))}
        </StyledContainer>
    );
};

export default AvailibaleRoomsListContainer;

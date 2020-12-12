import React from 'react';
import { motion } from 'framer-motion';
import AvailibaleRoomsListElement from '../AvailibaleRoomsListElement/AvailibaleRoomsListElement';

const transition = { staggerChildren: 0.05 };

const variantsOfAvailibaleRoomsListContainer = {
    open: { transition: { ...transition, staggerDirection: 1 } },
    close: { transition: { ...transition, staggerDirection: -1 } },
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
        <motion.div
            className='availibale_rooms_list_container'
            variants={variantsOfAvailibaleRoomsListContainer}
        >
            {hardcoded_data.map(({ roomName, host, roomID }) => (
                <AvailibaleRoomsListElement
                    roomID={roomID}
                    key={roomID}
                    hostName={host}
                    roomName={roomName}
                />
            ))}
        </motion.div>
    );
};

export default AvailibaleRoomsListContainer;

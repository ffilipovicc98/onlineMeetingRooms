import React from 'react';
import { motion } from 'framer-motion';

const variantsOfAvailibaleRoomsHeader = {
    open: { opacity: 1 },
    close: { opacity: 0 },
};

const AvailibaleRoomsHeader = ({ text }) => {
    return (
        <motion.div
            className='availibale_rooms_header'
            variants={variantsOfAvailibaleRoomsHeader}
        >
            <h1>{text}</h1>
        </motion.div>
    );
};

export default AvailibaleRoomsHeader;

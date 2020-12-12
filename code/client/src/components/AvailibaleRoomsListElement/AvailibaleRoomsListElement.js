import React from 'react';
import { motion } from 'framer-motion';
import SimpleButton from '../SimpleButton/SimpleButton';

const transition = { type: 'spring', duration: 1, bounce: 0.3 };

const variantsOfAvailibaleRoomsListElement = {
    open: { scale: 1, x: 0, opacity: 1, transition: transition },
    close: { scale: 0.9, x: 25, opacity: 0, transition: transition },
};

const AvailibaleRoomsListElement = ({ roomID, roomName, hostName }) => {
    return (
        <motion.div
            key={roomID}
            className='availibale_rooms_list_element'
            variants={variantsOfAvailibaleRoomsListElement}
        >
            <div className='left_line_section'></div>
            <div className='content_section'>
                <h3 className='room_name'>{roomName}</h3>
                <p className='host_name'>
                    Host: <span className='host_name_italic'>{hostName}</span>
                </p>
            </div>
            <div className='button_section'>
                <SimpleButton
                    buttonWidth='83%'
                    buttonHeight='43%'
                    fontSize='0.8em'
                >
                    Join
                </SimpleButton>
            </div>
        </motion.div>
    );
};

export default AvailibaleRoomsListElement;

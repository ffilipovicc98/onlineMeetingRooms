import React from 'react';
import { motion } from 'framer-motion';

const variantsOfAvailibaleRoomsFooter = {
    open: { opacity: 1 },
    close: { opacity: 0 },
};

const AvailibaleRoomsFooter = () => {
    return (
        <motion.div
            className='availibale_rooms_footer'
            variants={variantsOfAvailibaleRoomsFooter}
        >
            <div className='availibale_rooms_footer_controls'>
                <div className='availibale_rooms_footer_control_left'>
                    <i className='availibale_rooms_footer_control_left_arrow'>
                        {'<-'}
                    </i>
                    <p className='availibale_rooms_footer_control_left_text'>
                        Back
                    </p>
                </div>
                <div className='availibale_rooms_footer_control_middle'>
                    <p className='availibale_rooms_footer_control_middle_line'>
                        |
                    </p>
                </div>
                <div className='availibale_rooms_footer_control_right'>
                    <p className='availibale_rooms_footer_control_right_text'>
                        Next
                    </p>
                    <i className='availibale_rooms_footer_control_right_arrow'>
                        {'->'}
                    </i>
                </div>
            </div>
        </motion.div>
    );
};

export default AvailibaleRoomsFooter;

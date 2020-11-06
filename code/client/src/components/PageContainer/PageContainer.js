import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ children, variantsForAnimatingPages }) => {
    return (
        <motion.div
            variants={variantsForAnimatingPages}
            initial='initialState'
            animate='animateState'
            exit='exitState'
            className='page_container'
        >
            {children}
        </motion.div>
    );
};

export default PageContainer;

import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ children, variantsForAnimatingPages }) => {
    console.log(children);
    return (
        <motion.div
            variants={variantsForAnimatingPages}
            initial='initialState'
            animate='animateState'
            exit='exitState'
            className='page_container'
        >
            {children}
            {/* <h1>kur</h1> */}
        </motion.div>
    );
};

export default PageContainer;

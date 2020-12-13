import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledPageContainer = styled(motion.div)`
    background-color: #fff;
    position: absolute;
    height: 100%;
    width: 100%;
`;

const PageContainer = ({ children, variantsForAnimatingPages }) => {
    return (
        <StyledPageContainer
            variants={variantsForAnimatingPages}
            initial='initialState'
            animate='animateState'
            exit='exitState'
            className='page_container'
        >
            {children}
        </StyledPageContainer>
    );
};

export default PageContainer;

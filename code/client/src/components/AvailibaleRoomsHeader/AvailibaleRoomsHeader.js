import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledHeader = styled(motion.header)`
    /* background-color: green; */
    width: 100%;
    height: 15%;
    /* flex properties as parent */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const variantsOfStyledHeader = {
    open: { opacity: 1 },
    close: { opacity: 0 },
};

const StyledText = styled.h1`
    color: #2b517f;
    font-size: 3em;
    font-weight: 300;
`;

const AvailibaleRoomsHeader = ({ text }) => {
    return (
        <StyledHeader variants={variantsOfStyledHeader}>
            <StyledText>{text}</StyledText>
        </StyledHeader>
    );
};

export default AvailibaleRoomsHeader;

import React, { useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';
import styled from 'styled-components';

const wait = (timeInMS = 0) =>
    new Promise((resolve) => setTimeout(resolve, timeInMS));

const StyledAnimatedLetter = styled(motion.span)`
    /* display: inline-block; */
`;

const tranistionOfStyledAnimatedLetter = {
    type: 'spring',
    bounce: 0.3,
    duration: 1,
};

const variantsOfStyledAnimatedLetter = {
    open: {
        opacity: 1,
        scale: 1,
        transition: tranistionOfStyledAnimatedLetter,
    },
    close: {
        opacity: 0,
        scale: 0.2,
        transition: tranistionOfStyledAnimatedLetter,
    },
};

const StyledAnimatedText = styled(motion.p)`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
`;

const variantsOfStyledAnimatedText = {
    close: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0.025,
            staggerDirection: 1,
        },
    },
    open: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.025,
            staggerDirection: -1,
        },
    },
};

const AvailibaleRoomsAnimatedText = ({ text, parentAnimationControls }) => {
    const reversedLetterArray = text.split('').reverse();
    const [isPresent, safeToRemove] = usePresence();
    useEffect(() => {
        variantsOfStyledAnimatedText.open.transition.delayChildren = 0.3;
        !isPresent &&
            (async () => {
                await wait(900);
                parentAnimationControls.start('openState');
                safeToRemove();
            })();
    }, [isPresent, parentAnimationControls, safeToRemove]);
    return (
        <StyledAnimatedText
            variants={variantsOfStyledAnimatedText}
            initial='close'
            animate='open'
            exit='close'
        >
            {reversedLetterArray.map((letter, index) => {
                return (
                    <StyledAnimatedLetter
                        key={index}
                        variants={variantsOfStyledAnimatedLetter}
                        style={{
                            width: letter === ' ' ? '4px' : 'auto',
                        }}
                    >
                        {letter}
                    </StyledAnimatedLetter>
                );
            })}
        </StyledAnimatedText>
    );
};

export default AvailibaleRoomsAnimatedText;

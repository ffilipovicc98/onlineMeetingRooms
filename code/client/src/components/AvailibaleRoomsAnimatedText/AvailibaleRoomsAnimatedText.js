import React, { useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';

const wait = (timeInMS = 0) =>
    new Promise((resolve) => setTimeout(resolve, timeInMS));

const variantsOfAvailibaleRoomsAnimatedText = {
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

const tranistionOfAvailibaleRoomsAnimatedLetter = {
    type: 'spring',
    bounce: 0.3,
    duration: 1,
};

const variantsOfAvailibaleRoomsAnimatedLetter = {
    open: {
        opacity: 1,
        scale: 1,
        transition: tranistionOfAvailibaleRoomsAnimatedLetter,
    },
    close: {
        opacity: 0,
        scale: 0.2,
        transition: tranistionOfAvailibaleRoomsAnimatedLetter,
    },
};

const AvailibaleRoomsAnimatedText = ({ text, parentAnimationControls }) => {
    const reversedLetterArray = text.split('').reverse();
    const [isPresent, safeToRemove] = usePresence();
    useEffect(() => {
        variantsOfAvailibaleRoomsAnimatedText.open.transition.delayChildren = 0.3;
        !isPresent &&
            (async () => {
                await wait(900);
                parentAnimationControls.start('openState');
                safeToRemove();
            })();
    }, [isPresent, parentAnimationControls, safeToRemove]);
    return (
        <motion.p
            className='availibale_rooms_animated_text'
            variants={variantsOfAvailibaleRoomsAnimatedText}
            initial='close'
            animate='open'
            exit='close'
        >
            {reversedLetterArray.map((letter, index) => {
                return (
                    <motion.span
                        className='availibale_rooms_animated_letter'
                        key={index}
                        variants={variantsOfAvailibaleRoomsAnimatedLetter}
                        style={{
                            width: letter === ' ' ? '4px' : 'auto',
                        }}
                    >
                        {letter}
                    </motion.span>
                );
            })}
        </motion.p>
    );
};

export default AvailibaleRoomsAnimatedText;

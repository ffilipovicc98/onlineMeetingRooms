import React, { createContext, useContext } from 'react';

const springType = {
    type: 'spring',
    bounce: 0,
    duration: 1,
    restDelta: 0.005,
};

let variantsForPageAnimations = {
    initialState: {
        x: '100vw',
        transition: springType,
    },
    animateState: {
        x: '0',
        transition: springType,
    },
    exitState: {
        x: '-100vw',
        transition: springType,
    },
};
// const setVariantsForPageAnimations = () => variantsForPageAnimations

const resetVariants = () => {
    variantsForPageAnimations = {
        initialState: {
            x: '100vw',
            transition: springType,
        },
        animateState: {
            x: '0',
            transition: springType,
        },
        exitState: {
            x: '-100vw',
            transition: springType,
        },
    };
};

const setVariantsForFirstVisit = () => {
    variantsForPageAnimations.initialState = {
        transition: springType,
    };
    variantsForPageAnimations.animateState = {
        transition: {
            ...springType,
            duration: 0.2,
            delayChildren: 0.2,
        },
    };
};

const setVariantsForSlidingLeftExit = () => {
    variantsForPageAnimations.exitState = {
        x: '100vw',
        transition: springType,
    };
    console.log(variantsForPageAnimations);
};

const setVariantsForSlidingLeftInitialAnimate = () => {
    variantsForPageAnimations.initialState = {
        x: '-100vw',
        transition: springType,
    };
    variantsForPageAnimations.animateState = {
        x: '0',
        transition: springType,
    };
};

const PageAnimationsContext = createContext();

const PageAnimationsProvider = (props) => {
    const value = {
        variants: variantsForPageAnimations,
        resetVariants,
        setVariantsForFirstVisit,
        setVariantsForSlidingLeftExit,
        setVariantsForSlidingLeftInitialAnimate,
    };
    return <PageAnimationsContext.Provider value={value} {...props} />;
};

const usePageAnimations = () => {
    const pageAnimations = useContext(PageAnimationsContext);
    if (!pageAnimations) {
        throw new Error(
            `usePageAnimations must be used within the PageAnimationsProvider`
        );
    }
    return pageAnimations;
};

export { PageAnimationsProvider, usePageAnimations };

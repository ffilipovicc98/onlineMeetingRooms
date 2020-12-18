import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetHomePageAnimations,
    resetJoinPageAnimations,
    resetRoomPageAnimations,
} from '../../actions';

const StyledPageContainer = styled(motion.div)`
    background-color: #fff;
    position: absolute;
    height: 100%;
    width: 100%;
`;

const PageContainer = ({ children, pageName }) => {
    const pageAnimations = useSelector(
        (state) => state.pageAnimationsReducer,
        () => true
    );
    const dispatch = useDispatch();
    let pageVariants;
    switch (pageName) {
        case 'Home':
            pageVariants = pageAnimations.homePageVariants;
            break;
        case 'Join':
            pageVariants = pageAnimations.joinPageVariants;
            break;
        case 'Room':
            pageVariants = pageAnimations.roomPageVariants;
            break;
        default:
            throw new Error('PageContainer switch default');
    }

    useEffect(() => {
        switch (pageName) {
            case 'Home':
                dispatch(resetHomePageAnimations());
                break;
            case 'Join':
                dispatch(resetJoinPageAnimations());
                break;
            case 'Room':
                dispatch(resetRoomPageAnimations());
                break;
            default:
                throw new Error('PageContainer switch default');
        }
    }, []);
    return (
        <StyledPageContainer
            variants={pageVariants}
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

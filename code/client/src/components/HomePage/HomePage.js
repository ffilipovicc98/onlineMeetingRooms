import React, { useEffect } from 'react';
import HomePageSvgIcon from '../HomePageSvgIcon/HomePageSvgIcon';
import AvailibaleRooms from '../AvailibaleRooms/AvailibaleRooms';
import AddNewRoomComponent from '../AddNewRoomComponent/AddNewRoomComponent';
import styled from 'styled-components';
import HomePageBackground from './HomePageBackground.svg';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetHomePageAnimations,
    setIsUserSawAnimationsOnHomePage,
    slideRightHomePageOnEnter,
} from './../../actions';
import { useLocation } from 'react-router-dom';

const StyledHomePage = styled(motion.div)`
    height: 100%;
    width: 100%;
    background: url(${HomePageBackground}) center #fff;
    /* background-size: 120% 120%; */

    /* flex properties as parent */
    display: flex;
`;

const transitionOfStyledHomePage = {
    duration: 1,
};

const variantsOfStyledHomePage = {
    initialState: {
        opacity: 0,
        x: '-2vw',
        transition: transitionOfStyledHomePage,
    },
    animateState: {
        opacity: 1,
        x: '0vw',
        transition: transitionOfStyledHomePage,
    },
};

const AvailibaleRoomsHalf = styled.div`
    /* debugging properties */
    /* background-color: rgb(153, 78, 78); */
    /* opacity: 0.5; */

    /* main properties */
    width: 50%;
    height: 100%;

    /* flex properties as parent */
    display: flex;
    justify-content: center;
    align-items: center;

    /* flex properties as children */
`;

const SvgIconHalf = styled.div`
    /* debugging properties */
    /* background-color: rgb(78, 148, 153); */
    /* opacity: 0.5; */

    /* main properties */
    width: 50%;
    height: 100%;

    /* flex properties as parent */
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex properties as children */
`;

const variantsOfSvgIconHalf = {
    animateState: {
        transition: {
            delayChildren: 0.65,
        },
    },
};

const HomePage = () => {
    let location = useLocation();
    const userPageHistory = useSelector(
        (state) => state.userPageHistoryReducer,
        () => true // prevent rerender on updates of state.userPageHistoryReducer
    );
    const pageAnimations = useSelector(
        (state) => state.pageAnimationsReducer,
        () => true
    );
    const dispatch = useDispatch();

    if (
        // location.pathname === '/' &&
        userPageHistory.isUserComingFromJoinPage ||
        userPageHistory.isUserComingFromRoomPage
    ) {
        dispatch(slideRightHomePageOnEnter());
    }

    useEffect(() => {
        dispatch(setIsUserSawAnimationsOnHomePage(true));
    }, []);

    return (
        <StyledHomePage variants={variantsOfStyledHomePage}>
            <AddNewRoomComponent />
            <AvailibaleRoomsHalf>
                <AvailibaleRooms />
            </AvailibaleRoomsHalf>
            <SvgIconHalf variants={variantsOfSvgIconHalf}>
                <HomePageSvgIcon />
            </SvgIconHalf>
        </StyledHomePage>
    );
};

export default HomePage;

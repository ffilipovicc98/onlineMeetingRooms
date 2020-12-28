import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    /* border: 3px solid #d6d6aa; */
    display: flex;
    justify-content: ${(props) =>
        props.isCurrentUser ? 'flex-end' : 'flex-start'};
    align-items: center;

    padding: 7px;
`;

const Box = styled(motion.div)`
    /* border: 3px solid #68bddd; */
    background-color: ${(props) =>
        props.isCurrentUser
            ? props.currentUserBackgroundColor
            : props.otherUserBackgroundColor};
    color: ${(props) =>
        props.isCurrentUser ? props.currentUserColor : props.otherUserColor};
    box-shadow: ${(props) =>
        props.isCurrentUser
            ? '-1px 1px 5px 1px rgba(0,0,0,0.4)'
            : '-1px 1px 3px 1px rgba(0,0,0,0.2)'};
    border-radius: 3px;
    max-width: 80%;
    min-width: 30%;
    padding: 5px 10px;
`;

const Name = styled.p`
    /* border: 3px solid #4d4; */
    font-size: ${(props) => props.userNameFontSize || '.8em'};
    font-weight: ${(props) => props.userNameFontWeight || '500'};
`;

const Content = styled.p`
    /* border: 3px solid #4d4; */
    padding: 2px 0px;
    font-size: 0.9em;
`;

const Time = styled.p`
    text-align: end;
    font-size: 0.7em;
`;

const Message = (props) => {
    const {
        messageID,
        userName,
        isCurrentUser,
        content,
        hours,
        minutes,
        time,
        userNameFontSize,
        userNameFontWeight,
        currentUserBackgroundColor,
        otherUserBackgroundColor,
        currentUserColor,
        otherUserColor,
    } = props;
    return (
        <Row {...{ isCurrentUser }}>
            <Box
                {...{
                    isCurrentUser,
                    currentUserBackgroundColor,
                    otherUserBackgroundColor,
                    currentUserColor,
                    otherUserColor,
                }}
                whileTap={{ x: isCurrentUser ? '-3px' : '3px' }}
            >
                {!isCurrentUser && (
                    <Name
                        {...{
                            userNameFontSize,
                            userNameFontWeight,
                        }}
                    >
                        {userName}
                    </Name>
                )}
                <Content>{content}</Content>
                {/* <Time>{`${hours}:${minutes}`}</Time> */}
                <Time>{time}</Time>
            </Box>
        </Row>
    );
};

export default Message;

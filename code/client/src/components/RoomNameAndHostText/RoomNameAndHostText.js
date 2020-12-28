import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* background-color: #787; */
    padding: 7px 15px;
`;

const RoomNameText = styled.h1`
    font-size: ${(props) => props.roomNameFontSize || '2.2em'};
    color: ${(props) => props.roomNameColor || '#2b517f'};
    font-weight: ${(props) => props.roomNameFontWeight || '300'};
`;

const HostNameText = styled.h1`
    font-size: ${(props) => props.roomNameFontSize || '1.4em'};
    color: ${(props) => props.roomNameColor || '#2b517f'};
    font-weight: ${(props) => props.roomNameFontWeight || '300'};
`;

const RoomNameAndHostText = (props) => {
    const {
        className,
        width,
        height,
        roomNameFontSize,
        roomNameColor,
        roomNameFontWeight,
    } = props;
    const propsToPass = { className, width, height };
    const currentUser = useSelector((state) => state.currentUserReducer);
    return (
        <Wrapper {...propsToPass} className={className}>
            <RoomNameText>{currentUser.roomName}</RoomNameText>
            <HostNameText>
                Host:{' '}
                <span style={{ fontStyle: 'italic' }}>
                    {currentUser.isCurrentUserHost
                        ? currentUser.userName
                        : currentUser.hostName}
                </span>
            </HostNameText>
        </Wrapper>
    );
};

export default RoomNameAndHostText;

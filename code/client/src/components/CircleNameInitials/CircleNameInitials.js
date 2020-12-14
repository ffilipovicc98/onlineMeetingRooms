import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    /* border: 3px solid #688; */

    background-color: #fff;
    box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 100%;
    font-size: ${(props) => props.fontSize || '1em'};
    text-transform: uppercase;
    width: ${(props) => props.width || '40px'};
    height: ${(props) => props.height || '40px'};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const getInitials = (name) => {
    if (name === '') {
        return name;
    }
    const words = name.split(' ');
    if (words.length === 1) {
        return words[0][0];
    }
    return `${words[0][0]}${words[1][0]}`;
};

const CircleNameInitials = (props) => {
    return <Circle {...props}>{getInitials(props.name)}</Circle>;
};

export default CircleNameInitials;

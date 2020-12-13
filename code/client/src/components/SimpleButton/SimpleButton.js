import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SipleStyledButton = styled(motion.button)`
    width: ${(props) => props.buttonWidth || '100%'};
    height: ${(props) => props.buttonHeight};
    background-color: ${(props) => props.backgroundColor || '#3182ce'};
    border-radius: 3px;
    border-top-left-radius: ${(props) => props.borderTopLeftRadius || '3px'};
    border-top-right-radius: ${(props) => props.borderTopRightRadius || '3px'};
    border-bottom-left-radius: ${(props) =>
        props.borderBottomLeftRadius || '3px'};
    border-bottom-right-radius: ${(props) =>
        props.borderBottomRightRadius || '3px'};
    border: 0;
    font-size: ${(props) => props.fontSize || '1em'};

    :hover {
        cursor: pointer;
    }

    :focus {
        border: none;
    }
`;

const SimpleButton = (props) => {
    const {
        buttonWidth,
        buttonHeight,
        backgroundColor,
        children,
        onClickCallback,
        className,
        fontSize,
        variants,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
    } = props;
    const propsToPass = {
        buttonWidth,
        buttonHeight,
        backgroundColor,
        children,
        fontSize,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
    };
    return (
        <SipleStyledButton
            {...propsToPass}
            onClick={onClickCallback}
            className={className}
            variants={variants}
        >
            {children}
        </SipleStyledButton>
    );
};

export default SimpleButton;

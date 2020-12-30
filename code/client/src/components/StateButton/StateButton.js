import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SimpleButton from '../SimpleButton/SimpleButton';

const Wrapper = styled.div`
    /* background-color: #bbd123; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconSpan = styled.span`
    /* background-color: #667; */

    font-size: 1.1em;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const StateButton = (props) => {
    // const [isOn, setIsOn] = useState(false);
    // const toggleSetIsOn = () => setIsOn((prevState) => !prevState);
    const {
        isOn,
        buttonWidth,
        buttonHeight,
        children,
        onClickCallback,
        className,
        fontSize,
        variants,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        onTextBackgroundColor,
        offTextBackgroundColor,
        onIconBackgroundColor,
        offIconBackgroundColor,
        onIconCompoentGenerator,
        offIconCompoentGenerator,
        onText,
        offText,
    } = props;

    const iconWidth = buttonHeight;
    const iconHeight = buttonHeight;

    const Icon = isOn ? onIconCompoentGenerator : offIconCompoentGenerator;
    const text = isOn ? onText : offText;
    const textBackgroundColor = isOn
        ? onTextBackgroundColor
        : offTextBackgroundColor;
    const iconBackgroundColor = isOn
        ? onIconBackgroundColor
        : offIconBackgroundColor;
    return (
        <Wrapper>
            <SimpleButton
                buttonWidth={buttonWidth}
                buttonHeight={buttonHeight}
                backgroundColor={textBackgroundColor}
                borderTopLeftRadius={borderTopLeftRadius}
                borderTopRightRadius='0px'
                borderBottomLeftRadius={borderBottomLeftRadius}
                borderBottomRightRadius='0px'
                onClickCallback={() => {
                    // toggleSetIsOn();
                    onClickCallback();
                }}
            >
                {text}
            </SimpleButton>
            <SimpleButton
                buttonWidth={iconWidth}
                buttonHeight={iconHeight}
                backgroundColor={iconBackgroundColor}
                borderTopLeftRadius='0px'
                borderTopRightRadius={borderTopRightRadius}
                borderBottomLeftRadius='0px'
                borderBottomRightRadius={borderBottomRightRadius}
                onClickCallback={() => {
                    // toggleSetIsOn();
                    onClickCallback();
                }}
            >
                <IconSpan>{<Icon />}</IconSpan>
            </SimpleButton>
        </Wrapper>
    );
};

export default StateButton;

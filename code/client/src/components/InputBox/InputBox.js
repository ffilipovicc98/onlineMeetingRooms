import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputWrapper = styled(motion.div)`
    /* background-color: #afafee; */
    width: ${(props) => props.inputWrapperWidth};
    height: ${(props) => props.inputWrapperHeight};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledLabel = styled.p`
    text-transform: uppercase;
    font-size: ${(props) => props.textOverInputSize};
    font-weight: 500;
    letter-spacing: 1px;
    color: #2b517f;
`;

const StyledInput = styled.input`
    width: ${(props) => props.inputBoxWidth};
    height: ${(props) => props.inputBoxHeight};

    color: #000;
    font-style: italic;
`;

const InputBox = (props) => {
    const {
        inputWrapperWidth,
        inputWrapperHeight,
        inputBoxWidth,
        inputBoxHeight,
        inputPlaceHolder,
        textOverInput,
        textOverInputSize,
        onChangeCallback,
        className,
        variantsOfInputWrapper,
        animateOfInputWrapper,
    } = props;
    const propsToPass = {
        inputWrapperWidth,
        inputWrapperHeight,
        inputBoxWidth,
        inputBoxHeight,
        inputPlaceHolder,
        textOverInput,
        textOverInputSize,
    };
    return (
        <InputWrapper
            {...propsToPass}
            className={className}
            variants={variantsOfInputWrapper}
            animate={animateOfInputWrapper}
        >
            <StyledLabel {...propsToPass}>{textOverInput}</StyledLabel>
            <StyledInput
                {...propsToPass}
                placeholder={inputPlaceHolder}
                onChange={onChangeCallback}
            ></StyledInput>
        </InputWrapper>
    );
};

export default InputBox;

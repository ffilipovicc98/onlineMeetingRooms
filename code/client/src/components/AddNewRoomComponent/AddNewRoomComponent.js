import React, { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import InputBox from '../InputBox/InputBox';
import SimpleButton from '../SimpleButton/SimpleButton';
import { useHistory } from 'react-router-dom';

const AddNewRoomDiv = styled(motion.div)`
    --add_new_room_width: 350px;
    --add_new_room_height: 200px;

    --input_and_button_hieght: 40px;

    --add_new_room_button_width: 55px;
    --add_new_room_button_height_initial: var(--add_new_room_button_width);
    --add_new_room_button_height_open: 100%;

    --add_new_room_form_width: calc(
        var(--add_new_room_width) - var(--add_new_room_button_width)
    );
    --add_new_room_form_height: 75%;

    --box_shadow_style: 3px 3px 12px 2px rgba(0, 0, 0, 0.15);

    /* background-color: #ff74e8; */
    position: fixed;
    top: 30px;
    right: 30px;

    width: var(--add_new_room_width);
    height: var(--add_new_room_height);
`;

const AddNewRoomButton = styled(motion.div)`
    background-color: #3182ce;

    position: absolute;
    top: 0px;
    right: 0px;

    width: var(--add_new_room_button_width);

    box-shadow: var(--box_shadow_style);
    z-index: 1;
`;

const variantsOfAddNewRoomButton = {
    close: {
        height: 'var(--add_new_room_button_height_initial)',
        // borderRadius: 100, // Ne sme da se animira u framer motion-u
        transition: { type: 'spring', duration: 0.4, bounce: 0.1 },
    },
    open: {
        height: 'var(--add_new_room_button_height_open)',
        // borderRadius: 0,
        transition: { type: 'spring', duration: 0.4, bounce: 0.1 },
    },
};

const StyledPlusIconWrapper = styled(motion.div)`
    /* background-color: #e4e; */
    width: var(--add_new_room_button_width);
    height: var(--add_new_room_button_width);

    padding-left: calc(var(--add_new_room_button_width) * 0.2);
    padding-top: calc(var(--add_new_room_button_width) * 0.2);

    :hover {
        cursor: pointer;
    }
`;

const StyledPlusIcon = styled(BsPlus)`
    /* background-color: #43ee; */
    width: calc(var(--add_new_room_button_width) * 0.6);
    height: calc(var(--add_new_room_button_width) * 0.6);
`;

const variantsOfStyledPlusIconWrapper = {
    close: {
        rotate: 0,
    },
    open: {
        rotate: 45,
    },
};

const AddNewRoomFormWrapper = styled(motion.div)`
    background-color: #f9f9f9;

    position: absolute;
    bottom: 0;
    right: var(--add_new_room_button_width);
    transform-origin: right center;

    width: var(--add_new_room_form_width);
    height: var(--add_new_room_form_height);

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: var(--box_shadow_style);
    z-index: 0;
`;

const variantsOfAddNewRoomFormWrapper = {
    close: {
        scaleX: 0,
        transition: {
            when: 'afterChildren',
            type: 'spring',
            duration: 0.3,
            bounce: 0,
        },
    },
    open: {
        scaleX: 1,
        transition: {
            when: 'beforeChildren',
            type: 'spring',
            duration: 0.3,
            bounce: 0,
        },
    },
};

const AddNewRoomFormContent = styled(motion.div)`
    /* background-color: #49a9ab; */
    width: 85%;
`;

const variantsOfAddNewRoomFormContent = {
    close: { transition: { staggerChildren: 0.15, staggerDirection: 1 } },
    open: { transition: { staggerChildren: 0.15, staggerDirection: -1 } },
};

const StyledInputBox = styled(InputBox)`
    margin-bottom: 10px;
`;

const variantsOfStyledInputBox = {
    close: {
        x: -5,
        opacity: 0,
        transition: { type: 'spring', duration: 0.3, bounce: 0 },
    },
    open: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 0.3, bounce: 0 },
    },
};

const variantsOfSimpleButton = {
    close: {
        x: -5,
        opacity: 0,
        transition: { type: 'spring', duration: 0.3, bounce: 0 },
    },
    open: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 0.3, bounce: 0 },
    },
};

const AddNewRoomComponent = () => {
    let roomNameInputValue = '';
    const setRoomNameInputValue = (value) => (roomNameInputValue = value);

    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

    const animationControlsOfAddNewRoomButton = useAnimation();
    const animationControlsOfAddNewRoomFormWrapper = useAnimation();

    useEffect(() => {
        const animationControlsArray = [
            animationControlsOfAddNewRoomButton,
            animationControlsOfAddNewRoomFormWrapper,
        ];
        for (let wantedAnimation of animationControlsArray) {
            wantedAnimation.set('close');
        }
    }, [
        animationControlsOfAddNewRoomButton,
        animationControlsOfAddNewRoomFormWrapper,
    ]);

    const componentOpener = async () => {
        const animationOrder = [
            animationControlsOfAddNewRoomButton,
            animationControlsOfAddNewRoomFormWrapper,
        ];
        isOpen && animationOrder.reverse();
        const wantedVariant = isOpen ? 'close' : 'open';
        for (let wantedAnimation of animationOrder) {
            if (wantedVariant === 'open') {
                wantedAnimation.start(wantedVariant);
            } else {
                await wantedAnimation.start(wantedVariant);
            }
        }
        await toggleIsOpen();
    };

    const history = useHistory();
    return (
        <AddNewRoomDiv>
            <AddNewRoomButton
                animate={animationControlsOfAddNewRoomButton}
                variants={variantsOfAddNewRoomButton}
            >
                <StyledPlusIconWrapper
                    variants={variantsOfStyledPlusIconWrapper}
                    onClick={componentOpener}
                >
                    <StyledPlusIcon />
                </StyledPlusIconWrapper>
            </AddNewRoomButton>
            <AddNewRoomFormWrapper
                variants={variantsOfAddNewRoomFormWrapper}
                animate={animationControlsOfAddNewRoomFormWrapper}
            >
                <AddNewRoomFormContent
                    variants={variantsOfAddNewRoomFormContent}
                >
                    <StyledInputBox
                        inputPlaceHolder='Enter room name'
                        inputWrapperWidth='100%'
                        inputWrapperHeight='61px'
                        inputBoxWidth='100%'
                        inputBoxHeight='var(--input_and_button_hieght)'
                        textOverInput='Room  name:'
                        textOverInputSize='0.85em'
                        onChangeCallback={(event) => {
                            console.log(event.currentTarget.value);
                            setRoomNameInputValue(event.currentTarget.value);
                        }}
                        variantsOfInputWrapper={variantsOfStyledInputBox}
                        // animateOfInputWrapper={animationControlsOfAddNewRoomFormWrapper}
                    ></StyledInputBox>
                    <SimpleButton
                        buttonWidth='100%'
                        buttonHeight='var(--input_and_button_hieght)'
                        fontSize='.95em'
                        onClickCallback={(event) => {
                            history.push({
                                pathname: `/join`,
                                state: {
                                    roomName: roomNameInputValue,
                                    hostName: undefined,
                                    userName: undefined,
                                    isUserHost: true,
                                    isUserSeeAnimationsOnHomePage: true,
                                    isUserComingFromHomePage: true,
                                    isUserComingFromJoinPage: false,
                                    isUserComingFromRoomPage: false,
                                },
                            });
                        }}
                        variants={variantsOfSimpleButton}
                    >
                        Make New Room
                    </SimpleButton>
                </AddNewRoomFormContent>
            </AddNewRoomFormWrapper>
        </AddNewRoomDiv>
    );
};

export default AddNewRoomComponent;

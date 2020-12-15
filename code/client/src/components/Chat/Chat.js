import React from 'react';
import styled from 'styled-components';
import SimpleButton from '../SimpleButton/SimpleButton';
import { FaRegPaperPlane } from 'react-icons/fa';
import InputBox from '../InputBox/InputBox';
import Message from '../Message/Message';

const Wrapper = styled.div`
    --input_and_button_section_height: 75px;
    --messages_section_height: calc(
        100% - var(--input_and_button_section_height)
    );
    /* border: 4px solid #dd77aa; */
    width: 100%;
    height: 100%;
`;

const MessagesSection = styled.section`
    /* border: 2px solid #bb11aa; */
    width: 100%;
    height: var(--messages_section_height);

    overflow-y: scroll;
`;

const InputAndButtonSection = styled.section`
    /* border: 2px solid #c1dd1a; */
    width: 100%;
    height: var(--input_and_button_section_height);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const JoinButton = styled(SimpleButton)`
    display: flex;
    justify-content: center;
    align-items: center;

    /* box-shadow: 3px 2px 3px 1px rgba(0, 0, 0, 0.2); */
`;

const IconSpan = styled.span`
    /* background-color: #667; */

    width: 22px;
    height: 22px;
    padding-left: 5px;

    font-size: 1.1em;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Chat = () => {
    const messages = [
        {
            messageID: 1,
            userName: 'Filip Filipovic',
            isCurrentUser: true,
            content: 'Hello everyone!!!',
            time: '10:43',
        },
        {
            messageID: 2,
            userName: 'Wes Bos',
            isCurrentUser: false,
            content: 'Hi',
            time: '10:43',
        },
        {
            messageID: 3,
            userName: 'Aleksandar Tatic',
            isCurrentUser: false,
            content: 'Heey! Welcome!',
            time: '10:43',
        },
        {
            messageID: 4,
            userName: 'Pera',
            isCurrentUser: false,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            time: '10:59',
        },
        {
            messageID: 5,
            userName: 'Fica',
            isCurrentUser: true,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            time: '10:59',
        },
    ];
    return (
        <Wrapper>
            <MessagesSection>
                {messages.map((message) => (
                    <Message
                        {...message}
                        key={message.messageID}
                        currentUserBackgroundColor='#3182ce'
                        otherUserBackgroundColor='#f9f9f9'
                        currentUserColor='#fff'
                        otherUserColor='#2b517f'
                    />
                ))}
            </MessagesSection>
            <InputAndButtonSection>
                <InputBox
                    inputWrapperWidth='70%'
                    inputBoxWidth='100%'
                    inputBoxHeight='40px'
                    inputPlaceHolder='Type Your Message'
                    textOverInput=''
                    onChangeCallback={() => {}}
                />
                <JoinButton
                    buttonWidth='25%'
                    buttonHeight='40px'
                    onClickCallback={() => {}}
                >
                    Send
                    <IconSpan>
                        <FaRegPaperPlane />
                    </IconSpan>
                </JoinButton>
            </InputAndButtonSection>
        </Wrapper>
    );
};

export default Chat;

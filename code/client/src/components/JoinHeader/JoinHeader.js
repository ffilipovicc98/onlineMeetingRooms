import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SimpleButton from '../SimpleButton/SimpleButton';
import { BsArrowLeftShort } from 'react-icons/bs';
import RoomNameAndHostText from '../RoomNameAndHostText/RoomNameAndHostText';

const Header = styled.header`
    --header_height: 150px;
    --back_button_height: 40px;
    --border_radius: 5px;

    /* background-color: #939; */

    position: fixed;
    top: 30px;
    left: 30px;

    min-width: 400px;
    height: var(---header_height);
`;

const BackButton = styled(SimpleButton)`
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 3px 2px 3px 1px rgba(0, 0, 0, 0.2);
`;

const IconSpan = styled.span`
    /* background-color: #667; */

    width: 22px;
    height: 22px;

    font-size: 1.5em;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderContainer = styled.div`
    background-color: #3182ce;
    height: calc(var(--header_height) - var(--back_button_height));

    overflow: hidden;
    border-top-left-radius: 0;
    border-top-right-radius: var(--border_radius);
    border-bottom-left-radius: var(--border_radius);
    border-bottom-right-radius: var(--border_radius);

    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.15);
`;

const Content = styled.div`
    background-color: #f9f9f9;
    border-top-left-radius: var(--border_radius);
    border-top-right-radius: 0px;
    border-bottom-left-radius: var(--border_radius);
    border-bottom-right-radius: 0px;
    overflow: hidden;
    height: 100%;
    margin-left: 12px;

    display: flex;
    /* justify-content: center; */
    align-items: center;
`;

const JoinHeader = (props) => {
    const history = useHistory();
    return (
        <Header>
            <BackButton
                buttonWidth='80px'
                buttonHeight='var(--back_button_height)'
                fontSize=''
                borderTopLeftRadius='var(--border_radius)'
                borderTopRightRadius='var(--border_radius)'
                borderBottomLeftRadius='0px'
                borderBottomRightRadius='0px'
                onClickCallback={() => {
                    history.push({
                        pathname: `/`,
                        state: {},
                    });
                }}
            >
                <IconSpan>
                    <BsArrowLeftShort />
                </IconSpan>
                Back
            </BackButton>
            <HeaderContainer>
                <Content>
                    <RoomNameAndHostText
                        roomName={props.roomName}
                        hostName={props.hostName}
                    />
                </Content>
            </HeaderContainer>
        </Header>
    );
};

export default JoinHeader;

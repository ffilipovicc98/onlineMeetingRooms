import React from 'react';
import { motion } from 'framer-motion';
import SimpleButton from '../SimpleButton/SimpleButton';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledListElement = styled(motion.div)`
    /* background: rgb(165, 91, 91); */
    /* border: 3px red solid; */
    width: 90%;
    height: 15%;
    border-radius: 3px;
    overflow: hidden;
    background: #f2f2f2;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);

    /* flex properties as parent */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const transition = { type: 'spring', duration: 1, bounce: 0.3 };

const variantsOfStyledListElement = {
    open: { scale: 1, x: 0, opacity: 1, transition: transition },
    close: { scale: 0.9, x: 25, opacity: 0, transition: transition },
};

/*********************************************************************************/

const StyledLeftLineSection = styled.section`
    background: #3182ce;
    width: 2%;
    height: 100%;
`;

/*********************************************************************************/

const ContentSection = styled.section`
    /* background: rgb(49, 60, 148); */

    color: #2b517f;
    width: 80%;
    height: 100%;

    /* flex properties as parent */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
`;

const RoomNameText = styled.h3`
    font-size: 1.05em;
    font-weight: 500;
`;

const HostNameText = styled.p`
    font-size: 1em;
    font-weight: 300;
`;

const HostNameTextItalic = styled.span`
    font-style: italic;
`;

const ButtonSection = styled.section`
    /* background: rgb(60, 74, 182); */

    width: 18%;
    height: 100%;

    /* flex properties as parent */
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const AvailibaleRoomsListElement = ({ roomID, roomName, hostName }) => {
    const history = useHistory();
    return (
        <StyledListElement key={roomID} variants={variantsOfStyledListElement}>
            <StyledLeftLineSection />
            <ContentSection>
                <RoomNameText>{roomName}</RoomNameText>
                <HostNameText>
                    Host: <HostNameTextItalic>{hostName}</HostNameTextItalic>
                </HostNameText>
            </ContentSection>
            <ButtonSection>
                <SimpleButton
                    buttonWidth='83%'
                    buttonHeight='43%'
                    fontSize='0.8em'
                    onClickCallback={() => {
                        history.push({
                            pathname: `/join`,
                            state: {
                                roomName,
                            },
                        });
                    }}
                >
                    Join
                </SimpleButton>
            </ButtonSection>
        </StyledListElement>
    );
};

export default AvailibaleRoomsListElement;

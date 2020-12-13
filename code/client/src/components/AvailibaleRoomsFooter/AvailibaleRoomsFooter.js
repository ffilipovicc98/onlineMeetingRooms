import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Footer = styled(motion.footer)`
    /* background: rgb(57, 141, 134); */
    width: 100%;
    height: 10%;

    /* flex properties as parent */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const variantsOfFooter = {
    open: { opacity: 1 },
    close: { opacity: 0 },
};

/************************************************************************/

const FooterControls = styled.div`
    /* background: rgb(156, 55, 151); */
    width: 50%;

    /* flex properties as parent */
    display: flex;
    justify-content: center;
`;

const LeftSection = styled.section`
    /* background-color: rgb(236, 97, 97); */
    width: 40%;

    /* flex properties as parent */
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const MiddleSection = styled.section`
    /* background-color: rgb(0, 83, 44); */
    width: 5%;

    /* flex properties as parent */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RightSection = styled.section`
    /* border: solid 1px rgb(100, 100, 100); */
    width: 40%;
    color: #2b517f;

    /* flex properties as parent */
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
`;

const Icon = styled.div`
    color: #2b517f;
    /* border: 1px solid red; */

    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-self: flex-end;
`;

const Text = styled.p`
    color: #2b517f;
    /* border: 1px solid green; */
    align-self: flex-end;
`;

const AvailibaleRoomsFooter = () => {
    return (
        <Footer variants={variantsOfFooter}>
            <FooterControls>
                <LeftSection>
                    <Icon>
                        <BsChevronLeft />
                    </Icon>
                    <Text>Back</Text>
                </LeftSection>

                <MiddleSection>
                    <Icon>|</Icon>
                </MiddleSection>

                <RightSection>
                    <Text>Next</Text>
                    <Icon>
                        <BsChevronRight />
                    </Icon>
                </RightSection>
            </FooterControls>
        </Footer>
    );
};

export default AvailibaleRoomsFooter;

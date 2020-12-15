import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    /* border: 5px solid #677aaa; */

    width: ${(props) => props.sectionWidth || '100%'};
    height: ${(props) => props.sectionHeight || '400px'};
`;

const StyledH1 = styled.h1`
    color: #2b517f;
    padding-left: 25px;

    width: 100%;
    height: 7%;

    font-size: ${(props) => props.textOverFontSize || '1.5em'};
    font-weight: ${(props) => props.textOverFontWeight || '300'};
`;

const Container = styled.div`
    /* border: solid 5px green; */
    width: 100%;
    height: 93%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainBox = styled.div`
    background-color: #fff;
    /* border: solid 1px #3182cb; */
    border-radius: 5px;

    box-shadow: -2px 2px 3px 2px rgba(0, 0, 0, 0.2);

    width: 95%;
    height: 95%;

    /* display: flex; */
    padding: 0px 20px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const SectionWithBoxAndTextOver = (props) => {
    const {
        children,
        textOver,
        textOverFontSize,
        textOverFontWeight,
        sectionWidth,
        sectionHeight,
    } = props;
    return (
        <Wrapper {...{ sectionWidth, sectionHeight }}>
            <StyledH1 {...{ textOverFontSize, textOverFontWeight }}>
                {textOver}
            </StyledH1>
            <Container>
                <MainBox>{children}</MainBox>
            </Container>
        </Wrapper>
    );
};

export default SectionWithBoxAndTextOver;

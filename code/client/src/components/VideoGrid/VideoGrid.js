import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import CircleNameInitials from '../CircleNameInitials/CircleNameInitials';

const VideoGrid = (props) => {
    const { users } = props;
    let scalingFactor;
    const numberOfUsers = users.length;
    if (numberOfUsers > 0 && numberOfUsers <= 2) {
        scalingFactor = 0.5;
    } else if (numberOfUsers > 2 && numberOfUsers <= 9) {
        scalingFactor = 0.33;
    } else {
        scalingFactor = 0.25;
    }
    return (
        <AspectRatioContainer>
            <AspectRatio_16_9_FIX>
                {users.map((user) => (
                    <StyledVideoBox
                        key={user.userID}
                        width={`${scalingFactor * 90}%`}
                        height={`${scalingFactor * 90}%`}
                        drag={true}
                        dragConstraints={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.5}
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        whileTap={{ scale: 0.66 }}
                    >
                        <CircleNameInitials
                            name={user.userName}
                            width={`${40}%`}
                            height={`${(40 * 16) / 9}%`}
                            fontSize={`${scalingFactor * 15}em`}
                        />
                    </StyledVideoBox>
                ))}
            </AspectRatio_16_9_FIX>
        </AspectRatioContainer>
    );
};

const StyledVideoBox = styled(motion.div)`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.15);

    border-radius: 3px;
    background-color: #f9f9f9;
    color: #2b517f;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const AspectRatioContainer = styled.div`
    /* background-color: orangered; */
    position: relative;
    width: 100%;
    width: 100%;
    padding-bottom: 56.25%;
    /* flex-shrink: 0; */
`;

const AspectRatio_16_9_FIX = styled.div`
    /* border: 3px solid #a0a; */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

// const VideoBox = (props) => {
//     return <StyledVideoBox {...props}>{props.userID}</StyledVideoBox>;
// };

const Video2x2Grid = (props) => {};

const Video3x3Grid = (props) => {};

const Video4x4Grid = (props) => {};

export default VideoGrid;

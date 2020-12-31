import { motion } from 'framer-motion';
import React from 'react';
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';
import { FaVideo, FaVideoSlash } from 'react-icons/fa';
import styled from 'styled-components';
import CircleNameInitials from '../CircleNameInitials/CircleNameInitials';
import Video from '../Video/Video';

const VideoGrid = (props) => {
    const { users } = props;
    let scalingFactor;
    let initialsScalingFactor;
    let initialsFontScaling;
    const numberOfUsers = users.length;
    if (numberOfUsers === 1) {
        scalingFactor = 0.8;
        initialsScalingFactor = 40;
        initialsFontScaling = 12;
    } else if (numberOfUsers > 1 && numberOfUsers <= 4) {
        scalingFactor = 0.5;
        initialsScalingFactor = 40;
        initialsFontScaling = 7.5;
    } else if (numberOfUsers > 4 && numberOfUsers <= 9) {
        scalingFactor = 0.33;
        initialsScalingFactor = 40;
        initialsFontScaling = 4.5;
    } else {
        scalingFactor = 0.25;
        initialsScalingFactor = 30;
        initialsFontScaling = 2.5;
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
                        {user.isVideoEnabled && user.stream ? (
                            <Video user={user} />
                        ) : (
                            <CircleNameInitials
                                name={user.userName}
                                width={`${initialsScalingFactor}%`}
                                height={`${(initialsScalingFactor * 16) / 9}%`}
                                fontSize={`${initialsFontScaling}em`}
                            />
                        )}
                        <StyledVideoBoxNameAndIcons>
                            <StyledVideoBoxName>
                                {user.userName}
                            </StyledVideoBoxName>
                            <StyledVideoBoxIcons>
                                <IconSpan isEnabled={user.isAudioEnabled}>
                                    {user.isAudioEnabled ? (
                                        <BsFillMicFill />
                                    ) : (
                                        <BsFillMicMuteFill />
                                    )}
                                </IconSpan>
                                <IconSpan isEnabled={user.isVideoEnabled}>
                                    {user.isVideoEnabled ? (
                                        <FaVideo />
                                    ) : (
                                        <FaVideoSlash />
                                    )}
                                </IconSpan>
                            </StyledVideoBoxIcons>
                        </StyledVideoBoxNameAndIcons>
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
    overflow: hidden;
    background-color: #f9f9f9;
    color: #2b517f;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledVideoBoxNameAndIcons = styled.div`
    background-color: #2b517f;
    color: #f9f9f9;
    height: 35px;

    border-top-right-radius: 5px;

    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
`;

const StyledVideoBoxName = styled.p`
    /* background-color: #b99; */
    padding-right: 10px;
`;

const StyledVideoBoxIcons = styled.div`
    /* background-color: #9af; */
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconSpan = styled.span`
    background-color: ${(props) => (props.isEnabled ? '#08af07' : '#e73a38')};
    border-radius: 50px;
    padding: 7px;
    margin: 0px 3px;
    width: 25px;
    height: 25px;

    font-size: 0.9em;

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

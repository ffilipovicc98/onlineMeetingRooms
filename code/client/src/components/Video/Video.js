import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Video = ({
    userName,
    userID,
    isHost,
    peerID,
    isAudioEnabled,
    isVideoEnabled,
    peer,
    stream,
}) => {
    console.log('Video', stream);
    const videoRef = useRef();
    useEffect(() => {
        videoRef.current.srcObject = stream;
        return () => {};
    }, []);
    return (
        <StyledVideo
            ref={videoRef}
            onLoadedMetadata={() => {
                videoRef.current.play();
            }}
        />
    );
};

export default Video;

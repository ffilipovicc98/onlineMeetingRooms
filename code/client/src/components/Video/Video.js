import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Video = ({ user, isCurrentUserVideo }) => {
    const {
        userName,
        userID,
        isHost,
        peerID,
        isAudioEnabled,
        isVideoEnabled,
        peer,
        stream,
    } = user;
    console.log('Video', {
        userName,
        userID,
        isHost,
        peerID,
        isAudioEnabled,
        isVideoEnabled,
        peer,
        stream,
    });
    const videoRef = useRef();
    useEffect(() => {
        console.log(stream);
        videoRef.current.srcObject = stream;
        videoRef.current.muted = isCurrentUserVideo ? true : !isAudioEnabled;
        videoRef.current.addEventListener('loadedmetadata', () => {
            videoRef.current.play();
        });

        return () => {};
    }, [isAudioEnabled, isCurrentUserVideo, stream, videoRef]);
    return (
        <StyledVideo
            ref={videoRef}
            // onLoadedMetadata={() => {
            //     console.log('videoRef', videoRef);
            // }}
        />
    );
};

export default Video;

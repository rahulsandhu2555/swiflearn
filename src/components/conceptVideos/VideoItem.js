import React from "react";
import styled from "styled-components";

function VideoItem(props){
    return(
        <VideoContainer>
            <iframe src={props.src}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    title='video'
                    X-Frame-Options= 'sameorigin'
                    style={{
                        position: "relative",
                        top: 0,
                        left: 0,
                        width: "250px",
                        height: "150px",
                        borderRadius: '8px',
                    }}
            />
        </VideoContainer>
    )
}
const VideoContainer = styled.div`
    display:flex;
    padding:5px;
    background-color:white;
    border: 1px solid grey;
    border-radius: 8px;
`;
export default VideoItem
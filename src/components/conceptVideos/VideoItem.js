import React, {Fragment} from "react";
import styled from "styled-components";

function VideoItem(){
    return(
        <Fragment>
            <VideoContainer>
                <h1>Video</h1>
                <h6>Video</h6>
            </VideoContainer>
        </Fragment>
    )
}
const VideoContainer = styled.div`
    display:flex;
    padding:50px;
    border: 1px solid grey;
    border-radius: 8px;
`;
export default VideoItem
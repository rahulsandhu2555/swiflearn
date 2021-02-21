import React, {Fragment} from 'react';
import styled from "styled-components";
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import VideoItem from "./VideoItem";

function ConceptVideos(){
    return(
        <Fragment>
            <h1>Concept Videos</h1>
            <h6>Select a number</h6>
            <VideosSection>
                <ChevronLeftOutlinedIcon/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <ChevronRightOutlinedIcon/>
            </VideosSection>
        </Fragment>

    )
}
const VideosSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
export default ConceptVideos
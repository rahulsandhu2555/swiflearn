import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import VideoItem from "./VideoItem";

function ConceptVideos({ classId, slides }){
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(slides.length > 4 ? 4 : slides.length-1)
    const [translate, setTranslate] = useState(0);
    const nextSlide = () => {
        if(last < slides.length-1){
            setFirst(first=> first+1);
            setLast(last=> last+1);
            setTranslate(-50);
        }
    };
    const prevSlide = () => {
        if(first>0){
            setFirst(first=>first-1);
            setLast(last=>last-1);
            setTranslate(50);
        }
    };
    useEffect(()=>{
        setFirst(0);
        setLast(slides.length > 4 ? 4 : slides.length-1);
    },[classId, slides.length])
    return(
        <VideosContainer>
            <TitleSection>
                <Title>Concept Videos</Title>
                <Description>Select a number</Description>
            </TitleSection>

            <VideosSection>
                <ChevronLeftOutlinedIcon onClick={prevSlide} style={{cursor:'pointer', padding:'5px', borderRadius:'50%', border:'1px solid #C0C0C0'}}/>
                <Slides>
                    {
                        slides.map((slide, index) => {
                            if(index>= first && index <= last){
                                return (
                                    <VideoContainer BoxId={index-first} TranslateValue={translate}>
                                        <VideoItem src={slides[index].video}/>
                                    </VideoContainer>
                                )
                            }else {
                                return (
                                    <VideoContainer BoxId={-1}>
                                    </VideoContainer>
                                )
                            }
                        })
                    }
                </Slides>
                <ChevronRightOutlinedIcon onClick={nextSlide} style={{cursor:'pointer', padding:'5px', borderRadius:'50%', border:'1px solid #C0C0C0'}}/>
            </VideosSection>
        </VideosContainer>

    )
}
const VideosContainer = styled.div`
    display:flex;
    width:90vw;
    margin: 2rem 0;
    flex-direction:column;
`;
const TitleSection = styled.div`
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    margin-left: 5vw;
`;
const Title = styled.div`
    font-size: 2rem;
    color: #A0A0A0;
`;
const Description = styled.div`
    font-size: .75rem;
    padding: 1rem 0;
    color: #C0C0C0;
`;
const VideosSection = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
`;
const VideoContainer = styled.div`
    transition: transform 1s, z-index 1s; 
    ${(props) => props.BoxId===-1 && `
        transform: matrix(0, 0, 0, 0, 0, 0);
    `}
    ${(props) => props.BoxId===0 && `
        z-index:0;
        margin-left: -50px;
        margin-right: -50px;
        transform: matrix(0.8, 0, 0, 0.8, 0, 0);
    `}
    ${(props) => props.BoxId===1 && `
        z-index: 10;
        margin-left: -50px;
        margin-right: -50px;
        transform: matrix(0.9, 0, 0, 0.9, ${props.TranslateValue}, 0);
    `}
    ${(props) => props.BoxId===2 && `
        z-index: 20;
        margin-left: -50px;
        margin-right: -50px;
        transform: matrix(1, 0, 0, 1, ${props.TranslateValue}, 0);
    `}
    ${(props) => props.BoxId===3 && `
        z-index: 10;
        margin-left: -50px;
        margin-right: -50px;
        transform: matrix(0.9, 0, 0, 0.9, ${props.TranslateValue}, 0);
    `}
    ${(props) => props.BoxId===4 && `
        z-index: 0;
        margin-left: -50px;
        margin-right: -50px;
        transform: matrix(0.8, 0, 0, 0.8, 0, 0);
    `}
`;
const Slides = styled.div`
    display:flex;
    width:80%;
    justify-content:center;
    margin: 0 100px 0 100px;
`;
export default ConceptVideos
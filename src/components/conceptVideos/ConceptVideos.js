import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import VideoItem from "./VideoItem";

function ConceptVideos({ classId, slides }){
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(slides.length > 4 ? 4 : slides.length-1)
    const [translate, setTranslate] = useState(150);
    const nextSlide = () => {
        if(last < slides.length-1){
            setFirst(first=> first+1);
            setLast(last=> last+1);
        }
    };
    const prevSlide = () => {
        if(first>0){
            setFirst(first=>first-1);
            setLast(last=>last-1);
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
                <ChevronLeftOutlinedIcon onClick={prevSlide} style={{zIndex:'30',cursor:'pointer', position:'absolute', left:'100px', padding:'5px', borderRadius:'50%', border:'1px solid #C0C0C0'}}/>
                <Slides>
                    {
                        slides.map((slide, index) => {
                            if(index>= first && index <= last){
                                return (
                                    <VideoContainer boxId={index-first} styleId={index-first} translateValue={translate}>
                                        <VideoItem src={slides[index].video}/>
                                    </VideoContainer>
                                )
                            }else {
                                return (
                                    <>
                                    </>
                                )
                            }
                        })
                    }
                </Slides>
                <ChevronRightOutlinedIcon onClick={nextSlide} style={{zIndex:'30', cursor:'pointer', padding:'5px', right:'100px', position:'absolute', borderRadius:'50%', border:'1px solid #C0C0C0'}}/>
            </VideosSection>
        </VideosContainer>

    )
}
const VideosContainer = styled.div`
    display:flex;
    width:90vw;
    margin: 2rem 0;
    height: 230px;
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
    justify-content:center;
    align-items:center;
    position:relative;
    height:200px;
`;
const VideoContainer = styled.div`
    transition: transform 1s, z-index 1s;
    position:absolute;
    ${(props) => props.styleId===0 && `
        z-index:0;
    `}
    ${(props) => props.styleId===1 && `
        z-index: 10;
    `}
    ${(props) => props.styleId===2 && `
        z-index: 20;
    `}
    ${(props) => props.styleId===3 && `
        z-index: 10;
    `}
    ${(props) => props.styleId===4 && `
        z-index: 0;
    `}
    ${(props) => props.boxId===-1 && `
        transform: matrix(0, 0, 0, 0, 0, 0);
    `}
    ${(props) => props.boxId===0 && `
        z-index:0;
        transform: matrix(0.8, 0, 0, 0.8, 0, 0);
    `}
    ${(props) => props.boxId===1 && `
        z-index: 10;
        transform: matrix(0.9, 0, 0, 0.9, ${props.translateValue}, 0);
    `}
    ${(props) => props.boxId===2 && `
        z-index: 20;
        transform: matrix(1, 0, 0, 1, ${2*props.translateValue}, 0);
    `}
    ${(props) => props.boxId===3 && `
        z-index: 10;
        transform: matrix(0.9, 0, 0, 0.9, ${3*props.translateValue}, 0);
    `}
    ${(props) => props.boxId===4 && `
        z-index: 0;
        transform: matrix(0.8, 0, 0, 0.8, ${4*props.translateValue}, 0);
    `}
`;
const Slides = styled.div`
    display:flex;
    width:80%;
    justify-content:center;
    // margin: 0 100px 0 100px;
    position:relative;
    top:-70px;
    margin-left:-600px;
`;
export default ConceptVideos
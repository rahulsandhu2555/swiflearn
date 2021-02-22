import React from 'react';
import Header from "../../components/Header";
import ConceptVideos from "../../components/conceptVideos/ConceptVideos";
import LiveClasses from "../../components/liveClasses/LiveClasses";
import styled from "styled-components";

function HomeView({ classId, slides}){
    return(
        <HomeContainer>
            <Header/>
            <ConceptVideos classId={classId} slides={slides}/>
            <LiveClasses classId={classId}/>
        </HomeContainer>
    )
}
const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export default HomeView
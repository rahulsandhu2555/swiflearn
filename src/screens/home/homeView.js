import React, {Fragment} from 'react';
import Header from "../../components/Header";
import ConceptVideos from "../../components/conceptVideos/ConceptVideos";
import LiveClasses from "../../components/liveClasses/LiveClasses";

function HomeView(){
    return(
        <Fragment>
            <Header/>
            <ConceptVideos/>
            <LiveClasses/>
        </Fragment>
    )
}
export default HomeView
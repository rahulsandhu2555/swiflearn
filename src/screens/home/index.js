import React from 'react';
import HomeView from "./homeView";
import { SliderData } from "../../services/videosList"

function Home(props){
    const classId = props.match.params.classId;
    let videosList = [];
    if (parseInt(classId)===5){
        videosList = SliderData["class5"]
    }else if (parseInt(classId)===6){
        videosList = SliderData["class6"]
    }else if (parseInt(classId)===7){
        videosList = SliderData["class7"]
    }else if (parseInt(classId)===8){
        videosList = SliderData["class8"]
    }else if (parseInt(classId)===9){
        videosList = SliderData["class9"]
    }else{
        videosList = []
    }

    return(
        <HomeView classId={classId} slides={videosList}/>
    )
}
export default Home
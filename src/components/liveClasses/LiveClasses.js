import React from 'react';
import styled from "styled-components";
import {useHistory} from "react-router";

function LiveClasses({classId}){
    const history = useHistory();
    const classes = [5, 6, 7, 8, 9,];
    return(
        <ClassSelectionContainer>
            <TitleSection>
                <Title>Live Classes</Title>
                <Description>Select a class</Description>
            </TitleSection>
            <SelectClassBox>
                {
                    classes.map((x)=>{
                        return (
                            x.toString() === classId ?
                                <ClassNumberActive key={x} onClick={()=> history.push(`/home/${x}`)}>
                                    {x}
                                </ClassNumberActive>
                                :
                                <ClassNumber key={x} onClick={()=> history.push(`/home/${x}`)}>
                                    {x}
                                </ClassNumber>
                        )
                    })
                }
            </SelectClassBox>
        </ClassSelectionContainer>

    )
}
const ClassSelectionContainer = styled.div`
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
const SelectClassBox = styled.div`
    display: flex;
    border: 1px solid grey;
    margin: 2rem 0;
    border-radius: 8px;
    align-self: center;
    align-items:center;
    width: 70vw;
    padding: 1.5rem 0;
`;
const ClassNumberActive = styled.div`
    color: #A0A0A0;
    cursor: pointer;
    margin: 0 20px 15px 20px;
    padding: 0 20px;
    border-radius: 4px;
    height: 4px;
    box-shadow: 0 20px 0 0 #A0A0A0;
`;
const ClassNumber = styled.div`
    color: #A0A0A0;
    cursor: pointer;
    padding-left: 40px;
    padding-right: 40px;
`;
export default LiveClasses
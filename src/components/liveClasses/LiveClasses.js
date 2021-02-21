import React, {Fragment} from 'react';
import styled from "styled-components";

function LiveClasses(){
    return(
        <Fragment>
            <h1>Live Classes</h1>
            <h6>Select a class</h6>
            <SelectClassBox>
                <ClassNumber>
                    5
                </ClassNumber>
                <ClassNumber>
                    6
                </ClassNumber>
                <ClassNumber>
                    7
                </ClassNumber>
                <ClassNumber>
                    8
                </ClassNumber>
                <ClassNumber>
                    9
                </ClassNumber>
            </SelectClassBox>
        </Fragment>

    )
}
const SelectClassBox = styled.div`
    display:flex;
    justify-content:center;
    border: 1px solid grey;
    border-radius:8px;
    margin:0 30% 0 30%;
`;
const ClassNumber = styled.div`
    padding:20px;
`;
export default LiveClasses
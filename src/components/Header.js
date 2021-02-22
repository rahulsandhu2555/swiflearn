import React from 'react';
import styled from "styled-components";
import PulseLoader from "./pulseLoader/PulseLoader";

function Header(){
    return(
        <HeaderContainer>
            <LiveButton>
                <UpcomingText>
                    Upcoming
                    <PulseLoader/>
                </UpcomingText>
                <MenuItem>
                    Live Consultation
                </MenuItem>
            </LiveButton>
            <MenuItem>
                Buy Plans
            </MenuItem>
            <MenuItem>
                View Plans
            </MenuItem>
            <Button>
                Log In
            </Button>
        </HeaderContainer>
    )
}
const HeaderContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding: .75rem 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const UpcomingText = styled.div`
    display:flex;
    font-size: .75rem;
    align-items:center;
    color: #C0C0C0;
    padding-left:1rem;
    margin-bottom:5px;
`;
const LiveButton = styled.div`
    display:flex;
    margin-top:-15px;
    flex-direction:column;
    align-items:flex-start;
    font-size: 1rem;
`;
const MenuItem = styled.div`
    display:flex;
    font-size: 1rem;
    align-content:center;
    padding: 0 1em;
    color: #A9A9A9;
    cursor:pointer;
`;
const Button = styled.button`
    font-size: 1rem;
    cursor:pointer;
    color: white;
    margin: 1rem;
    padding: 0.25em 2em;
    border: 2px solid #A9A9A9;
    border-radius: 999999px;
    outline:none;
    background-image: linear-gradient(to right,red, #FF0099);
`;
export default Header
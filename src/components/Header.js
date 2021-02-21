import React, {Fragment} from 'react';
import styled from "styled-components";

function Header(){
    return(
        <Fragment>
            <HeaderContainer>
                <LiveButton>
                    upcoming
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
        </Fragment>

    )
}
const HeaderContainer = styled.div`
    display:flex;
    justify-content:flex-end;
`;
const LiveButton = styled.div`
    display:flex;
    flex-direction:column;
    font-size: 1rem;
`;
const MenuItem = styled.div`
    font-size: 1rem;
    padding:1.5rem;
`;
const Button = styled.button`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
export default Header
import styled from "styled-components"

export const ImagemLogoHeader = styled.img`
    width: ${props => props.width || '11rem'};
    cursor: pointer;
    position: ${props => props.position};
    //left: ${props => props.left};
    /* left: 36rem;

    @media (min-width:1400px ) {
        left: 45rem;
    } */
    
`
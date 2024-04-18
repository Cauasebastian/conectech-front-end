import styled from "styled-components"

export const HeaderDiv = styled.header`
    width: 100%;
    padding: 1.2rem;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: ${props => props.justifyContent || 'space-around'};
    align-items: center;
    position:${props => props.position} ;
    z-index: 1000;
    background-color: #003262;
    border-bottom: 1px solid #074261;
    
    
`






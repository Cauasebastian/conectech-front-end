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
    background-color: ${props => props.bgColor || '#003262' };
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    
    
`






import styled from 'styled-components'

export const ItemHeader = styled.a`
    cursor: pointer;
    color: #e1e1e1;
    white-space: nowrap;

    @media(max-width: 686px){
        display: none;
    }
    

    &:hover{
        color: #fff;
        
        
    }
`
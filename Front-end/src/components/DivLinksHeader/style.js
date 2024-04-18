import styled from 'styled-components'

export const ListaItensHeader = styled.div`
    display: flex;
    gap: 6rem;
    align-items: center;
    

    @media (max-width: 900px){
        gap: 2rem;
    }

    @media(max-width: 686px){
        display: none;
    }
    
    
`


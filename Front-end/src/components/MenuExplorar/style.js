import styled from 'styled-components'

export const ContainerExplorar = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 63rem;
    top: 7rem;

    @media (min-width: 1400px) {
        left: 72rem;
    }
    
`
export const TituloExplorar = styled.h3`
    
    font-family: "Poppins", sans-serif;
    color: #074261;
    
`

export const ItensExplorar = styled.div`

`

export const TituloItemExplorar = styled.h4`
    font-family: "Poppins", sans-serif;
    color: #074261;
`

export const DivItensExplorar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const ItemExplorar = styled.div`
    display: flex;
    flex-direction: column;
    border-radius:7.6px ;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    width: 18rem;
    justify-content: space-around;
    padding: 0.5rem 1rem;

    @media (min-width: 1400px) {
        width: 20rem;
    }
    
    
`
export const DivDadosItemExplorar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const DivDadosPessoais = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`
export const ImagemItemExplorar = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`
export const NomeItemExplorar = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
`

export const IconAdd = {
    style:{
        fontSize: 20,
        color: '#575757',
        cursor: 'pointer'
    }
}

export const DivTags = styled.div`
    display: flex;
    gap: 1rem;
`
export const ItemTag = styled.span`
    font-size: 0.7rem;
    font-family: "Poppins", sans-serif;
    background-color: #4A91A5;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border: none;
    border-radius: 13.4px;
`

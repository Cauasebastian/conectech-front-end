import styled from 'styled-components'

export const ContainerEventos = styled.div`
    position: absolute;
    top: 7rem;
    left: 8.5rem;
    display: flex;
    flex-direction: column;
    width: 40%;
`
export const DivEventos = styled.div`
    display: flex;
    gap: 1rem;
`

export const TituloEventos = styled.h3`
     font-family: "Poppins", sans-serif;
     
`
export const ItemEvento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const ImgEvento = styled.img`
    height: 9rem;
`
export const TituloEvento = styled.p`
 font-family: "Poppins", sans-serif;
 font-weight: 700;
`
export const DataEvento = styled.span`
     font-family: "Poppins", sans-serif;
     font-size: 0.9rem;
     color: #074261;
`
export const LocalEvento = styled.span`
     font-family: "Poppins", sans-serif;
     font-size: 1rem;
     color: #747688;
`
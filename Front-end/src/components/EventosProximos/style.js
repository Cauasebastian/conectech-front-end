import styled from 'styled-components'

export const ContainerEventos = styled.div`
    position: absolute;
    top: 7rem;
    left: 8.5rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    
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
    
    
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:15px ;
    padding-bottom: 0.8rem;
    cursor: pointer;
    height: 18rem;
    
`
export const ImgEvento = styled.img`
    height: 9rem;
`
export const TituloEvento = styled.p`
 font-family: "Poppins", sans-serif;
 font-weight: 700;
 height: 3rem;
 
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

export const IconCarrossel = {
    style:{
        color: "#4A91A5",
        position: "absolute",
        left: "53rem",
        top: "12rem",
        cursor: "pointer" 

    }
}
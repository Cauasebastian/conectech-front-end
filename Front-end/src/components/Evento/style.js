import styled from 'styled-components'

export const ContainerEvento = styled.div`
       display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:15px ;
    padding-bottom: 0.8rem;
    cursor: pointer;
    height: 18rem;
    width: 16rem;
`

export const ImagemEvento = styled.img`
    height: 9rem;
`

export const TituloEvento = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    height: 3rem;
    width: 18rem;
`

export const DataEvento = styled.span`
     font-family: "Poppins", sans-serif;
     font-size: 0.9rem;
     color: #074261;
`

export const DivLocalEvento = styled.div`
    display: flex;
    margin-top: 0.5rem;
    gap: 0.2rem;
`

export const LocalEvento = styled.span`
    font-family: "Poppins", sans-serif;
     font-size: 1rem;
     color: #747688;
`

export const IconsEvento = {
    IconMap:{
        color: '#B0B1BC',
        fontSize:'1.5rem'
    },
    IconSave:{
        color: '#4A91A5',
        fontSize:'1.5rem'
    }
}
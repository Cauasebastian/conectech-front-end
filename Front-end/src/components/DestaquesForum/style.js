import styled from "styled-components"

export const ContainerDestaquesForum = styled.div`
    
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 34rem;
    left: 8.5rem;
    width: 58%;
    
    
`
export const HeaderDestaques = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
export const TituloDestaques = styled.h3`
    font-family: "Poppins", sans-serif;
    color: #363636;
    
`

export const BotaoVerMais = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
    color: #747688;
    cursor: pointer;
`

export const DivPostsDestaquesForum = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ParteSuperiorPost = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
`

export const PostDestaques = styled.div`
    background-color: #fff;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:7.6px ;
    padding: 0.5rem 1rem;
`

export const ImagemPerfilPostDestaques = styled.img`
     width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`

export const NomeUserPostDestaques = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
`

export const TagPostDestaques = styled.span`
    font-size: 0.7rem;
    font-family: "Poppins", sans-serif;
    background-color: #4A91A5;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border: none;
    border-radius: 13.4px;
`

export const DescPostDestaques = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    width: 90%;
`

export const ImagemPostDestaques = styled.img`

`

export const ParteInferiorPost = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const DivInteracoes = styled.div`
    gap: 1rem;
    display: flex;
`
export const DivCurtidas = styled.div`
display: flex;
align-items: center;
gap: 0.2rem;
`

export const NumeroCurtidas = styled.p`
font-family: "Poppins", sans-serif;
font-size: 0.8rem;
`

export const DivComentarios = styled.div`
display: flex;
align-items: center;
gap: 0.2rem;
`

export const NumeroComentarios = styled.p`
font-family: "Poppins", sans-serif;
font-size: 0.8rem;
`

export const IconsPost = {
    style:{
        fontSize: 20,
        color: '#575757',
        cursor: 'pointer'
    },
    likeIcon:{
        fontSize: 20,
        color: '#dc2626',
        cursor: 'pointer'
    }

}


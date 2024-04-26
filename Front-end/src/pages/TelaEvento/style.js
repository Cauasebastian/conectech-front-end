import styled from 'styled-components'

export const DivSuperiorTelaEvento = styled.div`
  position: absolute;
  top: -2rem;
  
`

export const ImgSuperiorTelaEvento = styled.img`
    width: 100vw;
    z-index: -1;
`

export const DivTitleSupTelaEvento = styled.div`
   width: 100vw;
   display: flex;
   justify-content: space-around;
   gap: 39rem;
   position: absolute;
   top: 9rem;
   
`

export const DivTextTitleSupTelaEvento = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
`

export const TituloTextTitleSupTelaEvento = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: #FBFBFB;
    font-size: 1.2rem;
`

export const DivIconSave = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   cursor: pointer;
   width: 3rem;
   height: 3rem;
   background:#B8B8B8;
  
`

export const DivImagemTemaEvento = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15rem;
    left: 44rem;
    padding:0.7rem 3rem;
    border-radius: 10px;
   
`

export const ImagemTemaEvento = styled.img`
    width: 6rem;
`

export const Ico={
    IconReturn:{
        color:'#4A91A5',
        fontSize:'2.8rem',
        cursor: 'pointer'
    },
    IconSave: {
        color:'#1f77d7',
        fontSize:'1.3rem',
        cursor: 'pointer'
    },
    IconsInfo: {
        color:'#4A91A5',
        fontSize:'1.8rem',
        backgroundColor: '#E9F0F2',
        padding: '1rem',
        borderRadius: '10px'
    },
    IconInscrever: {
        color:'#fff',
        fontSize:'1.8rem',
    }
}

export const DivInformacoesEvento = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
    top: 30rem;
    position: absolute;
    margin: 0 auto;
`

export const TituloEvento = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
`

export const DivInfoGeraisEventos = styled.div`
    display: flex;
    gap: 7rem;
    justify-content: center;
    align-items:center;
    font-family: 'Montserrat', sans-serif;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
`

export const DivSectionInfoGeraisEventos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const TextSectionInfoGeraisEventos = styled.div`
    
`

export const TitlePrincipalSectionInfoGeraisEventos = styled.p`
    font-size: 1rem;
    font-weight: 500;
    
`
export const TitleSecundarioSectionInfoGeraisEventos = styled.p`
    color: #747688;
    font-size: 0.85rem;
    margin-top: -0.4rem;
`

export const DivCardOrganizadorEvento = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid  #DDDDDDC4 ;
    width: 60%;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
    border-radius: 10px;
   
`

export const DivInfoPessoaisCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
export const ImagemOrganizadorCard = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
`

export const TextInfoPessoaisCard = styled.div``

export const NomeOrganizador = styled.p``
export const TituloOrganizador = styled.p`
    color: #747688;
    font-size: 0.85rem;
    margin-top: -0.7rem;
`

export const BotaoSeguir = styled.a`
    margin-right: 1rem;
    background-color: #E9F0F2;
    padding: 0.7rem;
    border-radius: 10px;
    color: #4A91A5;
`

export const DescricaoEvento = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    font-family: 'Montserrat', sans-serif;
`

export const TituloDescricaoEvento = styled.p`
    margin-bottom: -0.3rem;
    font-size: 1rem;
    font-weight: 600;
`

export const TextDescricaoEvento = styled.p`

`

export const DivBotaoInscrever = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    
    align-items: center;
    gap: 1.7rem;
    background-color: #074261;
    padding: 0.3rem 2rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
    border-radius: 7px;
`

export const TextBotaoInscrever = styled.a`
    color: #FFFFFF;
    font-weight: 500;
`
import { TelaInicialDiv } from './style'
import Header from '../../components/Header'
import ImagemLogo from '../../components/ImagemLogo'
import PartePrincipal from '../../components/PartePrincipalInicial'
import ParteSecundaria from '../../components/ParteSecInicial'
import Footer from '../../components/Footer'
 import {useNavigate} from 'react-router-dom'

import Botao from '../../components/Botao'
import DivLinksHeader from '../../components/DivLinksHeader'
import { ItemHeader } from '../../components/LinksHeader/style'

const TelaInicial = ()=> {
     const navigate = useNavigate()
      const goToLoginPage = () => {
          navigate('/login')
      }
     const goToTelaCadastro = () => {
        navigate('/cadastro')
     }
  
    return(
        <TelaInicialDiv>
            <Header position='fixed' justifyContent='space-evenly' >
                <ImagemLogo onclick={() => {
                    navigate('/')
                }} caminhoImagem='images/img-logo.png'/>
                <DivLinksHeader>
                    <ItemHeader >Como funciona</ItemHeader>
                    <ItemHeader onClick={goToLoginPage}>Entrar</ItemHeader>
                </DivLinksHeader>
               
                <Botao onClick={goToTelaCadastro}   nome="Vamos começar"/>
            </Header>
            <PartePrincipal/>
            <ParteSecundaria/>
            <Footer/>
        </TelaInicialDiv>
    )
}

export default TelaInicial
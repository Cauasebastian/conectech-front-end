import { TelaInicialDiv } from './style'
import Header from '../../components/Header'
import ImagemLogo from '../../components/ImagemLogo'
import PartePrincipal from '../../components/PartePrincipalInicial'
import ParteSecundaria from '../../components/ParteSecInicial'
import Footer from '../../components/Footer'
import {useNavigate} from 'react-router-dom'

import LinksHeader from '../../components/LinksHeader'


const TelaInicial = ()=> {
     const navigate = useNavigate()
      const goToLoginPage = () => {
          navigate('/login')
      }
     const goToTelaCadastro = () => {
        navigate('/cadastro')
     }
  
    return(
        <>
        <div className='flex w-screen overflow-x-hidden flex-col bg-gradient-to-t from-[#00001d] to-[#003d71]'>
            <Header bgColor='bg-[#003d71]' >
                <ImagemLogo onclick={() => {
                    navigate('/')
                }} caminhoImagem='images/img-logo.png'/>
                <LinksHeader>
                    <a href="">Como funciona</a>
                    <a href="">Entrar</a>
                </LinksHeader>
                <a className='text-corTexto-100 text-lg flex sm:hidden fon' href="">Entrar</a>
                <button onClick={goToTelaCadastro}  className='conectech-button hidden sm:block'>Vamos começar</button>
               
                
            </Header>
            <PartePrincipal/>
            <ParteSecundaria/>
            <Footer/>
            
        </div>
        </>
    )
}

export default TelaInicial
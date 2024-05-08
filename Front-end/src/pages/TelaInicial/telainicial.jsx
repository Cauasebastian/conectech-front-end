
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
        <div className='flex w-full overflow-x-hidden flex-col bg-gradient-to-t from-[#00001d] to-[#003d71] '>
            <Header bgColor='bg-[#003d71]' gap='gap-20' gapMd='md:gap-0'>
                <ImagemLogo onclick={() => {
                    navigate('/')
                }} caminhoImagem='images/img-logo.png'/>
                <LinksHeader>
                    <a href="">Como funciona</a>
                    <a href="" onClick={goToLoginPage}>Entrar</a>
                </LinksHeader>
                <a onClick={goToLoginPage} className='text-corTexto-100 border-l-[#074261] text-lg flex sm:hidden' href="">Entrar</a>
                <button onClick={goToTelaCadastro}  className='conectech-button hidden sm:block enormes:text-xl'>Vamos começar</button>
               
                
            </Header>
            <PartePrincipal/>
            <ParteSecundaria/>
            <Footer/>
            
        </div>
        </>
    )
}

export default TelaInicial
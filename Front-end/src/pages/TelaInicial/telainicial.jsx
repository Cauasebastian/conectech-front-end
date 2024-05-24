
import Header from '../../components/Header'
import ImagemLogo from '../../components/ImagemLogo'
import PartePrincipal from '../../components/PartePrincipalInicial'
import ParteSecundaria from '../../components/ParteSecInicial'
import Footer from '../../components/Footer'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-scroll'

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
        
        <div className='  w-full h-full flex flex-col bg-gradient-to-t from-[#00001d] to-[#003d71] '>
            <Header bgColor='bg-[#003d71]' gap='gap-20' gapMd='md:gap-0'>
                <ImagemLogo onclick={() => {
                    navigate('/')
                }} caminhoImagem='images/img-logo.png'/>
                <LinksHeader>
                    <Link className='cursor-pointer' to='como-funciona' spy={true} smooth={true} offset={-100} duration={500}>Como funciona</Link>
                    <a className='cursor-pointer' onClick={goToLoginPage}>Entrar</a>
                </LinksHeader>
                <a onClick={goToLoginPage} className='text-corTexto-100 border-l-[#074261] text-lg flex sm:hidden' >Entrar</a>
                <button onClick={goToTelaCadastro}  className='conectech-button hidden sm:block 3xl:text-2xl '>Vamos começar</button>
                
            </Header>
            <PartePrincipal/>
            <ParteSecundaria/>
            <Footer/>
            
        </div>
        
    )
}

export default TelaInicial
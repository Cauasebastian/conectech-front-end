/* eslint-disable react/prop-types */
import { HeaderDiv, ImagemLogo, ListaItensHeader,  BotaoHamburguer } from './style'

import {useNavigate} from 'react-router-dom'
const Header = ({ position, children, justifyContent, caminhoImagem, widthLogo})=> {

    const navigate = useNavigate()
     const goToInitialPage = () => {
         navigate('/')
     }
    
    return(
        
             <HeaderDiv justifyContent={justifyContent}  position={position}>
                <ImagemLogo onClick={goToInitialPage} width={widthLogo} src={caminhoImagem}/>

                <ListaItensHeader>
                    {children}
                </ListaItensHeader>

                <BotaoHamburguer >
                    <img src='images/img-menu.svg'/>
                </BotaoHamburguer>
            </HeaderDiv>
        
       
    )
}

export default Header
/* eslint-disable react/prop-types */

import { ImagemLogoHeader } from './style'


const ImagemLogo = ({ widthLogo, caminhoImagem, onclick}) => {
   
    return(
        <ImagemLogoHeader onClick={onclick} width={widthLogo} src={caminhoImagem}/>
    )
}

export default ImagemLogo
/* eslint-disable react/prop-types */

import { ImagemLogoHeader } from './style'


const ImagemLogo = ({ widthLogo, caminhoImagem, onclick, position}) => {
   
    return(
        <ImagemLogoHeader onClick={onclick}  position={position} width={widthLogo} src={caminhoImagem}/>
    )
}

export default ImagemLogo
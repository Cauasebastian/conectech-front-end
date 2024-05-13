/* eslint-disable react/prop-types */




const ImagemLogo = ({ caminhoImagem, onclick}) => {
   
    return(
        <img onClick={onclick} src={caminhoImagem} className='w-36 cursor-pointer maiores:w-44'/>
    )
}

export default ImagemLogo
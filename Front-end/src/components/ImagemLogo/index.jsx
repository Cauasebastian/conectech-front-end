/* eslint-disable react/prop-types */




const ImagemLogo = ({ caminhoImagem, onclick }) => {
   
    return(
        <img onClick={onclick} src={caminhoImagem} className='w-36 cursor-pointer mp:w-32 lg:w-32 xl:w-36 2xl:w-36 3xl:w-52'/>
    )
}

export default ImagemLogo
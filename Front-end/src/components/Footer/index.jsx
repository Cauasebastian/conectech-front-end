import { ListaInformações, Informação, ImagemLogo } from "./style";

const Footer = () => {
    return(
            <div className="flex h-80 flex-col justify-center items-center text-center w-screen overflow-y-hidden bg-gradient-to-t from-[#015879] to-[#00132A]">
                <ListaInformações>
                    <Informação>Informações sobre</Informação>
                    <Informação>Informações sobre</Informação>
                    <Informação>Informações sobre</Informação>
                </ListaInformações>
                <ImagemLogo src="images/img-logo.png"/>
            </div>
            
        
    )
}

export default Footer
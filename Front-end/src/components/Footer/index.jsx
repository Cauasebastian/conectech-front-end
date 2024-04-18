import { ContainerFooter, ListaInformações, Informação, ImagemLogo } from "./style";

const Footer = () => {
    return(
        <ContainerFooter>
            <ListaInformações>
                <Informação>Informações sobre</Informação>
                <Informação>Informações sobre</Informação>
                <Informação>Informações sobre</Informação>
                <h1>Teste merge fork</h1>
            </ListaInformações>
            <ImagemLogo src="../../../public/images/img-logo.png"/>
        </ContainerFooter>
    )
}

export default Footer
import { ContainerFooter, ListaInformações, Informação, ImagemLogo } from "./style";

const Footer = () => {
    return(
        <ContainerFooter>
            <ListaInformações>
                <Informação>Informações sobre</Informação>
                <Informação>Informações sobre</Informação>
                <Informação>Informações sobre</Informação>
            </ListaInformações>
            <ImagemLogo src="images/img-logo.png"/>
        </ContainerFooter>
    )
}

export default Footer
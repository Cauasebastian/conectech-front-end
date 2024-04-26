/* eslint-disable react/prop-types */
import { ContainerEvento, DataEvento, DivLocalEvento, IconsEvento, ImagemEvento, LocalEvento, TituloEvento } from "./style"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {useNavigate} from 'react-router-dom'

const Evento = ({ imagem, titulo, data, local, totalParticipantes, organizador, descricaoEvento, fotoOrganizador}) => {

    
  
    const navigate = useNavigate();
    const goToTelaEvento = ()=> {
        const evento = {imagem, titulo, data, local, totalParticipantes, organizador, descricaoEvento, fotoOrganizador}
        navigate(`/evento`, {state: {evento}});
    }
    return(
        <ContainerEvento onClick={goToTelaEvento}>
            <ImagemEvento src={imagem}/>
            <TituloEvento>{titulo}</TituloEvento>
            <DataEvento>{data}</DataEvento>
            <DivLocalEvento>
                <FmdGoodOutlinedIcon sx={IconsEvento.IconMap}/>
                <LocalEvento>{local}</LocalEvento>
                <BookmarkBorderOutlinedIcon sx={IconsEvento.IconSave}/>
            </DivLocalEvento>   
        </ContainerEvento>
    )
}

export default Evento
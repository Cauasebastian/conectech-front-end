import Header from "../../components/Header"
import ImagemLogo from '../../components/ImagemLogo'
import Sidebar from '../../components/Sidebar'
import IconUser from '../../components/IconUser'
import { ContainerEvents,  DivContainerEvents, DivEvents,  DivNavbarEvents, Icons,  ItemRollEvents,  RollEvents, TextTituloEvents, TitleDivEvents,  TituloEvents } from "./style"
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {useNavigate} from 'react-router-dom'
import data from '../../../../events.json'
import Evento from "../../components/Evento"

const Eventos = () => {
    const interessesPessoais = ['Front-End', 'Back-End', 'Design', 'DevOps', 'Banco de dados']
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/home')
    }
    return(
        <>
            <Header bgColor='#fff' justifyContent='space-between' position='fixed'>
                    <Sidebar/>
                    <ImagemLogo position='relative'  caminhoImagem='images/img-logo-pree.png'/>
                    <IconUser/>
            </Header>
            <ContainerEvents>
                <DivNavbarEvents>
                    <TituloEvents>
                        <NavigateBeforeRoundedIcon onClick={goToHomePage} sx={Icons.IconReturn}/>
                        <TextTituloEvents>Eventos</TextTituloEvents>
                    </TituloEvents>
                    <RollEvents>
                        {interessesPessoais.map((interesse, index) => {
                            return(
                                <ItemRollEvents key={index}>{interesse}</ItemRollEvents>
                            )
                        })}
                    </RollEvents>
                </DivNavbarEvents>
                <DivContainerEvents>
                    <TitleDivEvents>Eventos relacionados</TitleDivEvents>
                    <DivEvents>
                        {data.map((evento) => {
                            return(
                                <Evento 
                                    key={evento.id} 
                                    imagem={evento.image} 
                                    titulo={evento.title} 
                                    data={evento.data} 
                                    local={evento.local}/>)
                        })}
                    </DivEvents>
                </DivContainerEvents>
            </ContainerEvents>
        </>
    )
}

export default Eventos
import Header from "../../components/Header"
import ImagemLogo from '../../components/ImagemLogo'
import Sidebar from '../../components/Sidebar'
import HeaderHome from "../../components/HeaderHome/HeaderHome"

import { ContainerEvents,  DivContainerEvents, DivEvents,  DivNavbarEvents, Icons,  ItemRollEvents,  RollEvents, TextTituloEvents, TitleDivEvents,  TituloEvents } from "./style"
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {useNavigate} from 'react-router-dom'
import data from '../../../events.json'
import Evento from "../../components/Evento"


const Eventos = () => {
    const interessesPessoais = ['Front-End', 'Back-End', 'Design', 'DevOps', 'Banco de dados']
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/home')
    }
    return(
        <div className='w-full min-h-screen flex'>
        
        <Sidebar/>
        <HeaderHome>
            <img src="images/img-logo-pree.png" className='mp:ml-24 mm:ml-28 sm:ml-40 md:ml-52 lg:ml-28  w-40' alt="" />
            <img className='w-10 object-cover cursor-pointer mp:mr-2 mm:mr-0 md:-mr-8 lg:mr-14 ' src='images/user.png'/>
        </HeaderHome>
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
        </div>
    )
}

export default Eventos
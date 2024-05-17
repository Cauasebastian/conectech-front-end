import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../../components/Header'
import ImagemLogo from '../../components/ImagemLogo'

import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { BotaoSeguir, DescricaoEvento, DivBotaoInscrever, DivCardOrganizadorEvento, DivIconSave, DivImagemTemaEvento, DivInfoGeraisEventos, DivInfoPessoaisCard, DivInformacoesEvento, DivSectionInfoGeraisEventos, DivSuperiorTelaEvento, DivTextTitleSupTelaEvento, DivTitleSupTelaEvento, Ico, ImagemOrganizadorCard, ImagemTemaEvento, ImgSuperiorTelaEvento, NomeOrganizador, TextBotaoInscrever, TextDescricaoEvento, TextInfoPessoaisCard, TextSectionInfoGeraisEventos, TitlePrincipalSectionInfoGeraisEventos, TitleSecundarioSectionInfoGeraisEventos, TituloDescricaoEvento, TituloEvento, TituloOrganizador, TituloTextTitleSupTelaEvento } from './style';
const TelaEvento = () => {
  const location = useLocation();
  const navigate = useNavigate()
 

  const goToHomePage = () => {
    navigate('/home')
  }

  const {evento} = location.state
    return(
        <>
             <Header bgColor='#fff' justifyContent='space-between' position='fixed'>
                <ImagemLogo position='relative'  caminhoImagem='images/img-logo-pree.png'/>
                <img className='w-10 object-cover cursor-pointer mr-10' src='images/user.png'/>
            </Header>
            <DivSuperiorTelaEvento>
              <ImgSuperiorTelaEvento src="images/circ-sup.png" alt="" />
              <DivTitleSupTelaEvento>
                <DivTextTitleSupTelaEvento>
                    <NavigateBeforeRoundedIcon onClick={goToHomePage} sx={Ico.IconReturn}/>
                    <TituloTextTitleSupTelaEvento>Detalhes evento</TituloTextTitleSupTelaEvento>
                </DivTextTitleSupTelaEvento>
                <DivIconSave>
                    <BookmarkBorderOutlinedIcon sx={Ico.IconSave}/>
                </DivIconSave>
              </DivTitleSupTelaEvento>
              <DivImagemTemaEvento>
                <ImagemTemaEvento src={evento.imagem}/>
              </DivImagemTemaEvento>
            </DivSuperiorTelaEvento>

            <DivInformacoesEvento>
                <TituloEvento>{evento.titulo}</TituloEvento>
                <DivInfoGeraisEventos>
                    <DivSectionInfoGeraisEventos>
                            <PeopleAltOutlinedIcon sx={Ico.IconsInfo}/>
                            <TitlePrincipalSectionInfoGeraisEventos>{evento.totalParticipantes} participantes</TitlePrincipalSectionInfoGeraisEventos>
                    </DivSectionInfoGeraisEventos>
                    <DivSectionInfoGeraisEventos>
                        <CalendarMonthOutlinedIcon sx={Ico.IconsInfo}/>
                        <TextSectionInfoGeraisEventos>
                            <TitlePrincipalSectionInfoGeraisEventos>{evento.data}</TitlePrincipalSectionInfoGeraisEventos>
                            <TitleSecundarioSectionInfoGeraisEventos>{evento.data}</TitleSecundarioSectionInfoGeraisEventos>
                        </TextSectionInfoGeraisEventos>
                    </DivSectionInfoGeraisEventos>
                    <DivSectionInfoGeraisEventos>
                        <PinDropOutlinedIcon sx={Ico.IconsInfo}/>
                    <TextSectionInfoGeraisEventos>
                            <TitlePrincipalSectionInfoGeraisEventos>{evento.local}</TitlePrincipalSectionInfoGeraisEventos>
                            <TitleSecundarioSectionInfoGeraisEventos>Acessar o mapa</TitleSecundarioSectionInfoGeraisEventos>
                        </TextSectionInfoGeraisEventos>
                    </DivSectionInfoGeraisEventos>
                </DivInfoGeraisEventos>

                <DivCardOrganizadorEvento>
                    <DivInfoPessoaisCard>
                        <ImagemOrganizadorCard src={evento.fotoOrganizador}/>
                        <TextInfoPessoaisCard>
                            <NomeOrganizador>{evento.organizador}</NomeOrganizador>
                            <TituloOrganizador>Organizador</TituloOrganizador>
                        </TextInfoPessoaisCard>
                    </DivInfoPessoaisCard>
                    <BotaoSeguir>Seguir</BotaoSeguir>
                </DivCardOrganizadorEvento>

                <DescricaoEvento>
                    <TituloDescricaoEvento>Sobre o evento</TituloDescricaoEvento>
                    <TextDescricaoEvento>{evento.descricaoEvento}</TextDescricaoEvento>
                </DescricaoEvento>

                <DivBotaoInscrever>
                    <TextBotaoInscrever>Me inscrever</TextBotaoInscrever>
                    <ArrowCircleRightIcon sx={Ico.IconInscrever}/>
                </DivBotaoInscrever>
            </DivInformacoesEvento>
          
        </>
    )
}

export default TelaEvento
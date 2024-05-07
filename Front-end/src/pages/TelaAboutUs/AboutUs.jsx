import { useNavigate } from "react-router-dom";
import Header from "../../components/Header"
import IconUser from "../../components/IconUser"
import ImagemLogo from "../../components/ImagemLogo"
import Sidebar from "../../components/Sidebar"
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

const TelaAboutUs = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/home')
    }
    return(
        <>
            <Header>
                <Sidebar/>
                <ImagemLogo position='relative'  caminhoImagem='images/img-logo-pree.png'/>
                <IconUser/>
            </Header>
            <div className="flex flex-col absolute left-40 top-32">
                    <div className="flex items-center gap-1 mb-2">
                       <NavigateBeforeRoundedIcon
                            onClick={goToHomePage}
                            sx={{
                                color:'#4A91A5',
                                fontSize:'2.3rem',
                                cursor: 'pointer'
                            }}
                            
                       />
                       <span className="font-poppins font-semibold text-[#363636] text-xl">Sobre Nós</span>
                    </div>
                    <div className="ml-10 mt-20 grid grid-cols-2 grid-rows-2 w-10/12">
                        <div className="border-l-[#074261] mb-20 ">
                            <h4 className="text-[#101010]  text-2xl">Integrantes</h4>
                            <ul className="grid grid-cols-2">
                                <li>Lara Nunes</li>
                                <li>Felipe Oliveira</li>
                                <li>Caua Sebastian</li>
                                <li>Maria Helena</li>
                                <li>Edgar Tavares</li>
                                <li>Thales Thiago</li>
                            </ul>
                        </div>
                        <div className="border-l-[#074261] mb-20">
                            <h4 className="text-[#101010] text-2xl">Descrição</h4>
                            <p>O site do Conectech é um projeto criado pelos estudantes do curso de Sistemas
                            para internet da  niversidade Católica de Pernambuco. A plataforma foi criada
                            como um aplicativo e desenvolvida para desktop.
                            </p>
                        </div>
                        <div className="border-l-[#074261] col-span-2 w-7/12">
                            <h4 className="text-[#101010] text-2xl">O que é o Conectech?</h4>
                            <p>O site Conectech é uma plataforma de networking e uma rede social onde os estudantes ou profissionais da área de tecnologia podem se conectar por meio de eventos criados na plataforma, tirar dúvidas e ver as últimas tendências do mercado da tecnologia através do fórum</p>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default TelaAboutUs
import { useNavigate } from "react-router-dom";


import Sidebar from "../../components/Sidebar";
import HeaderHome from "../../components/HeaderHome/HeaderHome";


const TelaAboutUs = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/home')
    }
    
    return(
        <>
           <Sidebar/>
           <HeaderHome>
                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-28 mm:ml-36' alt="" />
                <img src="images/img-logo-pree.png" className='ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-32  w-40' alt="" />
                <img className='w-8 object-cover cursor-pointer mp:mt-2  mp:-mr-4 mm:-mr-5 md:-mr-8 lg:mr-14 ' src='images/user.png'/>
            </HeaderHome>
           <div className="mp:ml-24 mt-24 grid grid-cols-3 items-center">
                <div className="w-full flex justify-between items-center col-span-3">
                    <div className="flex items-center gap-2  xl:ml-10 xl:mt-5 3xl:ml-24 cursor-pointer" onClick={goToHomePage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-5 h-5 sm:h-6 sm:w-6 lg:w-8 lg:h-8 3xl:h-12 3xl:w-12 text-[#4A91A5] ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <p className="text-sm sm:text-base xl:text-lg 3xl:text-xl font-poppins text-[#101010] font-medium">Sobre Nós</p>
                    </div>

                </div>
                <div className="flex flex-col mt-9 ml-2 mb-14 col-span-3 gap-3 pl-2 border-l-2 border-[#074261] mg:w-[65%] lg:w-full lg:col-span-1 xl:ml-14 2xl:ml-14 3xl:w-[60%] ">
                    <p className="text-base font-poppins font-medium 3xl:text-xl">Integrantes</p>
                    <ul className="grid grid-cols-2 text-sm font-poppins 3xl:text-base">
                        <li>Lara Nunes</li>
                        <li>Felipe Oliveira</li>
                        <li>Caua Sebastian</li>
                        <li>Maria Helena</li>
                        <li>Edgar Tavares</li>
                        <li>Thales Thiago</li>
                    </ul>
                </div>
                <div className="flex justify-center flex-col mb-14 ml-2 col-span-3 gap-3 pl-2 pr-2 border-l-2 border-[#074261] lg:col-span-2 lg:mb-0 3xl:pr-60">
                    <p className="text-base font-poppins font-medium 3xl:text-xl">Integrantes</p>
                    <p className="text-sm font-poppins 3xl:text-base">O site do Conectech é um projeto criado pelos estudantes do curso de Sistemas
                            para internet da  niversidade Católica de Pernambuco. A plataforma foi criada
                            como um aplicativo e desenvolvida para desktop.
                    </p>
                </div>
                <div className="flex flex-col mb-14 ml-2 col-span-3 gap-3 pl-2 pr-4 border-l-2 border-[#074261] xl:mt-16 2xl:mt-14 xl:ml-14 2xl:ml-14 3xl:pr-80">
                    <p className="text-base font-poppins font-medium 3xl:text-xl">O que é o Conectech?</p>
                    <p className="text-sm font-poppins 3xl:text-base">O site Conectech é uma plataforma de networking e uma rede social onde os estudantes ou profissionais da área de tecnologia podem se conectar por meio de eventos criados na plataforma, tirar dúvidas e ver as últimas tendências do mercado da tecnologia através do fórum.</p>

                </div>
                   

            </div>
        </>
    )
}

export default TelaAboutUs
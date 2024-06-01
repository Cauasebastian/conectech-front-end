import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
const TelaEvento = () => {
  const location = useLocation();
  const navigate = useNavigate()
 

  const goToHomePage = () => {
    navigate('/home')
  }

  const {evento} = location.state
    return(
        <>
             <Sidebar/>
             <HeaderHome>
       

                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-36 mm:ml-44' alt="" />
                <img src="images/img-logo-pree.png" className='mp:ml-28 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-28  w-40' alt="" onClick={goToHomePage} />
                <img className='mp:w-7 object-cover cursor-pointer mp:mr-0 mm:-mr-3 md:-mr-8 lg:mr-14 ' src='images/user.png'/>
             </HeaderHome>
             <div className="mp:ml-24 mt-20 md:mt-14 lg:-mt-20 xl:-mt-72 2xl:-mt-[23rem] 3xl:-mt-[31rem] flex flex-col items-center">
                <img src="images/circ-res.png" alt="" className='-z-1 mg:w-full '/>
                <div className="w-full flex justify-between items-center -mt-36 mm:-mt-48 mg:-mt-56 sm:-mt-[17rem] md:-mt-[19rem] 3xl:-mt-[27rem]">
                    <div className="flex items-center gap-2 ml-2  xl:ml-16 xl:mt-5 2xl:ml-28 3xl:ml-24 cursor-pointer" onClick={goToHomePage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-5 h-5 sm:h-6 sm:w-6 lg:w-8 lg:h-8 3xl:h-12 3xl:w-12 text-[#4A91A5] ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <p className="text-sm sm:text-base xl:text-lg 2xl:font-medium 3xl:text-2xl font-poppins text-[#EBEBEB] ">Detalhes Evento</p>
                    </div>
                    <button className="bg-[#0c1516] rounded-md py-2 xl:py-3 xl:px-3 px-2 mr-5 mt-1 xl:mr-28 2xl:mr-40 3xl:px-5 3xl:py-5 3xl:mr-52">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                        className="size-4 xl:size-6 3xl:size-7 text-[#4A91A5] ">
                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                    </svg>
                    </button>

                </div>
                <img src={evento.imagem} alt="" className='w-24 mt-5 mm:mt-9 mm:w-32 mg: mg:mt-12 mg:w-36 sm:mt-20 sm:w-44 md:w-56 lg:w-64 xl:mt-16 3xl:mt-24 3xl:w-80 ' />
                <div className='mt-12 mm:mt-14 mg:mt-16 md:mt-20 3xl:mt-32 flex flex-col w-full'>
                    <p className='w-full flex justify-center font-poppins text-xl mg:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl'>{evento.titulo}</p>
                </div>
                <div className='grid justify-center items-center grid-cols-3 w-full mt-4 sm:mt-7 ml-3 gap-3 lg:w-[80%] xl:w-[70%] lg:mt-10 3xl:mt-20'>
                    <div className='flex items-center w-full col-span-3 gap-2 lg:col-span-1 '>
                        <button className="bg-[#e9f0f2] rounded-md py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="size-4 md:size-5 xl:size-6 2xl:size-7 3xl:size-9 text-[#4A91A5]">
                                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                            </svg>
                        </button>
                        <p className='flex text-sm font-poppins text-[#120D26] xl:text-base 2xl:text-lg 3xl:text-xl'>{evento.totalParticipantes} participantes </p>

                    </div>
                    <div className='flex items-center w-full col-span-3 gap-2 lg:col-span-1 '>
                        <button className="bg-[#e9f0f2] rounded-md py-2 px-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="size-4 md:size-5 xl:size-6 2xl:size-7 3xl:size-9 text-[#4A91A5]">
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <p className='flex text-sm font-poppins text-[#120D26] xl:text-base 2xl:text-lg 3xl:text-xl'>{evento.data}</p>
                    
                    
                    </div>
                    <div className='flex items-center w-full col-span-3 gap-2 lg:col-span-1'>
                        <button className="bg-[#e9f0f2] rounded-md py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="size-4 md:size-5 xl:size-6 2xl:size-7 3xl:size-9 text-[#4A91A5]">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div>
                            <p className='flex text-sm font-poppins text-[#120D26] xl:text-base 2xl:text-lg 3xl:text-xl'>{evento.local}</p>
                            <p className='text-xs font-poppins text-[#747688] underline 2xl:text-sm 3xl:text-base'>Acessar o mapa</p>
                        </div>
                    
                    </div>
                    <div className='w-[90%] flex items-center border mt-3 mb-5 border-[#DDDDDDC4] py-2 px-2 rounded-md col-span-3 gap-2 3xl:mt-7 3xl:gap-4 '>
                        <img src={evento.fotoOrganizador} className='h-10 w-10 rounded-md object-cover 2xl:h-14 2xl:w-14 3xl:h-16 3xl:w-16' alt="" />
                        <div>
                            <p className='text-xs font-poppins lg:text-base 2xl:text-xl 3xl:text-2xl'>{evento.organizador}</p>
                            <p className='text-[0.68rem] text-[#706E8F] lg:text-sm 2xl:text-base 3xl:text-lg'>Organizador</p>
                        </div>
                        <button className="bg-[#e9f2f4] rounded-md py-2 px-2 ml-12 mm:ml-36 mg:ml-52 sm:ml-[18.5rem] md:ml-[25.6rem] lg:ml-[28rem] xl:ml-[32.6rem] 2xl:ml-[39.3em] 3xl:ml-[54.3rem]">
                            <p className='text-xs text-[#4A91A5] lg:text-sm 2xl:text-lg 3xl:text-xl'>Seguir</p>
                        </button>
                    </div>
                </div>
                <div className='lg:w-[75%] w-[90%] xl:w-[67%] -ml-3 lg:-ml-6 md:-ml-12 mb-7 3xl:mb-12 gap-3 flex flex-col 2xl:mt-8'>
                    <p className='font-poppins text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl'>Sobre o evento</p>
                    <p className='font-poppins text-xs sm:text-sm lg:text-base 2xl:text-lg 3xl:text-xl'>{evento.descricaoEvento}</p>
                </div>
                <div className='w-full flex justify-center items-center mb-5 '>
                    <button className='flex justify-center items-center bg-[#074261] rounded-md px-7 py-1 gap-3 2xl:px-16 2xl:py-2 3xl:px-20 3xl:py-3'>
                        <p className='font-poppins text-[#FFFFFF] text-sm lg:text-base 2xl:text-xl 3xl:text-2xl'>Me inscrever</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                            className="size-6 text-[#fff] 3xl:size-8">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                        </svg>

                    </button>
                </div>
            </div>
          
        </>
    )
}

export default TelaEvento
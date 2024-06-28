import Sidebar from "../../components/Sidebar";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from '../../../events.json';
import Evento from "../../components/Evento";
import { getUserImage } from "../../services/userService"; // Importe a função getUserImage do seu serviço

const Favoritos = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [meusInteresses, setMeusInteresses] = useState([]);

    useEffect(() => {
        const interesses = localStorage.getItem('meusInteresses');
        if (interesses) {
            setMeusInteresses(JSON.parse(interesses));
        }
    }, []);

    useEffect(() => {
        const loadUserProfile = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const imageResponse = await getUserImage(userId);
                if (imageResponse.status === 200) {
                    const imageBlob = new Blob([imageResponse.data], { type: 'image/jpeg' });
                    const imageUrl = URL.createObjectURL(imageBlob);
                    setProfileImage(imageUrl);
                } else {
                    throw new Error('No image found');
                }
            } catch (error) {
                console.error('Error loading user profile:', error);
            }
        };

        loadUserProfile();
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);
    const escolherTipo = (index) => {
        setActiveIndex(index);
    };

    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/home');
    };
    const goToPerfilPage = () => {
        navigate('/perfil');
    };

    return (
        <div className='w-full min-h-screen overflow-y-hidden flex bg-[#fbfbfb]'>
            <Sidebar />
            <HeaderHome>
                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-28 mm:ml-36' alt="" />
                <img src="images/img-logo-pree.png" className='ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-32 w-40' alt="" />
                <img  className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 3xl:h-18 3xl:w-18 mr-8 cursor-pointer z-50" 
        src={profileImage || 'images/user.png'} 
        alt="Profile" 
        onClick={goToPerfilPage} />              
               </HeaderHome>
            <div className="mp:ml-24 xl:ml-32 mt-24 flex flex-col items-center">
                <div className="w-full flex mp:flex-col mp:items-start justify-between items-center">
                    <div className="flex items-center gap-2  xl:ml-3 xl:mt-5 3xl:ml-0 cursor-pointer" onClick={goToHomePage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-5 h-5 sm:h-6 sm:w-6 lg:w-8 lg:h-8 3xl:h-12 3xl:w-12 text-[#4A91A5] ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <p className="text-sm sm:text-base xl:text-lg  3xl:text-2xl font-poppins text-[#101010] font-medium">Eventos Favoritos</p>
                    </div>
                    <div className="flex gap-3 items-center mt-3 w-full justify-end pr-5 md:pr-0 xl:pr-20 2xl:pr-5 mb-4">
                    <button className="flex justify-center items-center gap-2 bg-[#e9f0f2] py-2 px-3 md:px-8 2xl:px-10 3xl:py-3 3xl:px-14 rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-5 h-5 text-[#4A91A5] 3xl:w-6 3xl:h-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />

                        </svg>
                        <p className="text-[#4A91A5] text-xs 3xl:text-base">Pastas</p>
                    </button>
                    <button className="bg-[#e9f0f2] rounded-md py-2 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                        className="size-4 text-[#4A91A5]">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>

                    </button>
                    </div>
                </div>
                    
                <div className="w-full mt-5 lg:mt-8 3xl:mt-12 flex gap-2 sm:gap-5 md:gap-12 lg:gap-16 lg:ml-7 2xl:gap-28 3xl:gap-40">
                        {meusInteresses.map((item, index) => (
                             <span key={index} id="item-tag" onClick={() => escolherTipo(index)} className={`${activeIndex === index ? 'bg-[#4A91A5] text-[#FFFFFF]' : 'bg-[#fff] text-[#4A91A5] border border-[#4A91A5]' } font-poppins px-2 py-1 rounded-3xl text-[0.6rem] mm:px-5 mg:text-xs md:text-sm lg:px-9 xl:px-16 xl:py-2 2xl:text-sm 3xl:text-lg 3xl:px-20  bg-[#4A91A5]`} >{item}</span>
                        ))}  
                                            
                </div>
                <div className='grid grid-cols-6 xl:grid-cols-8 gap-3 mt-3 lg:mt-10 -ml-5 mm:-ml-4   w-full 2xl:mb-10'>
                    {data.map((evento) => (
                            <div className='col-span-6  xl:col-span-2 flex ' key={evento.id}>
                                 <Evento 
                                    titulo={evento.title} 
                                    imagem={evento.image} 
                                    data={evento.data} 
                                    local={evento.local}
                                    organizador={evento.organizador}
                                    totalParticipantes={evento.total_participantes}
                                    descricaoEvento={evento.descricao}
                                    fotoOrganizador={evento.foto_organizador}
                                    iconSalvar={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                            className="size-4 text-[#4A91A5D9] sm:size-5">
                                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                        </svg>}/>
                                        

                                
                            </div>
                               
                        )
                    )}
            </div>
            </div>
            
        </div>
    )
}

export default Favoritos
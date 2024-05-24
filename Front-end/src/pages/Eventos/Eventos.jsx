
import Sidebar from '../../components/Sidebar'
import HeaderHome from "../../components/HeaderHome/HeaderHome"
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import data from '../../../events.json'
import Evento from "../../components/Evento"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';



const Eventos = () => {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }
    const [meusInteresses, setMeusInteresses] = useState([])
      useEffect(() => {
        const interesses = localStorage.getItem('meusInteresses');
        if(interesses){
            setMeusInteresses(JSON.parse(interesses))
        }
        
        
      }, [])
    const [activeIndex, setActiveIndex] = useState(null);
    const escolherTipo = (index) => {
        setActiveIndex(index);
      };
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/home')
    }
    return(
        <div className='w-screen min-h-screen flex'>
        
            <Sidebar/>
            <HeaderHome>
               
                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-28 mm:ml-44' alt="" />
                <img src="images/img-logo-pree.png" className='mp:ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-28  w-40' alt="" onClick={goToHomePage} />
                <img className='w-8 object-cover cursor-pointer mp:mt-2  mp:-mr-8 mm:mr-0 md:-mr-8 lg:mr-14 ' src='images/user.png'/>
            </HeaderHome>
            <div className="mp:ml-4 mt-24 flex flex-col items-center w-full ">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-2  xl:ml-3 xl:mt-5 3xl:ml-0 cursor-pointer" onClick={goToHomePage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="w-5 h-5 sm:h-6 sm:w-6 lg:w-8 lg:h-8 3xl:h-12 3xl:w-12 text-[#4A91A5] ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            <p className="text-sm sm:text-base xl:text-lg  3xl:text-2xl font-poppins text-[#101010] font-medium">Eventos</p>
                        </div>
                    </div>
                    
                    <div className="w-full mt-5 lg:mt-8 3xl:mt-12 flex gap-4 ml-3 sm:gap-5 md:gap-7 lg:gap-16 lg:ml-7 2xl:gap-28 3xl:gap-40">
                        {meusInteresses.map((item, index) => (
                             <span key={index} id="item-tag" onClick={() => escolherTipo(index)} className={`${activeIndex === index ? 'bg-[#4A91A5] text-[#FFFFFF]' : 'bg-[#fff] text-[#4A91A5] border border-[#4A91A5]' } font-poppins px-2 py-1 rounded-3xl text-[0.75rem] mm:px-5 mg:text-xs md:text-sm lg:px-9 xl:px-16 xl:py-2 2xl:text-sm 3xl:text-lg 3xl:px-20  bg-[#4A91A5]`} >{item}</span>
                        ))}  
                                            
                    </div>
                    <div className='grid grid-cols-6 xl:grid-cols-8 gap-3 mt-3 lg:mt-10 -ml-5 mm:-ml-4  w-full 2xl:mb-10'>
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
                                        fotoOrganizador={evento.foto_organizador}/>
                                </div>
                                
                            )
                        )}
                    </div>
                    <button className='mt-6 mb-4 bg-[#074261] p-1 rounded-full ' onClick={handleClickOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                            className="size-6 text-[#fff]">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>

                    </button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">

                        <DialogActions className='flex flex-col bg-[#FFFFFF] gap-4 items-center justify-center'>
                            <div onClick={handleClose} className='flex flex-col bg-[#F3F3F3] px-1 py-1 gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                        className="size-6 text-[#074261]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <p className='font-poppins font-medium text-sm'>Criar evento privado</p>
                                </div>
                                <p className='text-[#7D7D7D] text-xs font-poppins'>
                                    Somente convidados verão esse evento. O organizador pode optar por deixar os convidados convidarem outras pessoas.
                                </p>
                            </div>
                            <div onClick={handleClose} className='flex flex-col bg-[#F3F3F3] px-1 py-1 w-full gap-2 mr-2 '>
                                <div className='flex gap-2 items-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                        className="size-6 text-[#074261]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                                    </svg>
                                    <p className='font-poppins font-medium text-sm'>Criar evento público</p>
                                </div>
                                <p className='text-[#7D7D7D] text-xs font-poppins'>
                                    Qualquer pessoas pode ver este evento e procurá-lo mesmo se vocês não se seguirem.
                                </p>
                            </div>
                        </DialogActions>
                    </Dialog>
            </div>
        
           
        </div>
    )
}

export default Eventos
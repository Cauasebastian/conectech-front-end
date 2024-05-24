import { useState } from 'react';
import data from '../../../events.json'
import Evento from "../Evento";
import {useNavigate} from 'react-router-dom'


const EventosProximos = () => {
    const navigate = useNavigate();
    const goToTelaEventos = () => {
        navigate('/eventos')
    }
    const [eventosVisiveis, setEventosVisiveis] = useState(data.slice(0, 3))
    return(
        <div className='mt-24  mp:ml-20 mg:ml-14 sm:w-full lg:mt-28 lg:ml-5 xl:ml-16  md:ml-7  flex flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-around mp:pl-0 mm:gap-0 mm:-ml-12 sm:gap-10 md:-ml-2 lg:gap-[5rem] lg:ml-4 xl:gap-[30rem] 3xl:gap-[54rem] lg:mb-4 2xl:gap-44'>
                <p className='font-poppins font-medium mp:text-sm mg:ml-3  text-base sm:text-base 2xl:text-2xl md:text-xl 2xl:-ml-20 text-[#363636]'>Eventos Próximos</p>
                <p className='mp:text-[10px] mg:mr-10 sm:text-xs md:text-base 2xl:text-lg sm:mr-16 md:ml-10  text-[#747688] font-poppins cursor-pointer' onClick={goToTelaEventos}>Ver mais</p>
            </div>
            
            <div className='grid grid-cols-6  gap-3 mt-3 lg:mt-0 sm:-ml-10 md:ml-1 2xl:-ml-24'>
                    {eventosVisiveis.map((evento) => {
                        return(
                            <div className='col-span-6 lg:col-span-6 xl:col-span-2 flex ml-3 mr-3 mm:-ml-8 mg:-ml-16 sm:-ml-12 md:-ml-1 ' key={evento.id}>
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
                    })}
            </div>
            
        </div>
    )
}

export default EventosProximos
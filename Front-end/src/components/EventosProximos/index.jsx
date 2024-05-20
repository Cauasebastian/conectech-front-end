import { useState } from 'react';
import data from '../../../events.json'
import Evento from "../Evento";


const EventosProximos = () => {
    const [eventosVisiveis, setEventosVisiveis] = useState(data.slice(0, 3))
    return(
        <div className='mt-24 mp:ml-20 mg:ml-14 lg:mt-28 sm:ml-10 md:ml-20  flex flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-around mm:gap-28 md:gap-80 sm:gap-12 lg:gap-[21rem] xl:gap-[30rem] 3xl:gap-[54rem] lg:mb-4'>
                <p className='font-poppins font-medium  text-base sm:text-lg 2xl:text-2xl md:text-xl 2xl:-ml-14 text-[#363636]'>Eventos Próximos</p>
                <p className='mp:text-[12px] sm:text-sm md:text-base 2xl:text-lg sm:mr-10 text-[#747688] font-poppins'>Ver mais</p>
            </div>
            
            <div className='grid grid-cols-6  gap-3 mt-3 sm:-ml-10 md:ml-1'>
                    {eventosVisiveis.map((evento) => {
                        return(
                            <div className='col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2 flex' key={evento.id}>
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
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
        <div className='mt-24 w-full mp:ml-0  sm:w-full lg:mt-28 lg:ml-5 xl:ml-16  md:ml-7  flex flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-between mm:w-[100%] mm:-ml-16 mg:-ml-0 '>
                <p className='font-poppins font-medium mp:text-sm mg:ml-3  text-base sm:text-base 2xl:text-2xl md:text-xl 2xl:-ml-20 text-[#363636]'>Eventos Próximos</p>
                <p className='mp:text-[10px] mg:mr-10 sm:text-xs md:text-base 2xl:text-lg mm:ml-20 mm:-mr-12 sm:mr-16 md:ml-10  text-[#747688] font-poppins cursor-pointer' onClick={goToTelaEventos}>Ver mais</p>
            </div>
            
            <div className='grid grid-cols-6 gap-3 mt-3 lg:mt-0 mm:-ml-1 sm:-ml-10 md:ml-1 2xl:-ml-24 mm:w-[90%] mg:w-[90%] mg:ml-0'>
                    {eventosVisiveis.map((evento) => {
                        return(
                            <div className='col-span-6 lg:col-span-6 xl:col-span-2 flex    ' key={evento.id}>
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
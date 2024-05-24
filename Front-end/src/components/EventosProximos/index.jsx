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
        <div className='mt-24 w-full flex flex-col items-center justify-center'>
            <div className='flex w-full items-center'>
                <p className='font-poppins font-medium mp:text-sm text-[#363636]'>Eventos Próximos</p>
                <p className='text-[#747688] font-poppins cursor-pointer' onClick={goToTelaEventos}>Ver mais</p>
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
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
            <div className='flex w-[90%] items-center ml-5 mg:mb-3 '>
                <p className='font-poppins font-medium text-sm mg:text-base text-[#363636] mr-36 mm:mr-56 mg:mr-64'>Eventos Próximos</p>
                <p className='text-[#747688] font-poppins cursor-pointer text-[0.7rem] mg:text-xs' onClick={goToTelaEventos}>Ver mais</p>
            </div>
            
            <div className='grid grid-cols-6 mt-3 w-[90%] mr-2 gap-3'>
                    {eventosVisiveis.map((evento) => {
                        return(
                            <div className='col-span-6 lg:col-span-6 xl:col-span-2 flex' key={evento.id}>
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
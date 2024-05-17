import data from '../../../events.json'
import Evento from "../Evento";


const EventosProximos = () => {
    return(
        <div className='mt-24 mp:ml-20   flex flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-around mm:gap-28 md:gap-80 '>
                <p className='font-poppins font-medium  text-base sm:text-lg text-[#363636]'>Eventos Próximos</p>
                <p className='mp:text-[12px] sm:text-sm text-[#747688] font-poppins'>Ver mais</p>
            </div>
            
            <div className='grid grid-cols-6 gap-3 mt-3'>
                    {data.map((evento) => {
                        return(
                            <div className='col-span-6 md:col-span-3 lg:col-span-2 flex' key={evento.id}>
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
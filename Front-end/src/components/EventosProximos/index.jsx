import { ContainerEventos, DivEventos, TituloEventos } from "./style"
import data from '../../../../events.json'
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Evento from "../Evento";


const EventosProximos = () => {
    register();
    
    
    return(
        <ContainerEventos>
            <TituloEventos>Eventos Próximos</TituloEventos>
            <DivEventos>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    className="div-swiper"
                    
               >
                    {data.map((evento) => {
                        return(
                            <SwiperSlide key={evento.id}>
                                <Evento 
                                    titulo={evento.title} 
                                    imagem={evento.image} 
                                    data={evento.data} 
                                    local={evento.local}
                                    organizador={evento.organizador}
                                    totalParticipantes={evento.total_participantes}
                                    descricaoEvento={evento.descricao}
                                    fotoOrganizador={evento.foto_organizador}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
               
                   
            </DivEventos>
            
        </ContainerEventos>
    )
}

export default EventosProximos
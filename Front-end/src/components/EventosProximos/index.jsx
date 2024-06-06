import { useState, useEffect } from 'react';

import Evento from "../Evento";
import {useNavigate} from 'react-router-dom'


const EventosProximos = () => {
    const navigate = useNavigate();
    const [eventosVisiveis, setEventosVisiveis] = useState([]);

    useEffect(() => {
        fetchEventsWithAuthorDetails();
    }, []);

    const fetchEventsWithAuthorDetails = async () => {
        try {
            const response = await fetch('http://localhost:8080/events');
            const eventsData = await response.json();

            const eventsWithAuthorDetails = await Promise.all(eventsData.slice(0, 3).map(async (event) => {
                const authorResponse = await fetch(`http://localhost:8080/users/name/${event.authorName}`);
                const authorData = await authorResponse.json();

                const imageResponse = await fetch(`http://localhost:8080/users/${authorData.id}/image`);
                const imageBlob = await imageResponse.blob();
                const imageUrl = URL.createObjectURL(imageBlob);

                const eventImageResponse = await fetch(`http://localhost:8080/events/${event.id}/image`);
                const eventImageBlob = await eventImageResponse.blob();
                const eventImageUrl = URL.createObjectURL(eventImageBlob);


                return {
                    ...event,
                    authorName: authorData.name,
                    fotoOrganizador: imageUrl,
                    eventImageUrl: eventImageUrl
                };
            }));

            setEventosVisiveis(eventsWithAuthorDetails);
        } catch (error) {
            console.error('Error fetching events or author details:', error);
        }
    };

    const goToTelaEventos = () => {
        navigate('/eventos');
    };
    return(
        <div className='mt-24 w-full  sm:w-full lg:mt-28  xl:ml-16  md:ml-20 3xl:ml-10 3xl:mt-32  flex flex-col items-center justify-center'>
            <div className='flex w-[90%] md:w-[80%] md:-ml-8 items-center mg:-ml-0 2xl:-ml-14  '>
                <p className='font-poppins font-medium text-sm mr-36 mg:mr-48 sm:mr-64 md:mr-80 xl:mr-[30rem] 2xl:mr-[37rem] 3xl:mr-[44rem] sm:text-base 2xl:text-lg 3xl:text-xl text-[#363636]'>Eventos Próximos</p>
                <p className='mp:text-[10px] mg:mr-10 sm:text-xs 2xl:text-sm 3xl:text-base mm:ml-20 mm:-mr-12 md:ml-10  text-[#747688] font-poppins cursor-pointer' onClick={goToTelaEventos}>Ver mais</p>
            </div>
            
            <div className='grid grid-cols-6 w-[90%] -ml-7 gap-3 mt-3 lg:mt-2 xl:mt-5  sm:-ml-10  2xl:-ml-24 mm:w-[90%] md:w-[80%] 3xl:w-[70%] 3xl:-ml-60 md:-ml-16 '>
                    {eventosVisiveis.map((evento) => {
                        return(
                            <div className='col-span-6 lg:col-span-6 xl:col-span-2 flex' key={evento.id}>
                                 <Evento 
                                    titulo={evento.title} 
                                    imagem={evento.eventImageUrl} 
                                    data={evento.date} 
                                    local={evento.location}
                                    organizador={evento.authorName}
                                    totalParticipantes={evento.participantsCount}
                                    descricaoEvento={evento.description}
                                    fotoOrganizador={evento.fotoOrganizador}/>
                            </div>
                               
                        )
                    })}
            </div>
            
        </div>
    )
}

export default EventosProximos
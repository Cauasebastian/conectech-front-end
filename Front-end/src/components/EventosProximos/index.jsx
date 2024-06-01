import { useState, useEffect } from 'react';
import Evento from "../Evento";
import { useNavigate } from 'react-router-dom';

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

    return (
        <div className='mt-24 w-full mp:ml-0 sm:w-full lg:mt-28 lg:ml-5 xl:ml-16 md:ml-7 flex flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-between mm:w-[100%] mm:-ml-16 mg:-ml-0 '>
                <p className='font-poppins font-medium mp:text-sm mg:ml-3 text-base sm:text-base 2xl:text-2xl md:text-xl 2xl:-ml-20 text-[#363636]'>Eventos Próximos</p>
                <p className='mp:text-[10px] mg:mr-10 sm:text-xs md:text-base 2xl:text-lg mm:ml-20 mm:-mr-12 sm:mr-16 md:ml-10 text-[#747688] font-poppins cursor-pointer' onClick={goToTelaEventos}>Ver mais</p>
            </div>

            <div className='grid grid-cols-6 gap-3 mt-3 lg:mt-0 mm:-ml-1 sm:-ml-10 md:ml-1 2xl:-ml-24 mm:w-[90%] mg:w-[90%] mg:ml-0'>
                {eventosVisiveis.map((evento) => (
                    <div className='col-span-6 lg:col-span-6 xl:col-span-2 flex' key={evento.id}>
                        <Evento 
                            titulo={evento.title} 
                            imagem={evento.eventImageUrl} 
                            data={evento.date} 
                            local={evento.location}
                            organizador={evento.authorName}
                            totalParticipantes={evento.participantsCount}
                            descricaoEvento={evento.description}
                            fotoOrganizador={evento.fotoOrganizador}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventosProximos;

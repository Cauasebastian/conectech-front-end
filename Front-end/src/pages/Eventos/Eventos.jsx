import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Evento from "../../components/Evento";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

const Eventos = () => {
    
    const API_URL = process.env.VITE_API_URL;

    const [eventos, setEventos] = useState([]);
    const [meusInteresses, setMeusInteresses] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        location: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [isCreating, setIsCreating] = useState(false); // Estado para controlar se o evento está sendo criado
    const navigate = useNavigate();

    useEffect(() => {
        fetchEventsWithAuthorDetails();
        const interesses = localStorage.getItem('meusInteresses');
        if (interesses) {
            setMeusInteresses(JSON.parse(interesses));
        }
    }, []);

    const fetchEventsWithAuthorDetails = async () => {
        try {
            const response = await fetch(`${API_URL}/events`);
            const eventsData = await response.json();
    
            const eventsWithAuthorDetails = await Promise.all(eventsData.map(async (event) => {
                const authorResponse = await fetch(`${API_URL}/users/name/${event.authorName}`);
                const authorData = await authorResponse.json();
    
                const imageResponse = await fetch(`${API_URL}/users/${authorData.id}/image`);
                const imageBlob = await imageResponse.blob();
                const imageUrl = URL.createObjectURL(imageBlob);
    
                const eventImageResponse = await fetch(`${API_URL}/events/${event.id}/image`);
                const eventImageBlob = await eventImageResponse.blob();
                const eventImageUrl = URL.createObjectURL(eventImageBlob);
    
                return {
                    ...event,
                    idDoEvento: event.id,
                    authorName: authorData.name,
                    fotoOrganizador: imageUrl,
                    eventImageUrl: eventImageUrl,
                };
            }));
    
            setEventos(eventsWithAuthorDetails);
        } catch (error) {
            console.error('Error fetching events or author details:', error);
        }
    };

    const handleCreateEvent = async () => {
        try {
            setIsCreating(true); // Desabilitar o botão durante a criação
            console.log('Creating event with data:', newEvent);
            const response = await axios.post(`${API_URL}/events/${localStorage.getItem('userId')}/create`, newEvent);
            const eventId = response.data.id; // Ensure the response includes the event ID
            console.log('Event created with ID:', eventId);
    
            if (selectedFile) {
                const formData = new FormData();
                formData.append('image', selectedFile);
                console.log('Uploading image for event:', eventId);
    
                const uploadResponse = await axios.post(`${API_URL}/events/${eventId}/uploadImage`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log('Image uploaded successfully', uploadResponse.data);
            }
    
            fetchEventsWithAuthorDetails();
            handleClose();
        } catch (error) {
            console.error('Error creating event:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        } finally {
            setIsCreating(false); // Reabilitar o botão após a criação
        }
    };
    
    

    const escolherTipo = (index) => {
        setActiveIndex(index);
    };

    const goToHomePage = () => {
        navigate('/home');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const goToEventoDetalhes = (evento) => {
        navigate('/evento-detalhes', { state: { evento } });
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const goToPerfilPage = () => {
        navigate('/perfil');
    };

    return (
        <div className='w-screen min-h-screen flex'>
            <Sidebar />
            <HeaderHome>
                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-28 mm:ml-36' alt="" />
                <img src="images/img-logo-pree.png" className='ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-32  w-40' alt="" />
                <img className='w-8 object-cover cursor-pointer mp:mt-2  mp:-mr-4 mm:-mr-5 md:-mr-8 lg:mr-14 ' src='images/user.png' onClick={goToPerfilPage}/>
            </HeaderHome>
            <div className="mp:ml-4 xl:ml-32 mt-24 flex flex-col items-center w-full">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-2 xl:ml-3 xl:mt-5 3xl:ml-0 cursor-pointer" onClick={goToHomePage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:h-6 sm:w-6 lg:w-8 lg:h-8 3xl:h-12 3xl:w-12 text-[#4A91A5]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <p className="text-sm sm:text-base xl:text-lg 3xl:text-2xl font-poppins text-[#101010] font-medium">Eventos</p>
                    </div>
                </div>
                
                <div className="w-full mt-5 lg:mt-8 3xl:mt-12 flex gap-4 ml-3 sm:gap-5 md:gap-7 lg:gap-16 lg:ml-7 2xl:gap-28 3xl:gap-40">
                    {meusInteresses.map((item, index) => (
                        <span key={index} id="item-tag" onClick={() => escolherTipo(index)} className={`${activeIndex === index ? 'bg-[#4A91A5] text-[#FFFFFF]' : 'bg-[#fff] text-[#4A91A5] border border-[#4A91A5]' } font-poppins px-2 py-1 rounded-3xl text-[0.75rem] mm:px-5 mg:text-xs md:text-sm lg:px-9 xl:px-16 xl:py-2 2xl:text-sm 3xl:text-lg 3xl:px-20`}>
                            {item}
                        </span>
                    ))}  
                </div>
                
                <div className='grid grid-cols-6 xl:grid-cols-8 gap-3 mt-3 lg:mt-10 -ml-5 mm:-ml-4 w-full 2xl:mb-10'>
                    {eventos.map((evento) => (
                        <div className='col-span-6 xl:col-span-2 flex' key={evento.id}>
                            <Evento 
                                titulo={evento.title}
                                id={evento.idDoEvento} // Adicione o id do evento
                                imagem={evento.eventImageUrl} 
                                data={new Date(evento.date).toLocaleString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })} 
                                local={evento.location}
                                organizador={evento.authorName}
                                totalParticipantes={evento.participantsCount}
                                descricaoEvento={evento.description}
                                fotoOrganizador={evento.fotoOrganizador}
                                onClick={() => goToEventoDetalhes(evento)} // Aqui chamamos a função de navegação passando o evento
                            />
                        </div>
                    ))}
                </div>

                <button className='mt-6 mb-4 bg-[#074261] p-1 rounded-full' onClick={handleClickOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#fff]">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>
                
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogActions className='flex flex-col bg-[#FFFFFF] gap-4 items-center justify-center'>
                        <div className='flex flex-col bg-[#F3F3F3] px-1 py-1 gap-2'>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M4.5 5.25A3.75 3.75 0 0 1 8.25 1.5h7.5a3.75 3.75 0 0 1 3.75 3.75v13.5a3.75 3.75 0 0 1-3.75 3.75h-7.5a3.75 3.75 0 0 1-3.75-3.75V5.25ZM8.25 3A2.25 2.25 0 0 0 6 5.25v13.5A2.25 2.25 0 0 0 8.25 21h7.5A2.25 2.25 0 0 0 18 18.75V5.25A2.25 2.25 0 0 0 15.75 3h-7.5ZM9 7.5h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Zm0 3h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Zm6 3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h6Z" clipRule="evenodd" />
                                </svg>
                                <p className='text-base text-[#000000] font-poppins font-medium'>Adicionar evento</p>
                            </div>
                            <input
                                type='text'
                                className='w-[300px] bg-[#FFFFFF] border-none outline-none rounded-md h-8 p-2 text-sm font-poppins'
                                placeholder='Nome do evento'
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            />
                            <input
                                type='text'
                                className='w-[300px] bg-[#FFFFFF] border-none outline-none rounded-md h-8 p-2 text-sm font-poppins'
                                placeholder='Localização'
                                value={newEvent.location}
                                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                            />
                            <textarea
                                className='w-[300px] bg-[#FFFFFF] border-none outline-none rounded-md h-24 p-2 text-sm font-poppins resize-none'
                                placeholder='Descrição'
                                value={newEvent.description}
                                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            />
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className='flex justify-between w-full'>
                            <button onClick={handleClose} className='bg-[#FF0000] text-[#FFFFFF] font-poppins px-4 py-2 rounded-md'>
                                Cancelar
                            </button>
                            <button onClick={handleCreateEvent} className='bg-[#4A91A5] text-[#FFFFFF] font-poppins px-4 py-2 rounded-md' disabled={isCreating}>
                                {isCreating ? 'Criando...' : 'Criar Evento'}
                            </button>
                        </div>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default Eventos;

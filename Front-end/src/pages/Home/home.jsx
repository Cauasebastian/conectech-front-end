import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useUserContext from '../../hooks/useUserContext';
import Sidebar from '../../components/Sidebar';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import EventosProximos from '../../components/EventosProximos';
import DestaquesForum from '../../components/DestaquesForum';
import MenuExplorar from '../../components/MenuExplorar';
import { useNavigate } from 'react-router-dom';
import { getUserImage } from '../../services/userService';


const Home = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();
    const [eventos, setEventos] = useState([]);

    const goToPerfilPage = () => {
        navigate('/perfil');
    };

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await axios.get('/api/eventos');
                setEventos(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
    
        const loadUserProfile = async () => {
            try {
                const imageResponse = await getUserImage(localStorage.getItem('userId')); 
                if (imageResponse.status === 200) {
                    const imageBlob = new Blob([imageResponse.data], { type: 'image/jpeg' });
                    const imageUrl = URL.createObjectURL(imageBlob);
                    setProfileImage(imageUrl);
                } else {
                    throw new Error('No image found');
                }
            } catch (error) {
                console.error('Error loading user profile:', error);
            }
        };
    
        loadUserProfile();
        fetchEventos();
    }, []);


    const [profileImage, setProfileImage] = useState(null);
    console.log(user);
    return (
        <div className="w-full min-h-screen overflow-y-hidden flex bg-[#fbfbfb] ">
            <Sidebar />
            <HeaderHome>
                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-28 mm:ml-36' alt="" />
                <img src="images/img-logo-pree.png" className='ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-32  w-40' alt="" />
                <img className=" rounded-full object-cover w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 3xl:h-18 3xl:w-18 mr-8" src={profileImage || 'images/user.png'} alt="Profile" />
                </HeaderHome>
            <div id="container-home" className="lg:grid lg:grid-cols-4 lg:grid-rows-2 ">
                <div className="col-span-3 lg:row-start-1 lg:row-end-2 ">
                    <EventosProximos eventos={eventos} />
                </div>
                <div className="col-span-3 lg:row-start-2 lg:row-end-3 mb-8">
                    <DestaquesForum />
                </div>
                <div className="col-span-1 lg:row-start-1 lg:row-span-4 ">
                    <MenuExplorar />
                </div>
            </div>
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUserContext from '../../hooks/useUserContext';

const TelaCriarBio = () => {
    const navigate = useNavigate();
    const notifySucess = (mensagem) => {
        toast.success(mensagem, {
            position: "top-right"
        });
    };

    const notifyError = (mensagem) => {
        toast.error(mensagem, {
            position: "top-right"
        });
    };

    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const { setUser } = useUserContext();

    const validateForm = () => {
        if (username.trim() === '' || bio.trim() === '' || !profileImage) {
            notifyError("Todos os campos devem ser preenchidos!");
            return false;
        }
        return true;
    };

    const onSubmitRegister = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const novoUsuario = {
            username: username,
            bio: bio
        };

        setUser(novoUsuario);

        try {
            await integracaoAPI(novoUsuario);
            await uploadProfileImage(profileImage);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    const integracaoAPI = (user) => {
        return axios.put(`http://localhost:8080/users/${localStorage.getItem('userId')}`, user)
            .then(response => {
                notifySucess('Conta atualizada com sucesso!');
                setTimeout(() => {
                    navigate('/home');
                }, 5000);
            })
            .catch(error => {
                notifyError("Não foi possível atualizar a conta! Tente novamente.");
                console.error('Erro ao atualizar a conta: ', error);
                throw error;
            });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
        }
    };

    const uploadProfileImage = (file) => {
        const formData = new FormData();
        formData.append('image', file);

        return fetch(`http://localhost:8080/users/${localStorage.getItem('userId')}/uploadImage`, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error uploading image');
                }
                return response.text();
            })
            .then(data => {
                notifySucess('Imagem de perfil atualizada com sucesso!');
                loadImage(localStorage.getItem('userId'));
            })
            .catch(error => {
                notifyError("Não foi possível atualizar a imagem de perfil! Tente novamente.");
                console.error('Erro ao atualizar a imagem de perfil: ', error);
                throw error;
            });
    };

    const loadImage = (userId) => {
        fetch(`http://localhost:8080/users/${userId}/image`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error loading image');
                }
                return response.blob();
            })
            .then(blob => {
                const imgElement = document.createElement('img');
                imgElement.src = URL.createObjectURL(blob);
                imgElement.alt = "User Image";
                imgElement.style.maxWidth = "100%";
                imgElement.style.height = "auto";

                const imageContainer = document.getElementById('imageContainer');
                imageContainer.innerHTML = "";
                imageContainer.appendChild(imgElement);
            })
            .catch(error => {
                notifyError("Erro ao carregar a imagem.");
                console.error('Erro:', error);
            });
    };

    return (
        <>
            <div className="w-full z-40 flex items-center p-3 md:justify-around justify-around mp:p-5 md:p-4 lg:p-5 xl:p-6 3xl:p-7" style={{ backgroundColor: "#003d71" }}>
                <h2 className="font-poppins text-[#f1f1f1] mp:text-xl mg:text-xl lg:text-2xl mp:font-normal">
                    Ótimo, quase lá! Agora insira como você será exibido a outros usuários
                </h2>
            </div>
            <div className="min-h-screen w-full bg-gradient-to-t from-[#00001d] to-[#003d71] flex flex-col items-center">
                <form onSubmit={onSubmitRegister} className="fundo-form mp:p-6 mp:px-6 w-9/12 mp:mb-10 flex flex-col items-center">
                    <div className="relative">
                        <input
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <img
                            src={profileImage ? URL.createObjectURL(profileImage) : "images/user.png"}
                            className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 3xl:h-36 3xl:w-36 rounded-full object-cover"
                            alt="Profile"
                        />
                    </div>
                    <span>
                        <label className="text-[#f1f1f1] mt-2 cursor-pointer">Escolher foto</label>
                    </span>
                    <div className="mb-5 w-full lg:w-6/12 mt-10">
                        <div className="div-input-form mb-4">
                            <label className="label-input-form sm:text-lg">Nome de Usuário</label>
                            <div className="div-input-with-icons">
                                <PersonOutlineRoundedIcon sx={{ position: 'absolute', left: '0.5rem', width: '1.5rem', height: '1.2rem', color: '#A4A4A4' }} />
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Nome de usuário"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="username"
                                />
                            </div>
                        </div>
                        <div className="div-input-form">
                            <label className="label-input-form sm:text-lg">Bio</label>
                            <div className="div-input-with-icons">
                                <textarea
                                    className="input-form"
                                    placeholder="Bio"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    id="bio"
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="conectech-button mp:py-1 mp:mt-6 mp:mb-4 mm:py-2 mm:px-24 sm:py-3 sm:px-28 md:text-lg md:px-32 2xl:px-36 2xl:mt-16">Entrar</button>
                </form>
                <div id="imageContainer"></div>
            </div>
            <ToastContainer />
        </>
    );
};

export default TelaCriarBio;

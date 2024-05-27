import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import data from '../../../interests.json';
import { createInterest, addInterestToUser } from '../../services/userService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TelaInteresses = () => {
    const [meusInteresses, setMeusInteresses] = useState(() => {
        const savedInteresses = localStorage.getItem('meusInteresses');
        return savedInteresses ? JSON.parse(savedInteresses) : [];
    });

    const notifySuccess = (mensagem) => {
        toast.success(mensagem, {
            position: "top-right"
        });
    };

    const notifyError = (mensagem) => {
        toast.error(mensagem, {
            position: "top-right"
        });
    };

    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        localStorage.setItem('meusInteresses', JSON.stringify(meusInteresses));
    }, [meusInteresses]);

    const manipulaInteresse = (interesse) => {
        if (meusInteresses.includes(interesse)) {
            setMeusInteresses(prevInteresses => prevInteresses.filter(item => item !== interesse));
        } else {
            setMeusInteresses(prevInteresses => [...prevInteresses, interesse]);
        }
    };

    const enviarInteresses = async (notifySuccess, notifyError) => {
        const erros = [];
        for (let interesse of meusInteresses) {
            try {
                await addInterestToUser(userId, interesse);
            } catch (error) {
                if (error.message === "Interesse não encontrado") {
                    try {
                        await createInterest(interesse);
                        await addInterestToUser(userId, interesse);
                    } catch (creationError) {
                        erros.push(`Erro ao criar e adicionar interesse "${interesse}": ${creationError.message}`);
                    }
                } else {
                    erros.push(`Erro ao adicionar interesse "${interesse}": ${error.message}`);
                }
            }
        }

        if (erros.length > 0) {
            notifyError(erros.join(', '));
        } else {
            notifySuccess('Todos os interesses foram adicionados com sucesso!');
        }

        setMeusInteresses([]);
        setTimeout(() => {
            navigate('/criarBio');
        }, 7000);
    };

    return (
        <>
            <Header bgColor='bg-[#003d71]'>
                <img className="h-14" src='images/img-ico.svg' alt="Logo" />
            </Header>
            <div className="bg-gradient-to-t from-[#00001d] to-[#003d71] min-h-screen flex flex-col justify-center items-center mp:mt-24 mg:mt-20">
                <div className="flex w-[70%] flex-col justify-start gap-2 mt-10 ">
                    <h2 className="font-poppins text-[#f1f1f1] mp:text-xl mg:text-xl lg:text-2xl mp:font-normal">
                        Selecione 5 interesses, {localStorage.getItem('userName')}?
                    </h2>
                    <p className="text-[#b5b5b5] text-xl lg:text-2xl">Selecione 3 ou mais</p>
                </div>
                <div className="div-input-with-icons mt-14">
                    <SearchOutlinedIcon sx={{ position: 'absolute', left: '0.5rem', width: '1.5rem', height: '1.2rem', color: '#A4A4A4' }} />
                    <input className="input-form rounded-2xl mp:w-60 mg:w-72 md:w-96 lg:text-xl lg:rounded-full lg:w-[32rem]" placeholder="Pesquise seus interesses" />
                </div>
                <ul className="w-[70%] flex flex-wrap flex-row mt-20 gap-4 mb-16">
                    {data.map((item) => (
                        <li
                            key={item.id}
                            className={`${meusInteresses.includes(item.nome) ? 'bg-[#fff]' : 'bg-[#31324B]'}
                                        ${meusInteresses.includes(item.nome) ? 'text-[#000]' : 'text-[#fff]'}
                                        font-poppins cursor-pointer text-base rounded-3xl border border-[#D8D8D8]
                                        py-2 px-4`}
                            onClick={() => manipulaInteresse(item.nome)}
                        >
                            {item.nome}
                        </li>
                    ))}
                </ul>
                <button className="conectech-button mp:mb-10 mp:px-24 mg:py-3 mg:px-32 mg:text-lg" onClick={() => enviarInteresses(notifySuccess, notifyError)}>
                    Enviar
                </button>
            </div>
            <ToastContainer />
        </>
    );
};

export default TelaInteresses;

import Header from "../../components/Header"
import ImagemLogo from "../../components/ImagemLogo"
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {ToastContainer, toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import useUserContext from '../../hooks/useUserContext';


import { useEffect, useState } from "react";
import axios from "axios";



const TelaCadastro = () => {
    const navigate = useNavigate()
    const notifySucess = (mensagem) => {
        toast.success(mensagem, {
            position:"top-right"
        });
    }

    const notifyError = (mensagem) => {
        toast.error(mensagem, {
            position:"top-right"
        })
    }

   
    const [newUser, setNewUser] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const {setUser} = useUserContext();


    const onSubmitRegister = (event) => {
       event.preventDefault();

       const name = event.target.nome.value;
       const email = event.target.email.value;
       const password = event.target.senha.value;
       const dateOfBirth = event.target.nascimento.value;
       const gender = event.target.genero.value;

       const novoUsuario = {
        name: name,
        email: email,
        dateOfBirth: dateOfBirth,
        password: password,
        gender: gender
       }

       setNewUser(novoUsuario)
       
       event.target.reset();

       
       
    }

    useEffect(() => {
        if(newUser !== ''){
            integracaoAPI(newUser)
            setUser(newUser)
            console.log(newUser)
        }
    },[newUser])

    const integracaoAPI = (user) => {
        axios.post('http://localhost:8080/users', {
            name: user.name,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            password: user.password,
            gender: user.gender
        })
        .then(response => {
            // Extrair o ID do usuário retornado do JSON
            const userId = response.data.id;
            
            // Armazenar as informações do usuário no sessionStorage
            localStorage.setItem('userId', userId);
            localStorage.setItem('userName', user.name);
            localStorage.setItem('userEmail', user.email);
            
            notifySucess('Conta criada com sucesso!');
            console.log(response.data);
    
            setTimeout(() => {
                navigate('/interesses');
            }, 5000);
        })
        .catch(error => {
            notifyError("Não foi possível criar a conta!");
            console.error('Erro ao criar a conta: ', error);
        });
    };
    
    return(
        <>
            <Header bgColor='bg-[#003d71]'>
                <ImagemLogo caminhoImagem='images/img-logo.png'/>
            </Header>
            <div className="min-h-screen w-full bg-gradient-to-t from-[#00001d] to-[#003d71] flex flex-col items-center">
                <form onSubmit={onSubmitRegister} className="fundo-form mp:mt-36 mp:p-2 mp:px-6 w-9/12 mp:mb-10">
                    <img className='mp:w-[6rem] mg:w-[7rem] 2xl:w-[8.5rem] mp:pt-3 lg:pt-5' src='images/img-telainicial.png'/>
                    <div className="mb-5 grid grid-cols-2 mp:gap-5 mm:gap-8 lg:grid-cols-6 lg:mt-10 2xl:w-10/12 2xl:gap-10">

                        <div className="div-input-form col-span-2 lg:col-span-3 ">
                            <label className="label-input-form sm:text-lg">Nome </label>
                            <div className="div-input-with-icons">
                                <PersonOutlineRoundedIcon sx={{ position:'absolute', left: '0.5rem', width:'1.5rem', height:'1.2rem', color: '#A4A4A4'}}/>
                                <input 
                                    className="input-form"
                                    type="text"
                                    placeholder="Nome completo"
                                    id="nome" />
                            </div>
                        </div>

                        <div className="div-input-form col-span-2 lg:col-span-3">
                            <label className="label-input-form sm:text-lg">Email</label>
                            <div className="div-input-with-icons">
                                <PersonOutlineRoundedIcon sx={{ position:'absolute', left: '0.5rem', width:'1.5rem', height:'1.2rem', color: '#A4A4A4'}}/>
                                <input 
                                    className="input-form"
                                    type="email"
                                    placeholder="Email"
                                    id="email" />
                            </div>
                        </div>
                        <div className="div-input-form col-span-2 lg:col-span-2">
                            <label className="label-input-form sm:text-lg">Senha</label>
                            <div className="div-input-with-icons ">
                                <LockOutlinedIcon sx={{ position:'absolute', left: '0.5rem', width:'1.5rem', height:'1.2rem', color: '#A4A4A4'}}/>
                                <input 
                                    className="input-form"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Senha"
                                    id="senha" />
                                 <RemoveRedEyeOutlinedIcon onClick={handleClickShowPassword} sx={{ position:'absolute', right: '0.5rem', width:'1.5rem', height:'1.3rem', color: '#A4A4A4'}}/>
                            </div>
                        </div>
                        <div className="div-input-form col-span-2 mm:col-span-1 lg:col-span-2">
                            <label className="label-input-form sm:text-lg ">Data de Nascimento</label>
                            <div className="div-input-with-icons">
                                <CalendarMonthOutlinedIcon sx={{ position:'absolute', left: '0.5rem', width:'1.5rem', height:'1.2rem', color: '#A4A4A4'}}/>
                                <input 
                                    className="input-form"
                                    type="date"
                                    placeholder="dd/nn/mmmm"
                                    id="nascimento" />
                            </div>
                        </div>
                        <div className="div-input-form col-span-2 mm:col-span-1 lg:col-span-2">
                            <label className="label-input-form sm:text-lg ">Gênero</label>
                            <div className="div-input-with-icons">
                                <WcOutlinedIcon sx={{ position:'absolute', left: '0.5rem', width:'1.5rem', height:'1.2rem', color: '#A4A4A4'}}/>
                                <select className="input-form" id="genero"   >
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="conectech-button mp:py-1 mp:mt-6 mp:mb-4 mm:py-2 mm:px-24 sm:py-3 sm:px-28 md:text-lg md:px-32 2xl:px-36 2xl:mt-16">Entrar</button>
                </form>
            </div>
            <ToastContainer/>
        </>
    )
}

export default TelaCadastro
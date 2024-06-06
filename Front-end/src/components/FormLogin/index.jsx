
import FormHelperText from '@mui/material/FormHelperText';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Header from '../Header';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import {useForm} from 'react-hook-form'
import * as yup from 'yup'


import ImagemLogo from '../ImagemLogo';
import axios from 'axios';
import useUserContext from '../../hooks/useUserContext';



function Form() {

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

   

    const navigate = useNavigate();
    const goToTelaCadastro = () => {
        navigate('/cadastro')
     }
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser, user} = useUserContext();
    

 

  

//   

    const {
        register,
        formState: {errors},
        handleSubmit
        
    } = useForm();

    const onSubmitLogin = (email, senha) => {
        
        axios.post(`http://localhost:8080/users/login?email=${email}&password=${password}`)
        .then(response => {
            const userData = response.data;
            notifySucess("Entrando...");
            console.log(userData);
            localStorage.setItem('userId', userData.id);
            localStorage.setItem('userName', userData.name);
            localStorage.setItem('userEmail', userData.email);
            setUser(userData);
            setTimeout(() => {
                navigate('/home');
            }, 5000);
        })
        .catch(error => {
            setEmail('');
            setPassword('');
            notifyError("Conta não encontrada!");
            console.error('Erro ao carregar a conta: ', error);
        });
      
    }

    
    return (
        <>
            <Header bgColor='bg-[#003d71]'>
                <ImagemLogo caminhoImagem='images/img-logo.png'/>
            </Header>
            <div className='w-full h-full flex flex-col items-center  mp:mt-44 mm:mt-40 xl:mt-28  2xl:mt-44 3xl:mt-52 overflow-x-hidden'>
                    
                    <form 
                        onSubmit={handleSubmit(() => {
                           
                            onSubmitLogin(email, password)
                        })}
                        className='fundo-form mp:p-2 mp:px-6 w-9/12  mp:gap-7 mb-6 mm:w-8/12 mm:h-5/6 mg:h-[90%] md:w-7/12 lg:w-6/12 xl:w-4/12 xl:h-[80%]  2xl:w-4/12 3xl:w-3/12 3xl:h-full  '
                        >
                        <img className='mp:w-[6rem] mg:w-[7rem] lg:pt-5' src='images/img-telainicial.png'/>
                        <div className='mb-5 flex flex-col mp:gap-5 mm:gap-8'>
                        <div className='div-input-form'>
                                    <label className='label-input-form'>Email</label>
                                    <div className="div-input-with-icons md:w-80 xl:w-80">
                                        <PersonOutlineRoundedIcon sx={{ position:'absolute', left: '0.5rem', width:'1.5rem', height:'1.2rem', color: '#A4A4A4'}}/>
                                        <input
                                        className={`input-form ${errors?.email? 'border-2 border-red-700' : 'border-none'} `}
                                        placeholder='Email...'
                                            type='email'
                                             {...register('email', {
                                                 required: true,
                                                
                                             })}
                                            onChange={(event) => setEmail(event.target.value)}
        
                                        />
                                    </div>
                                    
                                {errors?.email?.type === 'required' && <FormHelperText sx={{color: '#f44336'}}>Email é obrigatório</FormHelperText> }
                                {errors?.email?.type === 'validate' && <FormHelperText sx={{color: '#f44336'}}>Email é inválido</FormHelperText> }
                                
                                
                            </div>
                                
                                <div className='div-input-form'>
                                    <label className='label-input-form'>Senha</label>
                                    <div className={`div-input-with-icons md:w-80 xl:w-80`}>
                                        <LockOutlinedIcon sx={{ position:'absolute', left: '0.5rem', width:'1.5rem', height:'1.2rem', color: '#A4A4A4'}}/>
                                        <input
                                                className={`input-form ${errors?.password? 'border-2 border-red-700' : 'border-none'}`}
                                                placeholder='Senha...'
                                                type={showPassword ? 'text' : 'password'}
                                                 {...register('password', {
                                                     required: true, 
                                                     minLength: 8
                                                    
                                                 })}
                                                onChange={(event) => setPassword(event.target.value)}
                                            />
                                            <RemoveRedEyeOutlinedIcon onClick={handleClickShowPassword} sx={{ position:'absolute', right: '0.5rem', width:'1.5rem', height:'1.3rem', color: '#A4A4A4'}}/>
                                    </div>
                                        
                                        {errors?.password?.type === 'required' && <FormHelperText sx={{color: '#f44336'}}>Senha é obrigatória.</FormHelperText> }
                                        {errors?.password?.type === 'minLength' && <FormHelperText sx={{color: '#f44336'}}>Senha precisa ter no mínimo 8 caracteres.</FormHelperText>}
                                        {errors?.password?.type === 'validate' &&  <FormHelperText sx={{color: '#f44336'}}>O email ou senha estão incorretos.</FormHelperText> }   
                                </div>
                        </div>
                            
                               
                            
                          
                        <button type='submit' className='conectech-button mp:py-1 mp:px-16 mm:px-20 mm:py-2 mm:mb-2 '>Enviar</button>
                    </form>       
                    <p className='font-poppins text-[#f3f3f3] mp:text-sm flex mp:gap-2 mp:mb-10 mm:text-base 2xl:text-xl'>Ainda não tem cadastro? <p className='underline text-[#0b7fbe] font-poppins cursor-pointer' onClick={goToTelaCadastro}>Cadastre-se</p></p>  
               </div>
               <ToastContainer />
        </>
       
       


       
    );
}

export default Form
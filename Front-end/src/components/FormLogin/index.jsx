
import FormHelperText from '@mui/material/FormHelperText';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Header from '../Header';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

import {useForm} from 'react-hook-form'
import {isEmail} from 'validator';

import ImagemLogo from '../ImagemLogo';
import axios from 'axios';
import useUserContext from '../../hooks/useUserContext';


function Form() {
    const navigate = useNavigate();
    const goToTelaCadastro = () => {
        navigate('/cadastro')
     }
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser, user} = useUserContext();

  

    const {
        register,
        reset, 
        formState: { errors },
    } = useForm();

    const onSubmitLogin = (email, senha) => {
        
     axios.post(`http://localhost:8080/users/login?email=${email}&password=${senha}`)
        .then(response => {
            console.log(response.data)
            setUser(response.data)
        })
        .catch(error => {
            console.error('Erro ao carregar os posts: ' , error)
        })
        
        reset();
        console.log(user)
        navigate('/home')
    }

    
    return (
        <>
            <Header bgColor='bg-transparent'>
                <ImagemLogo caminhoImagem='images/img-logo.png'/>
            </Header>
            <div className='w-full h-screen flex flex-col items-center justify-center mp:mt-20   '>
                    
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault()
                            onSubmitLogin(email, password)
                        }}
                        className='fundo-form mp:p-3 mp:px-5 w-9/12 h-11/12 mp:gap-7 mb-6 '
                        >
                        <img className='mp:w-[6rem]' src='images/img-telainicial.png'/>
                        <div className='mb-5 flex flex-col mp:gap-5'>
                            <div className='w-full flex flex-col '>
                                    <label className='font-poppins text-[#fff] text-xs mp:mb-1'>Email</label>
                                    <div className={`flex items-center rounded-md bg-[#fff] ${errors?.email? 'border-2 border-red-700' : 'border-none' }`}>
                                        <PersonOutlineRoundedIcon sx={{background:'#fff', color:'#A4A4A4', fontSize:'1rem', height:'100%', borderTopLeftRadius:'6px', borderBottomLeftRadius:'6px', paddingLeft:'0.3rem', width:'10%' }}/>
                                        <input
                                        className={`outline-none  mp:text-xs mp:px-3 mp:py-1 placeholder:text-slate-400 rounded-r-md w-[80%]`}
                                        placeholder='Email...'
                                            type='email'
                                            {...register('email', {
                                                required: true,
                                                validate: (value) => isEmail(value)
                                            })}
                                            onChange={(event) => setEmail(event.target.value)}
        
                                        />
                                    </div>
                                    
                                {errors?.email?.type === 'required' && <FormHelperText sx={{color: '#f44336'}}>O email é obrigatório.</FormHelperText> }
                                {errors?.email?.type === 'validate' && <FormHelperText sx={{color: '#f44336'}}>O email está incorreto.</FormHelperText> }
                                
                                </div>
                            
                                
                                <div className='w-full flex flex-col '>
                                    <label className='font-poppins  text-[#fff] text-xs mp:mb-1'>Senha</label>
                                    <div className={`flex items-center justify-around rounded-md bg-[#fff] ${errors?.password? 'border-2 border-red-700' : 'border-none' } `}>
                                        <LockOutlinedIcon sx={{background:'#fff', color:'#A4A4A4', fontSize:'1rem', height:'100%', borderTopLeftRadius:'6px', borderBottomLeftRadius:'6px', paddingLeft:'0.3rem', width:'10%' }}/>
                                        <input
                                                className='outline-none mp:text-xs mp:px-3 mp:py-1 placeholder:text-slate-400 w-[80%] '
                                                placeholder='Senha...'
                                                type={showPassword ? 'text' : 'password'}
                                                {...register('password', {
                                                    required: true, 
                                                    minLength: 8
                                                    
                                                })}
                                                onChange={(event) => setPassword(event.target.value)}
                                            />
                                            <RemoveRedEyeOutlinedIcon onClick={handleClickShowPassword} sx={{background:'#fff', color:'#A4A4A4', fontSize:'2rem', height:'100%', borderTopRightRadius:'6px', borderBottomRightRadius:'6px', width:'10%', paddingRight:'0.3rem' }}/>
                                    </div>
                                       
                                        {errors?.password?.type === 'required' && <FormHelperText sx={{color: '#f44336'}}>Senha é obrigatória.</FormHelperText> }
                                        {errors?.password?.type === 'minLength' && <FormHelperText sx={{color: '#f44336'}}>Senha precisa ter no mínimo 8 caracteres.</FormHelperText>}
                                        {errors?.password?.type === 'validate' &&  <FormHelperText sx={{color: '#f44336'}}>O email ou senha estão incorretos.</FormHelperText> }  
                                </div>
                        </div>
                            
                               
                            
                          
                        <button type='submit' className='conectech-button mp:py-1 mp:px-16'>Enviar</button>
                    </form>       
                    <p className='font-poppins text-[#f3f3f3] mp:text-sm flex mp:gap-2 mp:mb-10'>Ainda não tem cadastro? <p className='underline text-[#0b7fbe] font-poppins cursor-pointer' onClick={goToTelaCadastro}>Cadastre-se</p></p>  
               </div>
        
        </>
       
       


       
    );
}

export default Form
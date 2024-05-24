/* eslint-disable react/prop-types */

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import {useNavigate} from 'react-router-dom'

const Evento = ({ imagem, titulo, data, local, totalParticipantes, organizador, descricaoEvento, fotoOrganizador, iconSalvar}) => {

    
  
    const navigate = useNavigate();
    const goToTelaEvento = ()=> {
        const evento = {imagem, titulo, data, local, totalParticipantes, organizador, descricaoEvento, fotoOrganizador}
        navigate(`/evento`, {state: {evento}});
    }
    return(
        <div className='mp:mt-1 grid w-full xl:w-[90%] grid-cols-3 gap-4 sm:gap-5 sm:pr-20 md:pr-32 mp:p-3 xl:p-0  shadow-md rounded-lg mp:mx-3 bg-[#fff]  ' onClick={goToTelaEvento}>
            <img className='col-span-1 xl:col-span-3 xl:w-full xl:h-36 h-[90%] sm:h-full object-cover mp:w-20 md:w-32 rounded-lg' src={imagem}/>
            <div className='col-span-2 xl:col-span-3 mp:-ml-2  md:ml-3 xl:ml-0 flex flex-col  xl:pt-3 xl:pb-2  xl:mb-3 justify-center xl:items-center'>
                <div className='xl:flex xl:text-center xl:flex-col-reverse xl:items-center '>
                    <span className='text-[#074261] font-poppins mp:text-[11px] sm:text-[16px]'>{data}</span>
                    <p className='text-[14px] font-medium font-poppins mp:text-[13px] sm:text-[17px]'>{titulo}</p>
                </div>
                <div className='flex items-center '>
                    <FmdGoodOutlinedIcon sx={{color:'#B0B1BC', height:'1rem'}}/>
                    <span className='mp:text-[12px] sm:text-base md:text-[1.1rem] text-[#747688]'>{local}</span>
                    <div className='ml-3 '>
                        {iconSalvar}
                    </div>
                </div>   
            </div>
           
        </div>
    )
}

export default Evento
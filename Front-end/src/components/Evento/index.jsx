/* eslint-disable react/prop-types */

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import {useNavigate} from 'react-router-dom'

const Evento = ({ imagem, titulo, data, local, totalParticipantes, organizador, descricaoEvento, fotoOrganizador}) => {

    
  
    const navigate = useNavigate();
    const goToTelaEvento = ()=> {
        const evento = {imagem, titulo, data, local, totalParticipantes, organizador, descricaoEvento, fotoOrganizador}
        navigate(`/evento`, {state: {evento}});
    }
    return(
        <div className='mp:mt-1 grid w-full grid-cols-3 gap-4 sm:gap-0  mp:p-3 items-center shadow-lg rounded-lg mp:mx-3   bg-blue-300' onClick={goToTelaEvento}>
            <img className='col-span-1 h-[90%] sm:h-full object-cover mp:w-20 rounded-lg' src={imagem}/>
            <div className='col-span-2 mp:-ml-2 sm:-ml-9 flex flex-col  justify-center'>
                <div>
                    <span className='text-[#074261] font-poppins mp:text-[13px] sm:text-[16px]'>{data}</span>
                    <p className='text-[14px] font-medium font-poppins sm:text-[17px]'>{titulo}</p>
                </div>
                <div className='mp:-pl-3'>
                    <FmdGoodOutlinedIcon sx={{color:'#B0B1BC', height:'1rem'}}/>
                    <span className='text-sm sm:text-base text-[#747688]'>{local}</span>
                    
                </div>   
            </div>
           
        </div>
    )
}

export default Evento
/* eslint-disable react/prop-types */

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom'


const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const goToPage = (page) => {
        navigate(page)
    }
 
    const [sidebar, setSidebar] = useState(false) 
    
    const showSidebar = () => setSidebar(!sidebar) 
    return(
        <nav id="sidebar" className={`md:h-screen bg-[#ffffff]   flex flex-col justify-between  fixed z-50    ${sidebar ? 'min-w-[15%] h-screen' : 'min-w-3 h-[18%]'} ml-0 `} >
            <div id="sidebar-content" className={`p-3 flex  flex-col  items-center  `}>
                <div id="foto-conec"  className="flex items-center gap-12">
                    {sidebar && <img className="w-32" src='images/img-logo-pree.png'/>}
                    {sidebar 
                    ? <CloseRoundedIcon sx={{width:'2.2rem', height:'4rem', color: '#4A91A5', cursor: 'pointer'}}  onClick={showSidebar} />
                    : <MenuRoundedIcon sx={{width:'2.2rem', height:'4rem',  color: '#4A91A5', cursor: 'pointer'}}  onClick={showSidebar} />}
                </div>
                <div className={` ${sidebar ? 'block' : 'hidden'} md:block `}>
                    <ul id="side-itens" className="flex flex-col gap-2 list-none   ">
                            <li id="side-item" className={`rounded-[8px] p-4  cursor-pointer ${location.pathname === '/forum' ? 'bg-[#074261] ' : ''}`} onClick={() => {goToPage('/forum')}}>
                                <a className="no-underline flex items-center justify-center gap-3 text-[#074261]">
                                <ForumOutlinedIcon sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'1.5rem', height:'1.5rem', color: location.pathname === '/forum' ? '#fff' : '#074261'}} /> 
                                <span className={`overflow-hidden whitespace-nowrap text-ellipsis text-base font-poppins transition-[width] duration-[1000ms]  ${sidebar ? 'w-36' : 'w-0'} ${sidebar ? 'h-auto' : 'h-0'} ${location.pathname === '/forum' ? 'text-[#fff]' : ''}  `}>Fórum</span> 
                                </a>
                            </li>

                            <li id="side-item" className={`rounded-[8px] p-4 cursor-pointer ${location.pathname === '/favoritos' ? 'bg-[#074261] ' : ''}`} onClick={() => {goToPage('/favoritos')}}>
                                <a className="no-underline flex items-center justify-center gap-3 text-[#074261]">
                                <BookmarkBorderOutlinedIcon sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'1.5rem', height:'1.5rem', color: location.pathname === '/favoritos' ? '#fff' : '#074261'}} /> 
                                <span className={`overflow-hidden whitespace-nowrap text-ellipsis text-base font-poppins transition-[width] duration-[1000ms]  ${sidebar ? 'w-36' : 'w-0'} ${sidebar ? 'h-auto' : 'h-0'} ${location.pathname === '/favoritos' ? 'text-[#fff]' : ''} `} >Favoritos</span> 
                                </a>
                            </li>

                            <li id="side-item" className={`rounded-[8px] p-4 cursor-pointer ${location.pathname === '/sobrenos' ? 'bg-[#074261]' : ''}`} onClick={() => {goToPage('/sobrenos')}}>
                                <a className={`no-underline flex items-center justify-center gap-3 text-[#074261] ${sidebar ? 'justify-start' : 'justify-center'}`}>
                                <PeopleAltOutlinedIcon sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'1.5rem', height:'1.5rem', color: location.pathname === '/sobrenos' ? '#fff' : '#074261'}} /> 
                                <span className={`overflow-hidden whitespace-nowrap text-ellipsis text-base font-poppins transition-[width] duration-[1000ms]  ${sidebar ? 'w-36' : 'w-0'} ${sidebar ? 'h-auto' : 'h-0'} ${location.pathname === '/sobrenos' ? 'text-[#fff]' : ''} `}>Sobre Nós</span> 
                                </a>
                            </li>

                        <li id="side-item" className={`rounded-[8px] p-4 cursor-pointer  ${location.pathname === '/eventos' ? 'bg-[#074261]' : ''}`} onClick={() => {goToPage('/eventos')}}>
                                <a className="no-underline flex items-center justify-center gap-3 text-[#074261]">
                                <EventOutlinedIcon sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'1.5rem', height:'1.5rem', color: location.pathname === '/eventos' ? '#fff' : '#074261' }} /> 
                                <span className={`overflow-hidden whitespace-nowrap text-ellipsis text-base font-poppins transition-[width] duration-[1000ms]  ${sidebar ? 'w-36' : 'w-0'} ${sidebar ? 'h-auto' : 'h-0'} ${location.pathname === '/eventos' ? 'text-[#fff]' : ''} `}>Eventos</span> 
                                </a>
                            </li>
                    </ul>
                    <div id="config" className="border-t mt-7 border-t-[#e3e9f7] p-3 flex items-center justify-center">
                        <button className="border-none p-3 text-sm flex gap-5 items-center rounded-lg text-start cursor-pointer bg-transparent">
                            <SettingsOutlinedIcon sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'1.3rem', height:'1.3rem', color: location.pathname === '/settings' ? '#fff' : '#074261' }}/>
                            <span className={`overflow-hidden whitespace-nowrap text-[#074261] text-ellipsis font-poppins text-base transition-[width] duration-[1000ms]  ${sidebar ? 'w-40' : 'w-0'} ${sidebar ? 'h-auto' : 'h-0'} `}>Configurações</span>
                        </button>
                    </div>
                </div>
                
               
            </div>
            
         
        </nav>
    )
}

export default Sidebar
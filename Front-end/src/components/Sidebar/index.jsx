/* eslint-disable react/prop-types */
import { DivIcons, DivSettings, DivSidebar, IconsSidebar, ItemSidebar, TextItemSidebar } from "./style"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
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
        <DivSidebar sidebarOn={sidebar}>

            {sidebar 
                ? <CloseRoundedIcon sx={IconsSidebar.iconMenu}  onClick={showSidebar} />
                : <MenuRoundedIcon sx={IconsSidebar.iconMenu}  onClick={showSidebar} />}
            <DivIcons>
                <ItemSidebar onClick={() => {goToPage('/forum')}}>
                    <ForumOutlinedIcon sx={IconsSidebar.iconsItens} />
                    <TextItemSidebar localizacao={location.pathname === '/forum'} sidebarOn={sidebar}>Fórum</TextItemSidebar>
                </ItemSidebar>
                <ItemSidebar onClick={() => {goToPage('/favoritos')}}>
                    <BookmarkBorderOutlinedIcon  sx={IconsSidebar.iconsItens}/>
                    <TextItemSidebar localizacao={location.pathname === '/favoritos'} sidebarOn={sidebar}>Favoritos</TextItemSidebar>
                </ItemSidebar>
                <ItemSidebar onClick={() => {goToPage('/chat')}}>
                    <ChatBubbleOutlineOutlinedIcon sx={IconsSidebar.iconsItens}/>
                    <TextItemSidebar localizacao={location.pathname === '/chat'} sidebarOn={sidebar}>Chat</TextItemSidebar>
                </ItemSidebar>
                <ItemSidebar onClick={() => {goToPage('/eventos')}} >
                    <EventOutlinedIcon sx={IconsSidebar.iconsItens}/>
                    <TextItemSidebar localizacao={location.pathname === '/eventos'} sidebarOn={sidebar} >Eventos</TextItemSidebar>
                </ItemSidebar>
            </DivIcons>

            <DivSettings>
                <SettingsOutlinedIcon sx={IconsSidebar.iconsItens}/>
                <TextItemSidebar sidebarOn={sidebar}>Configurações</TextItemSidebar>
            </DivSettings>
            
        </DivSidebar>
    )
}

export default Sidebar
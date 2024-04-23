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

const Sidebar = () => {
    
    const [sidebar, setSidebar] = useState(false)   
    const showSidebar = () => setSidebar(!sidebar) 
    return(
        <DivSidebar sidebarOn={sidebar}>

            {sidebar 
                ? <CloseRoundedIcon sx={IconsSidebar.iconMenu}  onClick={showSidebar} />
                : <MenuRoundedIcon sx={IconsSidebar.iconMenu}  onClick={showSidebar} />}
            <DivIcons>
                <ItemSidebar>
                    <ForumOutlinedIcon sx={IconsSidebar.iconsItens} />
                    <TextItemSidebar sidebarOn={sidebar}>Fórum</TextItemSidebar>
                </ItemSidebar>
                <ItemSidebar>
                    <BookmarkBorderOutlinedIcon sx={IconsSidebar.iconsItens}/>
                    <TextItemSidebar sidebarOn={sidebar}>Favoritos</TextItemSidebar>
                </ItemSidebar>
                <ItemSidebar>
                    <ChatBubbleOutlineOutlinedIcon sx={IconsSidebar.iconsItens}/>
                    <TextItemSidebar sidebarOn={sidebar}>Chat</TextItemSidebar>
                </ItemSidebar>
                <ItemSidebar>
                    <EventOutlinedIcon sx={IconsSidebar.iconsItens}/>
                    <TextItemSidebar sidebarOn={sidebar}>Eventos</TextItemSidebar>
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
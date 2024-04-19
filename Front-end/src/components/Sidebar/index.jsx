/* eslint-disable react/prop-types */
import { DivSidebar, IconsSidebar } from "./style"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from "react";

const Sidebar = () => {
    
    const [sidebar, setSidebar] = useState(false)   
    const showSidebar = () => setSidebar(!sidebar) 
    return(
        <DivSidebar sidebarOn={sidebar}>

            {sidebar 
                ? <CloseRoundedIcon onClick={showSidebar} sx={IconsSidebar.iconMenu}/>
                : <MenuRoundedIcon  onClick={showSidebar} sx={IconsSidebar.iconMenu}/>}
            
        </DivSidebar>
    )
}

export default Sidebar
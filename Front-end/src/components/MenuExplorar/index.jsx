import { ContainerExplorar, TituloExplorar,   TituloItemExplorar,  ItemExplorar, DivDadosItemExplorar, DivDadosPessoais, ImagemItemExplorar, NomeItemExplorar, IconAdd, DivItensExplorar, DivTags, ItemTag, ItensExplorar } from "./style"
import dataUser from '../../../usersExplorer.json'
import dataGroup from '../../../groupsExplorer.json'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useState } from "react";

const MenuExplorar = () => {

    const [addUserState, setAddUserState] = useState({});
    const toggleAddUser = (itemId) => {
        setAddUserState(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    };
    const [addGroupState, setAddGroupState] = useState({});
    const toggleAddGroup = (itemId) => {
        setAddGroupState(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    };

    return(
        <ContainerExplorar>
            <TituloExplorar>Explorar</TituloExplorar>

                <ItensExplorar>
                    <TituloItemExplorar>Usuários</TituloItemExplorar>
                    <DivItensExplorar>
                        {dataUser.map((user, index)=>{
                            return(
                                <ItemExplorar key={index}>
                                    <DivDadosItemExplorar>
                                        <DivDadosPessoais>
                                            <ImagemItemExplorar src={user.fotoPerfil}/>
                                            <NomeItemExplorar>{user.nome}</NomeItemExplorar>
                                            
                                        </DivDadosPessoais>
                                       
                                         {addUserState[index]
                                            ? <DoneOutlinedIcon onClick={() => toggleAddUser(index)} sx={IconAdd.style}/>
                                            : <PersonAddAlt1OutlinedIcon onClick={() => toggleAddUser(index)} sx={IconAdd.style}/> } 
                                    </DivDadosItemExplorar>
                                    <DivTags>
                                        {user.tags.map((tag, index)=>{
                                            return(
                                                <ItemTag key={index}>{tag}</ItemTag>
                                            )
                                        })}
                                    </DivTags>
                                    
                                </ItemExplorar>
                            )
                        })}
                    </DivItensExplorar>
                    
                </ItensExplorar>
                <ItensExplorar>
                    <TituloItemExplorar>Grupos</TituloItemExplorar> 
                    <DivItensExplorar>
                        {dataGroup.map((group, index)=>{
                            return(
                                <ItemExplorar key={index}>
                                    <DivDadosItemExplorar>
                                        <DivDadosPessoais>
                                            <ImagemItemExplorar src={group.fotoPerfilGrupo}/>
                                            <NomeItemExplorar>{group.nomeGrupo}</NomeItemExplorar>
                                        </DivDadosPessoais>
                                        {addGroupState[index]
                                            ? <DoneOutlinedIcon onClick={() => toggleAddGroup(index)} sx={IconAdd.style}/>
                                            : <PersonAddAlt1OutlinedIcon onClick={() => toggleAddGroup(index)} sx={IconAdd.style}/> }
                                        
                                    </DivDadosItemExplorar>
                                    <DivTags>
                                        {group.tagsGrupo.map((tag, index)=>{
                                            return(
                                                <ItemTag key={index}>{tag}</ItemTag>
                                            )
                                        })}
                                    </DivTags>
                                    
                                </ItemExplorar>
                            )
                        })}
                    </DivItensExplorar>
                </ItensExplorar> 
        </ContainerExplorar>
    )
}

export default MenuExplorar
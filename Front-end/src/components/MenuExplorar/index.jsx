import { ContainerExplorar, TituloExplorar, ItensExplorar, UsuariosExplorar, TituloItemExplorar, GruposExplorar, ItemExplorar, DivDadosItemExplorar, DivDadosPessoais, ImagemItemExplorar, NomeItemExplorar, IconAdd, DivItensExplorar, DivTags, ItemTag } from "./style"
import dataUser from '../../../../usersExplorer.json'
import dataGroup from '../../../../groupsExplorer.json'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useState } from "react";

const MenuExplorar = () => {

    const [addUser, setAddUser] = useState(false);
    const addUsuario = () => setAddUser(!addUser);
    const removeUsuario = () => setAddUser(false)

    return(
        <ContainerExplorar>
            <TituloExplorar>Explorar</TituloExplorar>
            <ItensExplorar>
                <UsuariosExplorar>
                    <TituloItemExplorar>Usuários</TituloItemExplorar>
                    <DivItensExplorar>
                        {dataUser.map((user)=>{
                            return(
                                <ItemExplorar key={user.idUser}>
                                    <DivDadosItemExplorar>
                                        <DivDadosPessoais>
                                            <ImagemItemExplorar src={user.fotoPerfil}/>
                                            <NomeItemExplorar>{user.nome}</NomeItemExplorar>
                                        </DivDadosPessoais>
                                        <PersonAddAltOutlinedIcon sx={IconAdd.style}/>
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
                    
                </UsuariosExplorar>
                <GruposExplorar>
                    <TituloItemExplorar>Grupos</TituloItemExplorar> 
                    <DivItensExplorar>
                        {dataGroup.map((group)=>{
                            return(
                                <ItemExplorar key={group.idGrupo}>
                                    <DivDadosItemExplorar>
                                        <DivDadosPessoais>
                                            <ImagemItemExplorar src={group.fotoPerfilGrupo}/>
                                            <NomeItemExplorar>{group.nomeGrupo}</NomeItemExplorar>
                                        </DivDadosPessoais>
                                        {addUser
                                            ? <DoneOutlinedIcon onClick={removeUsuario} sx={IconAdd.style}/>
                                            : <PersonAddAltOutlinedIcon onClick={addUsuario} sx={IconAdd.style}/> }
                                        
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
                </GruposExplorar>
            </ItensExplorar>
        </ContainerExplorar>
    )
}

export default MenuExplorar
import dataUser from '../../../usersExplorer.json'
import dataGroup from '../../../groupsExplorer.json'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useState } from "react";

const MenuExplorar = () => {

   
    const [addUserState, setAddUserState] = useState({});
    const [activeIndex, setActiveIndex] = useState(null);

    const escolherTipo = (index) => {
      setActiveIndex(index);
    };
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
        <div id="container-explorar" className='mp:ml-24 mp:mt-10'>
            <p id="titulo-explorar" className='font-poppins font-medium text-base sm:text-lg 2xl:text-2xl md:text-xl  text-[#363636]'>Explorar</p>
            <div id="titulo-itens-explorar" className='flex mp:mx-3 items-center justify-center mp:text-sm mp:gap-8 mp:mt-4 mp:mb-6 mp:py-2 mp:px-1 shadow-md rounded-md '>
                {['Usuários', 'Grupos', 'Temas'].map((item, index) => (
                        <p
                        key={index}
                        className={`${activeIndex === index ? 'text-[#000]' : 'text-[#909090]'}`}
                        onClick={() => escolherTipo(index)}
                        >
                        {item}
                        </p>
                ))}
            </div>

                <div id="itens-explorar">
                    <p id="titulo-item-explorar" className="hidden">Usuários</p>
                    <div id="div-tipos-explorar">
                        {dataUser.map((user, index)=>{
                            return(
                                <div id="item-explorar" key={index}>
                                    <div id="div-dados-item-explorar">
                                        <div id="div-dados-pessoais">
                                            <img id="img-item-explorar" src={user.fotoPerfil}/>
                                            <p id="nome-item-explorar">{user.nome}</p>
                                            
                                        </div>
                                       
                                         {addUserState[index]
                                            ? <DoneOutlinedIcon onClick={() => toggleAddUser(index)} />
                                            : <PersonAddAlt1OutlinedIcon onClick={() => toggleAddUser(index)} /> } 
                                    </div>
                                    <div id="div-tags">
                                        {user.tags.map((tag, index)=>{
                                            return(
                                                <span id="item-tag" key={index}>{tag}</span>
                                            )
                                        })}
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                <div id="itens-explorar">
                    <p id="titulo-item-explorar" className="hidden">Grupos</p>
                    <div id="div-tipos-explorar">
                        {dataGroup.map((group, index)=>{
                            return(
                                <div id="item-explorar" key={index}>
                                    <div id="div-dados-item-explorar">
                                        <div id="div-dados-pessoais">
                                            <img id="img-item-explorar" src={group.fotoPerfilGrupo}/>
                                            <p id="nome-item-explorar">{group.nomeGrupo}</p>
                                            
                                        </div>
                                       
                                         {addGroupState[index]
                                            ? <DoneOutlinedIcon onClick={() => toggleAddGroup(index)} />
                                            : <PersonAddAlt1OutlinedIcon onClick={() => toggleAddGroup(index)} /> } 
                                    </div>
                                    <div id="div-tags">
                                        {group.tagsGrupo.map((tag, index)=>{
                                            return(
                                                <span id="item-tag" key={index}>{tag}</span>
                                            )
                                        })}
                                    </div>
                                
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
        </div>
    )
}

export default MenuExplorar
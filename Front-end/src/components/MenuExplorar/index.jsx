import dataUser from '../../../usersExplorer.json'
import dataGroup from '../../../groupsExplorer.json'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useState } from "react";

const MenuExplorar = () => {

    
   
    const [addUserState, setAddUserState] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);

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
        <div id="container-explorar" className='mp:ml-24 md:ml-[6.5rem] lg:mt-[6.8rem] lg:ml-1 xl:ml-14 2xl:ml-12  mb-10'>
            <p id="titulo-explorar" className='font-poppins font-medium mp:text-sm ml-3 text-base sm:text-lg sm:ml-6 2xl:text-2xl md:text-xl  text-[#363636]'>Explorar</p>
            <div id="titulo-itens-explorar" className='flex  md:ml-4 items-center ml-2 mr-7 justify-center mp:text-sm mp:gap-8  mp:mt-4 mp:mb-6 mp:py-2 mp:px-1  shadow-md rounded-md lg:gap-3 2xl:w-full '>
                {['Usuários', 'Grupos', 'Temas'].map((item, index) => (
                        <p
                        key={index}
                        className={`${activeIndex === index ? 'text-[#000]' : 'text-[#909090]'} cursor-pointer font-poppins text-xs mm:text-sm sm:text-base lg:text-sm 2xl:text-base`}
                        onClick={() => escolherTipo(index)}
                        >
                        {item}
                        </p>
                ))}
            </div>
                {activeIndex === 0 && (
                    <div id="itens-explorar" className='md:ml-2 '>
                        <p id="titulo-item-explorar" className="hidden">Usuários</p>
                        <div id="div-tipos-explorar" className='gap-3 flex flex-col'>
                         {dataUser.map((user, index)=>{
                             return(
                                 <div id="item-explorar" className='shadow-md rounded-md flex flex-col gap-2 sm:gap-4 ml-2 mr-7 p-2 2xl:w-full 2xl:px-5' key={index}>
                                    <div id="div-dados-item-explorar" className='flex w-full justify-between '>
                                        <div id="div-dados-pessoais" className='flex items-center gap-2'>
                                             <img id="img-item-explorar" className='w-7 h-7 mg:w-8 mg:h-8 2xl:h-9 2xl:w-9 rounded-full object-cover cursor-pointer' src={user.fotoPerfil}/>
                                             <p id="nome-item-explorar" className='font-poppins text-[#000000] text-xs mg:text-sm 2xl:text-base'>{user.nome}</p>
                                             
                                        </div>
                                        
                                          {addUserState[index]
                                             ? <DoneOutlinedIcon onClick={() => toggleAddUser(index)} />
                                             :  <svg onClick={() => toggleAddUser(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                             className="w-5 h-5 col-span-1 text-[#575757] mp:ml-8 mm:ml-12 md:w-6 md:h-6 3xl:ml-60 3xl:w-8 3xl:h-8">
                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                             </svg>
                  } 
                                    </div>
                                     <div id="div-tags" className='flex gap-3'>
                                         {user.tags.map((tag, index)=>{
                                             return(
                                                 <span id="item-tag" className='font-poppins px-2 py-1 rounded-xl text-[0.6rem] mg:text-xs 2xl:text-sm 2xl:rounded-2xl text-[#FFFFFF] bg-[#4A91A5]' key={index}>{tag}</span>
                                             )
                                         })}
                                     </div>
                                     
                                 </div>
                             )
                         })}
                        </div>
                     
                    </div>
                )}
               {activeIndex === 1 && (
                     <div id="itens-explorar" className='md:ml-2'>
                     <p id="titulo-item-explorar" className="hidden">Grupos</p>
                     <div id="div-tipos-explorar" className='gap-3 flex flex-col'>
                         {dataGroup.map((group, index)=>{
                             return(
                                 <div id="item-explorar" className='shadow-md rounded-md flex flex-col gap-2 sm:gap-4 ml-2 mr-7 p-2 2xl:w-full 2xl:px-5' key={index}>
                                     <div id="div-dados-item-explorar" className='flex w-full justify-between '>
                                         <div id="div-dados-pessoais"  className='flex items-center gap-2'>
                                             <img id="img-item-explorar"  className='w-7 h-7 mg:w-8 mg:h-8 2xl:h-9 2xl:w-9 rounded-full object-cover cursor-pointer' src={group.fotoPerfilGrupo}/>
                                             <p id="nome-item-explorar" className='font-poppins text-[#000000] text-xs mg:text-sm 2xl:text-base'>{group.nomeGrupo}</p>
                                             
                                         </div>
                                        
                                          {addGroupState[index]
                                             ? <DoneOutlinedIcon onClick={() => toggleAddGroup(index)} />
                                             : <svg onClick={() => toggleAddUser(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                             className="w-5 h-5 col-span-1 text-[#575757] mp:ml-8 mm:ml-12 md:w-6 md:h-6  3xl:ml-60 3xl:w-8 3xl:h-8">
                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                             </svg> } 
                                     </div>
                                     <div id="div-tags" className='flex gap-3'>
                                         {group.tagsGrupo.map((tag, index)=>{
                                             return(
                                                 <span id="item-tag" className='font-poppins px-2 py-1 rounded-xl text-[0.6rem] mg:text-xs 2xl:text-sm 2xl:rounded-2xl text-[#FFFFFF] bg-[#4A91A5]' key={index}>{tag}</span>
                                             )
                                         })}
                                     </div>
                                 
                                 </div>
                             )
                         })}
                     </div>
                     
                 </div>
               )}
               {activeIndex === 2 && (
                <p className='ml-2 font-poppins text-sm'>Ainda não há temas para explorar!</p>
               )}
               
        </div>
    )
}

export default MenuExplorar
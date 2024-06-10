import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useState, useEffect } from "react";
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import dataUser from '../../../usersExplorer.json';
import {ToastContainer, toast} from 'react-toastify'

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [addUserState, setAddUserState] = useState({});
    const [curtidas, setCurtidas] = useState([]);
    const [numCurtidas, setNumCurtidas] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', description: '' });
    const [isCreating, setIsCreating] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const notifySucess = (mensagem) => {
        toast.success(mensagem, {
            position:"top-right"
        });
    }

    const notifyError = (mensagem) => {
        toast.error(mensagem, {
            position:"top-right"
        })
    }
    
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/posts');
            const postData = response.data;

            const postsWithAuthorDetails = await Promise.all(postData.map(async (post) => {
                const authorResponse = await axios.get(`http://localhost:8080/users/${post.authorId}`);
                const authorData = authorResponse.data;

                const imageResponse = await axios.get(`http://localhost:8080/users/${post.authorId}/image`, { responseType: 'blob' });
                const imageUrl = URL.createObjectURL(imageResponse.data);

                return {
                    ...post,
                    authorName: authorData.name,
                    fotoOrganizador: imageUrl,
                    authorInterests: authorData.interests
                };
            }));

            setPosts(postsWithAuthorDetails);
            setAddUserState(postsWithAuthorDetails.map(() => false));
            setCurtidas(postsWithAuthorDetails.map(() => false));
            setNumCurtidas(postsWithAuthorDetails.map(post => post.likes));
            notifySucess('Post carregados com sucesso!');
        } catch (error) {
            notifyError('Erro ao carregar posts');
            console.error('Error fetching posts or author details:', error);
        }
    };

    const handleCreatePost = async () => {
        try {
            setIsCreating(true);
            const userId = localStorage.getItem('userId');
            await axios.post(`http://localhost:8080/users/${userId}/posts`, newPost);
            setNewPost({ title: '', description: '' });
            handleCloseDialog();
            notifySucess('Post criado com sucesso!');
            fetchPosts(); // Refresh posts after creating a new one
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setIsCreating(false);
        }
    };

    const toggleAddUser = (itemId) => {
        setAddUserState(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    };

    const curtirEDescurtirPost = (postId) => {
        setCurtidas(prevCurtidas => {
            const updatedCurtidas = [...prevCurtidas];
            updatedCurtidas[postId] = !updatedCurtidas[postId];
            return updatedCurtidas;
        });

        setNumCurtidas(prevNumCurtidas => {
            const updatedNumCurtidas = [...prevNumCurtidas];
            updatedNumCurtidas[postId] += curtidas[postId] ? -1 : 1;
            return updatedNumCurtidas;
        });
    };

    const handleClose = () => {
        setOpen(false);
    };
    const goToHomePage = () => {
        navigate('/home');
    };

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return(
        <div className="min-w-screen min-h-screen bg-[#fbfbfb] flex flex-col">
           <Sidebar/>
           <HeaderHome>
                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-28 mm:ml-36' alt="" />
                <img src="images/img-logo-pree.png" className='ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-32  w-40' alt="" />
                <img className='w-8 object-cover cursor-pointer mp:mt-2  mp:-mr-4 mm:-mr-5 md:-mr-8 lg:mr-14 ' src='images/user.png'/>
            </HeaderHome>
            <div className=" mt-24 md:ml-28 flex flex-col items-center xl:grid xl:grid-cols-3">
                <div className="w-full flex justify-between items-center xl:col-span-3">
                        <div className="flex items-center gap-2 md:mt-5 xl:ml-8 xl:mt-5 3xl:ml-0 cursor-pointer" onClick={goToHomePage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="w-5 h-5 sm:h-6 sm:w-6 lg:w-8 lg:h-8 3xl:h-12 3xl:w-12 text-[#4A91A5] ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            <p className="text-sm sm:text-base xl:text-lg  3xl:text-2xl font-poppins text-[#101010] font-medium">Fórum</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-6 h-6 text-[#4A91A5] mr-5 md:mr-14 lg:mr-20 xl:hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                </div>
                <div className="hidden xl:flex w-full items-center justify-start ml-10 xl:mt-7 xl:col-span-3">
                    <img className='mp:w-7 object-cover cursor-pointer mp:mr-8 mm:mr-0 xl:mr-2 xl:w-9 ' src='images/user.png' />
                    <div className="flex relative items-center w-[40%]">
                        <input 
                            type="text" 
                            className="rounded-3xl border border-[#888888] px-4 py-2 w-full"
                            placeholder="Escreva algo..."
                            onClick={handleOpenDialog} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-6 h-6 text-[#888888] absolute right-[0.5rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                     <button className="flex justify-center gap-2 bg-[#074261] py-2 px-6 md:px-12 xl:ml-5 2xl:px-14 3xl:py-3 3xl:px-20  rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-5 h-5 text-[#FFFFFF] 3xl:w-6 3xl:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                        <p className="text-[#FFFFFF] text-sm 3xl:text-base">Filtrar</p>
                    </button>
                </div>
                {/*DIV PARA OS POSTS*/}
                <div className="grid w-full xl:w-[90%] xl:ml-5   grid-cols-1 gap-5 mt-5 md:mt-10 mp:-ml-3 sm:ml-3 md:-ml-2 xl:col-span-2 ">
                {posts.map((post, index) => {
                    return(
                        <div className="grid grid-cols-4  gap-3 bg-[#fff] mb-2 rounded-xl items-center justify-center shadow-md md:w-[90%]  mp:ml-4 mp:mr-7 mg:mr-9 px-2 py-3 xl:w-[95%] " key={index}>
                            <div className="col-span-4 flex items-center justify-between">
                                <div id="div-info-user" className=" flex items-center  gap-2 md:gap-4 ">
                                    <img className="rounded-full object-cover w-6 h-6 md:w-10 md:h-10 3xl:w-16 3xl:h-16" src={post.fotoOrganizador}/>
                                    <p className="font-poppins text-[0.63rem] mm:text-sm md:text-base 3xl:text-xl">{post.authorName}</p>
                                    {/* Map dos interesses dos usuarios, futuramente mudar para as tags dos posts */}
                                    <div className="col-span-4 flex flex-wrap gap-2">
                            {post.authorInterests.map((interest) => (
                                <span key={interest.id} className="text-[0.6rem] mm:text-[0.65rem] md:text-xs lg:text-sm font-poppins bg-[#4A91A5] text-[#fff] py-[0.2rem] px-[0.3rem] border-none rounded-2xl 3xl:text-base">{interest.name}</span>
                            ))}
                        </div>
                                    </div>
                                {addUserState[index]
                                             ? <DoneOutlinedIcon onClick={() => toggleAddUser(index)} />
                                             :  <svg onClick={() => toggleAddUser(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                             className="w-5 h-5 col-span-1 text-[#575757] mp:ml-8 mm:ml-12 md:w-6 md:h-6 md:ml-28  3xl:ml-60 3xl:w-8 3xl:h-8">
                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                             </svg>
                  }
                            </div> 
                            <p className="col-span-4 text-[12px] mm:text-[13px] sm:text-[15px] md:text-[18px] xl:text-lg 3xl:text-xl">{post.title}</p>
                            <p className="col-span-4 text-[12px] mm:text-[13px] sm:text-[15px] md:text-[18px] xl:text-lg 3xl:text-xl">{post.description}</p>
                            <div className="flex col-span-4 items-center justify-between">
                                <div className=" flex gap-4 ">
                                        <div className="mp:flex mp:justify-center mp:items-center">
                                        {curtidas[index]
                                                ? <svg onClick={() => curtirEDescurtirPost(index)} 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 24 24" 
                                                    fill="currentColor" 
                                                    className="w-5 h-5 text-[#e90e0e] md:w-6 md:h-6 3xl:w-8 3xl:h-8">
                                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                </svg>
                                            
                                                : <svg onClick={() => curtirEDescurtirPost(index)} 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    fill="none" viewBox="0 0 24 24" 
                                                    strokeWidth={1.5} 
                                                    stroke="currentColor" 
                                                    className="w-5 h-5 text-[#575757] md:w-6 md:h-6 3xl:w-8 3xl:h-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                            }
                                            
                                            <p className="text-xs xl:text-sm 3xl:text-base">{post.likes}</p>
                                        </div>
                                        <div className="mp:flex mp:justify-center mp:items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                        className="w-5 h-5 text-[#575757] md:w-6 md:h-6 3xl:w-8 3xl:h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>

                                            <p className="text-xs xl:text-sm 3xl:text-base">{post.commentsCount}</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="w-5 h-5 col-span-1 text-[#575757] mp:ml-8 mm:ml-12 md:w-6 md:h-6 md:ml-28 3xl:ml-60 3xl:w-8 3xl:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>

                            </div>                         
                        </div>
                    )
                })}
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogActions className='flex flex-col bg-[#FFFFFF] gap-4 items-center justify-center'>
                        <div className='flex flex-col bg-[#F3F3F3] px-1 py-1 gap-2'>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M4.5 5.25A3.75 3.75 0 0 1 8.25 1.5h7.5a3.75 3.75 0 0 1 3.75 3.75v13.5a3.75 3.75 0 0 1-3.75 3.75h-7.5a3.75 3.75 0 0 1-3.75-3.75V5.25ZM8.25 3A2.25 2.25 0 0 0 6 5.25v13.5A2.25 2.25 0 0 0 8.25 21h7.5A2.25 2.25 0 0 0 18 18.75V5.25A2.25 2.25 0 0 0 15.75 3h-7.5ZM9 7.5h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Zm0 3h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Zm6 3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h6Z" clipRule="evenodd" />
                                </svg>
                                <p className='text-base text-[#000000] font-poppins font-medium'>Adicionar Post</p>
                            </div>
                            <input
                                type='text'
                                className='w-[300px] bg-[#FFFFFF] border-none outline-none rounded-md h-8 p-2 text-sm font-poppins'
                                placeholder='Nome do post'
                                value={newPost.title}
                                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                            />
                            <textarea
                                className='w-[300px] bg-[#FFFFFF] border-none outline-none rounded-md h-24 p-2 text-sm font-poppins resize-none'
                                placeholder='Descrição'
                                value={newPost.description}
                                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                            />
                        </div>
                        <div className='flex justify-between w-full'>
                            <button onClick={handleClose} className='bg-[#FF0000] text-[#FFFFFF] font-poppins px-4 py-2 rounded-md'>
                                Cancelar
                            </button>
                            <button onClick={handleCreatePost} className='bg-[#4A91A5] text-[#FFFFFF] font-poppins px-4 py-2 rounded-md' disabled={isCreating}>
                                {isCreating ? 'Criando...' : 'Criar Post'}
                            </button>
                        </div>
                    </DialogActions>
                </Dialog>
                {/*DIV PARA OS Usuarios*/}
                <div className="col-span-1 hidden xl:flex flex-col mr-20">
                    <div className="w-full">
                        <p className="font-poppins text-[#074261] mb-4">Mesmo interesse que você</p>
                    <div id="itens-explorar" className=''>
                        <p id="titulo-item-explorar" className="hidden">Usuários</p>
                        <div id="div-tipos-explorar" className='gap-3 flex flex-col'>
                         {dataUser.map((user, index)=>{
                             return(
                                 <div id="item-explorar" className='shadow-md rounded-md flex flex-col gap-2 sm:gap-4  mr-7 p-2 ' key={index}>
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
                    </div>
                    <div className="w-full">
                        {/* implementações futuras */}
                    </div>
                </div>
           </div>
        </div>
        
    )
}

export default Forum
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserById,
  getUserImage
} from '../../services/userService';
import axios from 'axios';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined'; // Assuming you are using Material-UI
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { ToastContainer, toast } from 'react-toastify';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Perfil = () => {
  const API_URL = process.env.VITE_API_URL; // Access the API URL

  const userId = localStorage.getItem('userId'); // Substitute with the actual user ID
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userProfile, setUserProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [addUserState, setAddUserState] = useState([]);
  const [curtidas, setCurtidas] = useState([]);
  const [numCurtidas, setNumCurtidas] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', description: '' });
  const [isCreating, setIsCreating] = useState(false);
  const [open, setOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const handleDeleteDialogClose = () => setOpenDeleteDialog(false);
  const [deletingPost, setDeletingPost] = useState(null);

  const notifySuccess = (message) => {
    toast.success(message, { position: "top-right" });
  };

  const notifyError = (message) => {
    toast.error(message, { position: "top-right" });
  };

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const response = await getUserById(userId);
        setUserProfile(response.data);
        fetchPosts();

        const imageResponse = await getUserImage(userId);
        if (imageResponse.status === 200) {
          const imageBlob = new Blob([imageResponse.data], { type: 'image/jpeg' });
          const imageUrl = URL.createObjectURL(imageBlob);
          setProfileImage(imageUrl);
        } else {
          throw new Error('No image found');
        }
      } catch (error) {
        console.error('Error loading user profile:', error);
      }
    };

    loadUserProfile();
  }, [userId]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}/posts`);
      const postData = response.data;

      const postsWithAuthorDetails = await Promise.all(postData.map(async (post) => {
        const authorResponse = await axios.get(`${API_URL}/users/${post.authorId}`);
        const authorData = authorResponse.data;

        const imageResponse = await axios.get(`${API_URL}/users/${post.authorId}/image`, { responseType: 'blob' });
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
    } catch (error) {
      console.error('Error fetching posts or author details:', error);
    }
  };

  const handleEditPost = async () => {
    setIsCreating(true);
    try {
      await axios.put(`${API_URL}/users/${userId}/posts/${editingPostId}`, newPost);
      handleCloseDialog();
    } catch (error) {
      console.error("Error editing post:", error);
    } finally {
      setIsCreating(false);
      fetchPosts();
    }
  };
  const handleDeletePost = async () => {
    if(!deletingPost) {
      console.error('No post to delete');
      fetchPosts();
      handleDeleteDialogClose();
    }
    try {
      await axios.delete(`${API_URL}/users/${userId}/posts/${deletingPost}`);
      notifySuccess('Post excluído com sucesso');
      handleDeleteDialogClose();
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      notifyError('Erro ao excluir post');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDialog = (post) => {
    setEditingPost(post);
    setNewPost({ title: post.title || '', description: post.description || '' });
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setEditingPost(null);
  };

  const handleFollow = async () => {
    try {
      await followUser(currentUserId, userId);
      // Update state or reload data
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await unfollowUser(currentUserId, userId);
      // Update state or reload data
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  const goToHomePage = () => {
    navigate('/home');
  };

  const escolherTipo = (index) => {
    setActiveIndex(index);
  };

  const curtirEDescurtirPost = (index) => {
    const newCurtidas = [...curtidas];
    newCurtidas[index] = !newCurtidas[index];
    setCurtidas(newCurtidas);

    const newNumCurtidas = [...numCurtidas];
    newNumCurtidas[index] = newCurtidas[index] ? newNumCurtidas[index] + 1 : newNumCurtidas[index] - 1;
    setNumCurtidas(newNumCurtidas);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#fbfbfb] flex flex-col">
      <Sidebar />
      <HeaderHome>
        {/* Imagem da logo em telas Pequena */}
        <img src="images/img-logo-pree.png" className="block sm:hidden w-12 h-12 mp:ml-28 mm:ml-44" alt="sm-logo" style={{objectFit: "contain",objectPosition: 'center', 
    width: '20%', 
    height: 'auto'}} />
        {/* Logo do CONECTECH */}
        <img src="images/img-logo-pree.png" className="mp:ml-40 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-40 w-40" alt="Logo"  style={{justifySelf: "center"}} />
        {/* Imagem do User Pequena */}
        <img  className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 3xl:h-18 3xl:w-18 mr-8 cursor-pointer z-50" 
        src={profileImage || 'images/user.png'} 
        alt="Profile"  />              
        </HeaderHome>
      <div className="mp:ml-24 mt-24 flex flex-col items-center">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2 xl:ml-10 xl:mt-5 3xl:ml-24 cursor-pointer" onClick={goToHomePage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:h-6 sm:w-6 lg:w-8 lg:h-8 3xl:h-12 3xl:w-12 text-[#4A91A5]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <p className="text-sm sm:text-base xl:text-lg 3xl:text-xl font-poppins text-[#101010] font-medium">Perfil</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hidden xl:block xl:mr-14 3xl:mr-44 3xl:h-9 3xl:w-9 text-[#4A91A5]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </div>
        <div className="w-full flex flex-col items-center gap-3 mt-8 lg:mt-12 xl:mt-0">
          <img src={profileImage || "images/user.png"} className="rounded-full object-cover w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 3xl:h-36 3xl:w-36" alt="Profile" />
          <p className="font-poppins text-lg mb-0">{userProfile?.name}</p>
          <p className="text-[#747688] text-xs 2xl:text-G 2xl:text-base mt-0">{userProfile?.username}</p>
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-poppins text-sm 2xl:text-base 3xl:text-lg">{userProfile?.following.length}</p>
              <p className="text-[#747688] text-xs 2xl:text-sm 3xl:text-base">Seguindo</p>
            </div>
            <div className="h-6 2xl:h-8 3xl:h-10 mx-3 2xl:mx-5 border-r border-[#bababa]"></div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-poppins text-sm 2xl:text-base 3xl:text-lg">{userProfile?.followers.length}</p>
              <p className="text-[#747688] text-xs 2xl:text-sm 3xl:text-base">Seguidores</p>
            </div>
          </div>
        </div>
        <div className="mt-5 2xl:mt-8 w-full flex items-center justify-center gap-2">
          <button className="flex justify-center gap-2 bg-[#074261] py-2 px-6 md:px-12 2xl:px-14 3xl:py-3 3xl:px-20 rounded-md" onClick={handleFollow}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FFFFFF] 3xl:w-6 3xl:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            <p className="text-[#FFFFFF] text-sm 3xl:text-base">Seguir</p>
          </button>
          <button className="flex justify-center gap-2 bg-[#fbfbfb] py-2 px-3 md:px-8 2xl:px-10 3xl:py-3 3xl:px-14 rounded-md border border-[#074261]" onClick={handleUnfollow}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#074261] 3xl:w-6 3xl:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
            <p className="text-[#074261] text-sm 3xl:text-base">Mensagem</p>
          </button>
        </div>
        <div id="titulo-itens-explorar" className="flex mr-2 mt-4 xl:mt-16 mb-4 py-3 gap-8 w-full items-center justify-center border-[0.1px] border-[#AFAFAF8C] shadow-md rounded-md mm:w-[85%] sm:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] 3xl:w-[30%]">
          {['Sobre', 'Eventos', 'Forums'].map((item, index) => (
            <p
              key={index}
              className={`${activeIndex === index ? 'text-[#000]' : 'text-[#909090]'} cursor-pointer font-poppins text-xs mm:text-sm sm:text-sm lg:text-sm 2xl:text-base 3xl:text-lg`}
              onClick={() => escolherTipo(index)}
            >
              {item}
            </p>
          ))}
        </div>
        {activeIndex === 0 && (
          <div className="text-[#3C3E56] text-sm 2xl:text-lg 3xl:text-xl mb-5 xl:mb-12 w-full mm:w-[85%] sm:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] 3xl:w-[30%]">
            <p>{userProfile?.bio}</p>
          </div>
        )}
        {activeIndex === 1 && (
          <div className="flex flex-col gap-2 3xl:gap-5 mb-5 items-start w-full mm:w-[85%] sm:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] 3xl:w-[30%]">
            <p className="font-poppins font-medium 3xl:text-xl">Eventos Participados</p>
            {userProfile?.eventsParticipatedIn.length > 0 ? (
              userProfile.eventsParticipatedIn.map((forum, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#F1F1F1] px-3 py-1 rounded-md">
                  <p className="text-xs 2xl:text-sm">{forum.title}</p>
                </div>
              ))
            ) : (
              <p>Nenhum evento participando</p>
            )}
          </div>
        )}
        {activeIndex === 2 && (
          <div className="flex flex-col gap-2 3xl:gap-5 mb-5 items-start w-full mm:w-[85%] sm:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] 3xl:w-[30%]">
            <p className="font-poppins font-medium 3xl:text-xl">Forums Participados</p>
            {userProfile?.forums.length > 0 ? (
              userProfile.forums.map((forum, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#F1F1F1] px-3 py-1 rounded-md">
                  <p className="text-xs 2xl:text-sm">{forum.title}</p>
                </div>
              ))
            ) : (
              <p>Nenhum grupo participando</p>
            )}
          </div>
        )}
        <div className="flex flex-col gap-2 3xl:gap-5 mb-5 items-start w-full mm:w-[85%] sm:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] 3xl:w-[30%]">
          <p className="font-poppins font-medium 3xl:text-xl">Interesses</p>
          <div className="w-full flex flex-wrap gap-2 2xl:gap-5">
            {userProfile?.interests.map((interest, index) => (
              <div key={index} className="flex items-center gap-2 bg-[#F1F1F1] px-3 py-1 rounded-md">
                <p className="text-xs 2xl:text-sm">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*DIV PARA OS POSTS*/}
      <div className="grid w-full xl:w-[90%] xl:ml-5 m   grid-cols-1 gap-5 mt-5 md:mt-10 mp:-ml-3 sm:ml-3 md:-ml-2 xl:col-span-2 ">
                {posts.map((post, index) => {
                    return(
                      <div className="grid grid-cols-4 gap-3 bg-[#fff] mb-2 rounded-xl items-center justify-center shadow-md md:w-[90%]  mp:ml-4 mp:mr-7 mg:mr-9 px-2 py-3 xl:w-[95%]" key={index} style={{ marginLeft: "120px" }}>
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
                                  
                                    <div className="flex items-center gap-2">
            <ModeEditOutlineOutlinedIcon className="text-[#575757] w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 hover:text-[#4A91A5] cursor-pointer"
              onClick={() => {
                handleOpenDialog(post);
                setEditingPostId(post.id);
              }} 
            />
            <DeleteOutlineOutlinedIcon className="text-[#575757] w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 hover:text-[#C13232] cursor-pointer" onClick={() => {setOpenDeleteDialog(true),setDeletingPost(post.id)}} />
          </div>
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
              <p className='text-base text-[#000000] font-poppins font-medium'>Atualizar Post</p>
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
            <button onClick={handleEditPost} className='bg-[#4A91A5] text-[#FFFFFF] font-poppins px-4 py-2 rounded-md' disabled={isCreating}>
              {isCreating ? 'editando...' : 'editar Post'}
            </button>
          </div>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogActions className='flex flex-col bg-[#FFFFFF] gap-4 items-center justify-center'>
          <p className='text-base text-[#000000] font-poppins font-medium'>Essa funcionalidade no momento está desabilitada pois esta ocasionando erro na aplicação e será corrigida em breve</p>
          <div className='flex justify-center w-full'>
            <button onClick={handleDeleteDialogClose} className='bg-[#FF0000] text-[#FFFFFF] font-poppins px-4 py-2 rounded-md'>
              Voltar 
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Perfil;

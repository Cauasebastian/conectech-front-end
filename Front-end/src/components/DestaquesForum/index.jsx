import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const DestaquesForum = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [addUserState, setAddUserState] = useState([]);
    const [curtidas, setCurtidas] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const goToForum = () => {
        navigate('/forum');
    };

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:8080/posts');
            const postData = await response.json();

            const postsWithAuthorDetails = await Promise.all(postData.map(async (post) => {
                const authorResponse = await fetch(`http://localhost:8080/users/${post.authorId}`);
                const authorData = await authorResponse.json();

                const imageResponse = await fetch(`http://localhost:8080/users/${post.authorId}/image`);
                const imageBlob = await imageResponse.blob();
                const imageUrl = URL.createObjectURL(imageBlob);

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
        } catch (error) {
            console.error('Error fetching posts or author details:', error);
        }
    };

    const toggleAddUser = (index) => {
        const newUserState = [...addUserState];
        newUserState[index] = !newUserState[index];
        setAddUserState(newUserState);
    };

    const curtirEDescurtirPost = (index) => {
        const newCurtidas = [...curtidas];
        newCurtidas[index] = !newCurtidas[index];
        setCurtidas(newCurtidas);
    };

    return (
        <div className="mp:ml-5 md:ml-28 mt-8 lg:-mt-10 xl:-mt-14 lg:ml-[6.5rem] flex flex-col items-center justify-center overflow-x-hidden">
        <div className="flex w-[95%] font-poppins items-center ml-8 sm:ml-24  ">
                <p className="font-poppins font-medium mp:text-sm w-[50%] text-base mr-20 mm:mr-28 mg:mr-32 sm:mr-44 lg:mr-52 xl:mr-[17rem] 2xl:mr-[19rem] sm:text-base   2xl:text-lg 3xl:text-xl   sm:-ml-8   text-[#363636]">Veja os destaques no fórum</p>
                <p className="mp:text-[10px] mm:text-[11px] sm:text-xs  md:mr-3 sm:mr-0 2xl:text-sm 3xl:text-base  text-[#747688] font-poppins cursor-pointer" onClick={goToForum}>Ver mais</p>
            </div>
            <div className="grid w-[95%] -ml-3 grid-cols-1 gap-4 mt-3 md:w-[100%] xl:w-[93%] 2xl:w-[90%] 3xl:w-[80%] 3xl:mr-56 3xl:mt-6 2xl:mr-20 xl:mr-8  md:ml-3 ">
                {posts.map((post, index) => {
                    return(
                        <div className="grid grid-cols-4 gap-3 bg-[#ffffff] mb-2 rounded-xl items-center justify-center shadow-md md:w-[90%]  mp:ml-4 mp:mr-7 mg:mr-9 px-2 py-3 xl:w-[95%] " key={index}>
                            <div className="col-span-4 flex items-center justify-between">
                                <div id="div-info-user" className=" flex items-center  gap-2 md:gap-4 ">
                                    <img className="rounded-full object-cover w-6 h-6 md:w-10 md:h-10 3xl:w-16 3xl:h-16" src={post.fotoOrganizador}/>
                                    <p className="font-poppins text-[0.63rem] mm:text-sm md:text-base 3xl:text-xl">{post.authorName}</p>
                                    {post.authorInterests.map((interest) => (
                                <span key={interest.id} className="text-[0.6rem] mm:text-[0.65rem] md:text-xs lg:text-sm font-poppins bg-[#4A91A5] text-[#fff] py-[0.2rem] px-[0.3rem] border-none rounded-2xl 3xl:text-base">{interest.name}</span>
                            ))}
                                    </div>
                                {addUserState[index]
                                             ? <DoneOutlinedIcon onClick={() => toggleAddUser(index)} />
                                             :  <svg onClick={() => toggleAddUser(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                             className="w-5 h-5 col-span-1 text-[#575757] mp:ml-8 mm:ml-12 md:w-6 md:h-6 md:ml-28  3xl:ml-60 3xl:w-8 3xl:h-8">
                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                             </svg>
                  } 
                            </div>     
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
            
        </div>
    )
}

export default DestaquesForum;
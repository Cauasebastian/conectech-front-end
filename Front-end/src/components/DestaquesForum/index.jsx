import dataPost from "../../../postsForum.json"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from "react";
import { IconsPost } from "./style";
import {HeartIcon} from '@heroicons/react/24/solid'
const DestaquesForum = () => {
    
   
  
    const [countComents, setCountComents] = useState(12)

    const [curtidas, setCurtidas] = useState(dataPost.map(() => false));
    const [numCurtidas, setNumCurtidas] = useState(dataPost.map(() => 25));
    
    // Função para lidar com a ação de curtir/descurtir um post
    const curtirEDescurtirPost = (postId) => {
        setCurtidas(prevCurtidas => {
            const updatedCurtidas = [...prevCurtidas];
            updatedCurtidas[postId] = !updatedCurtidas[postId]; // Inverte o estado de curtida do post
            return updatedCurtidas;
        });

        // Atualiza o número de curtidas do post
        setNumCurtidas(prevNumCurtidas => {
            const updatedNumCurtidas = [...prevNumCurtidas];
            updatedNumCurtidas[postId] += curtidas[postId] ? -1 : 1; // Incrementa ou decrementa o número de curtidas dependendo do estado anterior
            return updatedNumCurtidas;
        });
    };
    
    return(
        <div className="mp:ml-24 mt-14 flex flex-col items-center justify-center">
            <div className="flex w-full font-poppins items-center justify-around mm:gap-28 md:gap-80 lg:gap-[24rem] ">
                <p className="font-poppins font-medium  text-base sm:text-lg sm:-ml-8 md:ml-0 md:text-xl text-[#363636]">Veja os destaques no fórum</p>
                <p className="mp:text-[12px] sm:text-sm md:text-base text-[#747688] font-poppins">Ver mais</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-10 mt-7 mp:-ml-3 ">
                {dataPost.map((post, index) => {
                    return(
                        <div className="grid grid-cols-4 gap-3 rounded-lg items-center justify-center shadow-xl mp:mx-2 px-2 py-3  " key={index}>
                            <div id="div-info-user" className="col-span-3 flex items-center  gap-2 md:gap-4 ">
                                <img className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10" src={post.imagemPerfil}/>
                                <p className="font-poppins text-xs mm:text-sm md:text-base">{post.nomeUsuario}</p>
                                <span className="text-[0.7rem] mm:text-[0.8rem] font-poppins bg-[#4A91A5] text-[#fff] py-[0.2rem] px-[0.3rem] border-none rounded-2xl">{post.tagPost}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-5 h-5 col-span-1 text-[#575757] mp:ml-8 md:w-6 md:h-6 md:ml-28">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>

                                    
                                
                            <p className="col-span-4 text-[12px] mm:text-[14px] md:text-[18px]">{post.descricaoPost}</p>
                            
                            
                                <div className="col-span-3 flex gap-4 ">
                                    <div className="mp:flex mp:justify-center mp:items-center">
                                    {curtidas[index]
                                            ? <svg onClick={() => curtirEDescurtirPost(index)} 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 24 24" 
                                                fill="currentColor" 
                                                className="w-5 h-5 text-[#e90e0e] md:w-6 md:h-6">
                                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                            </svg>
                                          
                                            : <svg onClick={() => curtirEDescurtirPost(index)} 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" viewBox="0 0 24 24" 
                                                strokeWidth={1.5} 
                                                stroke="currentColor" 
                                                className="w-5 h-5 text-[#575757] md:w-6 md:h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                          }
                                        
                                        <p className="text-xs">{numCurtidas[index]}</p>
                                    </div>
                                    <div className="mp:flex mp:justify-center mp:items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                    className="w-5 h-5 text-[#575757] md:w-6 md:h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>

                                        <p className="text-xs">{countComents}</p>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="w-5 h-5 text-[#575757] mp:ml-8 md:w-6 md:h-6 md:ml-28">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>

                            
                            
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default DestaquesForum
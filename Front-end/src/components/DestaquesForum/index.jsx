import { BotaoVerMais, ContainerDestaquesForum, DescPostDestaques, DivComentarios, DivCurtidas, DivInteracoes,  DivPostsDestaquesForum, HeaderDestaques, IconsPost, ImagemPerfilPostDestaques, ImagemPostDestaques, NomeUserPostDestaques, NumeroComentarios, NumeroCurtidas, ParteInferiorPost, ParteSuperiorPost, PostDestaques, TagPostDestaques, TituloDestaques } from "./style"
import dataPost from "../../../postsForum.json"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from "react";

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
        <ContainerDestaquesForum>
            <HeaderDestaques>
                <TituloDestaques>Veja os destaques no fórum</TituloDestaques>
                <BotaoVerMais>Ver mais</BotaoVerMais>
            </HeaderDestaques>
            <DivPostsDestaquesForum>
                {dataPost.map((post, index) => {
                    return(
                        <PostDestaques key={index}>
                            <ParteSuperiorPost>
                                <ImagemPerfilPostDestaques src={post.imagemPerfil}/>
                                <NomeUserPostDestaques>{post.nomeUsuario}</NomeUserPostDestaques>
                                <TagPostDestaques>{post.tagPost}</TagPostDestaques>
                            </ParteSuperiorPost>
                            <DescPostDestaques>{post.descricaoPost}</DescPostDestaques>
                            {post.imgPost && <ImagemPostDestaques src={post.imgPost}/>}
                            <ParteInferiorPost>
                                <DivInteracoes>
                                    <DivCurtidas>
                                    {curtidas[index]
                                            ? <FavoriteIcon sx={IconsPost.likeIcon} onClick={() => curtirEDescurtirPost(index)} />
                                            : <FavoriteBorderIcon sx={IconsPost.style} onClick={() => curtirEDescurtirPost(index)} />}
                                        
                                        <NumeroCurtidas>{numCurtidas[index]}</NumeroCurtidas>
                                    </DivCurtidas>
                                    <DivComentarios>
                                        <ChatBubbleOutlineOutlinedIcon sx={IconsPost.style}/>
                                        <NumeroComentarios>{countComents}</NumeroComentarios>
                                    </DivComentarios>
                                    
                                    
                                </DivInteracoes>
                                <DivInteracoes>
                                    <PersonAddAlt1OutlinedIcon sx={IconsPost.style}/>
                                    <SendOutlinedIcon sx={IconsPost.style}/>
                                </DivInteracoes>
                            </ParteInferiorPost>
                        </PostDestaques>
                    )
                })}
            </DivPostsDestaquesForum>
            
        </ContainerDestaquesForum>
    )
}

export default DestaquesForum
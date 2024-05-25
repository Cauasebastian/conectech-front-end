import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUserById,
  followUser,
  unfollowUser,
  addInterestToUser,
  removeInterestFromUser,
  uploadUserImage,
  getUserImage
} from '../../services/userService';

const Perfil = () => {
  const userId = '664eaeaa6380437538d4523c'; // Substitute with the actual user ID
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userProfile, setUserProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const response = await getUserById(userId);
        setUserProfile(response.data);

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

  const handleFollow = async () => {
    try {
      await followUser(currentUserId, userId);
      // Atualize o estado ou recarregue os dados
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await unfollowUser(currentUserId, userId);
      // Atualize o estado ou recarregue os dados
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  const handleAddInterest = async (interestName) => {
    try {
      await addInterestToUser(userId, interestName);
      // Atualize o estado ou recarregue os dados
    } catch (error) {
      console.error('Error adding interest:', error);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        await uploadUserImage(userId, file);
        // Atualize o estado ou recarregue os dados
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const goToHomePage = () => {
    navigate('/home');
  };

  const escolherTipo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#fbfbfb] flex flex-col">
      <Sidebar />
      <HeaderHome>
        {/*Imagem do User Pequena*/}
        <img src={profileImage || "images/user.png"} className="block sm:hidden w-12 h-12 mp:ml-28 mm:ml-44" alt="" />
        {/*Logo do CONECTECH*/}
        <img src="images/img-logo-pree.png" className="mp:ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-28 w-40" alt="" />
        {/*Imagem do User Pequena*/}
        <img className="w-8 object-cover cursor-pointer mp:mt-2 mp:-mr-8 mm:mr-0 md:-mr-8 lg:mr-14" src={profileImage || 'images/user.png'} alt="Profile" />
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
          <img src={profileImage || "images/user.png"} className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 3xl:h-36 3xl:w-36" alt="Profile" />
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
          {['Sobre', 'Eventos', 'Grupos'].map((item, index) => (
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
              userProfile.eventsParticipatedIn.map((event, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#F1F1F1] px-3 py-1 rounded-md">
                  <p className="text-xs 2xl:text-sm">{event.name}</p>
                </div>
              ))
            ) : (
              <p>Nenhum evento participando</p>
            )}
          </div>
        )}
        {activeIndex === 2 && (
          <div className="flex flex-col gap-2 3xl:gap-5 mb-5 items-start w-full mm:w-[85%] sm:w-[80%] lg:w-[60%] xl:w-[45%] 2xl:w-[40%] 3xl:w-[30%]">
            <p className="font-poppins font-medium 3xl:text-xl">Grupos Participados</p>
            {userProfile?.forums.length > 0 ? (
              userProfile.forums.map((forum, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#F1F1F1] px-3 py-1 rounded-md">
                  <p className="text-xs 2xl:text-sm">{forum.name}</p>
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
    </div>
  );
};

export default Perfil;

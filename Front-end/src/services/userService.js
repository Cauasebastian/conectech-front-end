import axios from 'axios';

const API_URL = 'http://localhost:8080/users';
const INTERESTS_API_URL = 'http://localhost:8080/interests';

const getUserById = (id) => axios.get(`${API_URL}/${id}`);

const createInterest = async (interestName) => {
  try {
    const response = await axios.post(INTERESTS_API_URL, { name: interestName });
    return response.data; // Retorna os dados do interesse criado
  } catch (error) {
    console.error("Erro ao criar interesse:", error);
    throw error;
  }
};

const addInterestToUser = async (id, interestName) => {
  try {
    return await axios.post(`${API_URL}/${id}/interests/${interestName}`);
  } catch (error) {
    // Verifica se o erro é de status 404
    if (error.response && error.response.status === 404) {
      // Se for 404, retorna uma exceção
      console.log("Interesse não encontrado: criando interesse e adicionando ao usuário...");
      throw new Error("Interesse não encontrado");
    } else {
      // Se for outro erro, mostra no console e lança a exceção
      console.error("Erro ao adicionar interesse ao usuário:", error);
      throw error;
    }
  }
};


const removeInterestFromUser = async (id, interestName) => {
  try {
    return await axios.delete(`${API_URL}/${id}/interests/${interestName}`);
  } catch (error) {
    console.error("Erro ao remover interesse do usuário:", error);
    throw error;
  }
};

const followUser = async (id, userId) => {
  try {
    return await axios.post(`${API_URL}/${id}/follow/${userId}`);
  } catch (error) {
    console.error("Erro ao seguir usuário:", error);
    throw error;
  }
};

const unfollowUser = async (id, userId) => {
  try {
    return await axios.delete(`${API_URL}/${id}/unfollow/${userId}`);
  } catch (error) {
    console.error("Erro ao deixar de seguir usuário:", error);
    throw error;
  }
};

const uploadUserImage = async (id, imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  try {
    return await axios.post(`${API_URL}/${id}/uploadImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error("Erro ao fazer upload da imagem do usuário:", error);
    throw error;
  }
};

const getUserImage = async (id) => {
  try {
    return await axios.get(`${API_URL}/${id}/image`, { responseType: 'arraybuffer' });
  } catch (error) {
    console.error("Erro ao obter imagem do usuário:", error);
    throw error;
  }
};

export {
  getUserById,
  createInterest,
  addInterestToUser,
  removeInterestFromUser,
  followUser,
  unfollowUser,
  uploadUserImage,
  getUserImage,
};

// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

const getUserById = (id) => axios.get(`${API_URL}/${id}`);

const addInterestToUser = (id, interestName) => axios.post(`${API_URL}/${id}/interests/${interestName}`);

const removeInterestFromUser = (id, interestName) => axios.delete(`${API_URL}/${id}/interests/${interestName}`);

const followUser = (id, userId) => axios.post(`${API_URL}/${id}/follow/${userId}`);

const unfollowUser = (id, userId) => axios.delete(`${API_URL}/${id}/unfollow/${userId}`);

const uploadUserImage = (id, imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  return axios.post(`${API_URL}/${id}/uploadImage`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const getUserImage = (id) => axios.get(`${API_URL}/${id}/image`, { responseType: 'arraybuffer' });

export {
  getUserById,
  addInterestToUser,
  removeInterestFromUser,
  followUser,
  unfollowUser,
  uploadUserImage,
  getUserImage,
};

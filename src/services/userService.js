import { api } from './api';

// Fetch User Profile
export const fetchUserProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

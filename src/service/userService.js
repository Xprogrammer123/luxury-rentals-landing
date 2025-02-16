import api from "./api";

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await api.get("/user/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch user profile";
  }
};

// Update user profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await api.put("/user/profile", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Profile update failed";
  }
};

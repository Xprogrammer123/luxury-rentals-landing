
import api from "./api";

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", response.data.token); // Store token
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};



// Logout user
export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login"; // Redirect to login page
};

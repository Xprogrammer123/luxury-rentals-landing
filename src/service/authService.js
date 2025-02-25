import api from "./api";

// Login user
export const loginUser = async (email, password) => {
  try {
    // Make a POST request to the backend login endpoint
    const response = await api.post("/admin/login/", {
      email,
      password,
    });

    // Extract the token from the response
    const { access, refresh } = response.data;

    // Store the token in localStorage
    localStorage.setItem("token", access);
    localStorage.setItem("refreshToken", refresh); // Optional: Store refresh token
    localStorage.setItem("isAdminLoggedIn", "true");

    // Return the token
    return { token: access };
  } catch (error) {
    // Handle errors
    throw new Error(error.response?.data?.detail || "Login failed");
  }
};
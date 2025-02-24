
import api from "./api";

// Demo admin credentials
const DEMO_ADMIN = {
  email: "admin@luxride.com",
  password: "admin123"
};

// Login user
export const loginUser = async (email, password) => {
  try {
    // For demo purposes, check against hardcoded credentials
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      const demoToken = "demo-token";
      localStorage.setItem("token", demoToken);
      localStorage.setItem("isAdminLoggedIn", "true");
      return { token: demoToken };
    }
    throw new Error("Invalid credentials");
  } catch (error) {
    throw error.message || "Login failed";
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isAdminLoggedIn");
  window.location.href = "/login";
};

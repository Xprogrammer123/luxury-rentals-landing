import axios from "axios";

// Base URL for the backend API
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // Use environment variable or default

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (optional: adds token if available)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;

import api from "./api";

// Fetch list of cars
export const fetchPublicCars = async () => {
  try {
    const response = await api.get("/public/cars/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch public cars";
  }
};

// Get a car details
export const getPublicCar = async (slug) => {
  try {
    const response = await api.get(`/public/cars/${slug}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch public car detail";
  }
};

// Fetch list of categories
export const fetchPublicCategories = async () => {
  try {
    const response = await api.get("/public/categories/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch public categories";
  }
};

// Get a category details
export const getPublicCategory = async (slug) => {
  try {
    const response = await api.get(`/public/category/${slug}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch public categories";
  }
};

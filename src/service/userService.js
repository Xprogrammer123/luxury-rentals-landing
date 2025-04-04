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

// add a new car
export const addNewCar = async (carData, token) => {
  try {
    const response = await api.post("/cars/", carData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to add new car";
  }
};

// Fetch list of cars
export const fetchCars = async (token) => {
  try {
    const response = await api.get("/cars/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch cars";
  }
};

// Upload car image
export const uploadCarImage = async (slug, file, token) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await api.patch(`/cars/${slug}/upload-image/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to upload car image";
  }
};

// Edit car details
export const editCar = async (slug, newCarData, token) => {
  try {
    const response = await api.patch(`/cars/${slug}/`, newCarData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to edit car";
  }
};

// Delete car
export const deleteCar = async (slug, token) => {
  try {
    const response = await api.delete(`/cars/${slug}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete car";
  }
};

// add a new category
export const addNewCategory = async (categoryData, token) => {
  try {
    const response = await api.post("/categories/", categoryData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to add new category";
  }
};

// Fetch list of cars
export const fetchCategories = async (token) => {
  try {
    const response = await api.get("/categories/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch categories";
  }
};

// Delete category
export const deleteCategory = async (slug, token) => {
  try {
    const response = await api.delete(`/categories/${slug}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete category";
  }
};

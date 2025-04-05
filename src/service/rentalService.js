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

// Send a rental request
export const sendRentalRequest = async (rentalData, token) => {
  try {
    const response = await api.post("/rental-requests/", rentalData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to send rental request";
  }
};

// Upload SSN image
export const uploadSSNImage = async (slug, file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await api.patch(`/rental-requests/${slug}/upload-ssn-image/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to upload SSN image";
  }
};

// Upload driver's license front image
export const uploadDriversLicenseFront = async (slug, file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await api.patch(`/rental-requests/${slug}/upload-drivers-license-front/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to upload driver's license front image";
  }
};

// Upload driver's license back image
export const uploadDriversLicenseBack = async (slug, file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await api.patch(`/rental-requests/${slug}/upload-drivers-license-back/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to upload driver's license back image";
  }
};

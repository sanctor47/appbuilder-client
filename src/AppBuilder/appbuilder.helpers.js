import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("https://app-bulder-server.onrender.com/category");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFeatures = async (page, limit, selectedCat) => {
  try {
    const response = await axios.get(
      `https://app-bulder-server.onrender.com/features?page=${page}&limit=${limit}&cat=${selectedCat}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

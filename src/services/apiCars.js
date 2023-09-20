import axios from "axios";

axios.defaults.baseURL = "https://6505e8b8ef808d3c66f09ae5.mockapi.io/api/v1";

export const fetchCars = async (page) => {
  try {
    const response = await axios.get(`/cars/?&page=${page}&limit=8`);
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

export const getAllCars = async () => {
  try {
    const response = await axios.get("/cars/");
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

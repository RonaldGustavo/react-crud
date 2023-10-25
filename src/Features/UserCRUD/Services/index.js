import axios from "axios";
import { URL_API } from "../../../Constant";

export const getListUsersService = async () => {
  try {
    const response = await axios.get(`${URL_API}/customers`);
    return response.data;
  } catch (error) {
    // console.log("getListUserService promise error: ", error.message);
    throw error; // Melemparkan error agar bisa ditangani oleh action
  }
};

export const getDetailUserService = async (id) => {
  try {
    const response = await axios.get(`${URL_API}/customers/${id}`);
    return response.data;
  } catch (error) {
    console.log("getListUserService promise error: ", error.message);
    throw error;
  }
};

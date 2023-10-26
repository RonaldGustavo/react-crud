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
    console.log("getDetailUserService promise error: ", error.message);
    throw error;
  }
};

export const createUserService = async (body) => {
  try {
    const response = await axios.post(`${URL_API}/customers`, body);
    return response.data;
  } catch (error) {
    console.log("CreateUserService promise error: ", error.message);
    throw error;
  }
};

export const deleteDataUserService = async (id, body) => {
  try {
    const response = await axios.delete(`${URL_API}/customers/${id}`, body);
    return response.data;
  } catch (error) {
    console.log("deleteDataUserService promise error: ", error.message);
    throw error;
  }
};

export const updateDataUserService = async (id, body) => {
  try {
    const response = await axios.put(`${URL_API}/customers/${id}`, body);
    return response.data;
  } catch (error) {
    console.log("updateDataUserService promise error: ", error.message);
    throw error;
  }
};

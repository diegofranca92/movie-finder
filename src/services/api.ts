import Axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_TOKEN

const headerMain = {
  Authorization: `Bearer ${token}`
};

const api: AxiosInstance = Axios.create({
  baseURL,
  headers: headerMain,
})

export default api;
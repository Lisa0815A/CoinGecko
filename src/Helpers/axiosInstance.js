import axios from "axios";
import { COINGECKO_API_URL } from "./constants";
const axiosInstance = axios.create({
  baseURL:COINGECKO_API_URL,
  headers : {
    'Content-Type' : 'application/json'
  }
}) 
export default axiosInstance ;
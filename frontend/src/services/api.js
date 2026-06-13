import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyproject-40n7.onrender.com/api/products",
});

export default API;
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 5000,
  headers: {
    Authorization: JSON.parse(localStorage.getItem("recipe"))
      ? "Bearer " + JSON.parse(localStorage.getItem("recipe")).access
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;

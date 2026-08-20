import axios from "axios";

const API_URL = import.meta.env.MODE === "production"
    ? "https://restaurant-backend-app-ljsz.onrender.com"
    : "http://localhost:4000";

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const BASE_URL = API_URL;
export default api;
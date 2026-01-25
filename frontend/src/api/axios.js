import axios from "axios";

// Create Axios Instance
const api = axios.create({
    baseURL: "/api/v1",  // Use relative path to leverage Vite proxy
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});


// Intercept requests to add the token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
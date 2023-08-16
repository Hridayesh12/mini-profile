import axios from 'axios';
const SERVER = 'https://mini-profile-backend.onrender.com';

let api = axios.create({
    baseURL: SERVER,
    headers: {
        Content: "application/json",
    },
    withCredentials: true,
})

export default api;
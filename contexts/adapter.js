import axios from 'axios';
const SERVER = 'http://localhost:5000';

let api = axios.create({
    baseURL: SERVER,
    headers: {
        Content: "application/json",
    },
    withCredentials: true,
})

export default api;
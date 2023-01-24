import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketmovies-api-ata6.onrender.com'
});
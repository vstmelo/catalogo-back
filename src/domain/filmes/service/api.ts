import axios, { AxiosInstance } from "axios";
import 'dotenv/config';

export const api : AxiosInstance  = axios.create({
    baseURL: process.env.ENVIROMENT === 'local'
        ? process.env.DB_HOST_LOCAL
        : process.env.DB_HEROKU
});

export const apiHeroku: AxiosInstance = axios.create({
    baseURL: process.env.DB_HEROKU
});
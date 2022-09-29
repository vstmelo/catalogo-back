import axios, { AxiosInstance } from "axios";
import 'dotenv/config';

export const api : AxiosInstance  = axios.create({
    baseURL:  "http://ghibliapi.herokuapp.com"
});
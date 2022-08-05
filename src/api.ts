import axios from "axios";

export const api = axios.create({
    baseURL: process.env.DB_HOST || "https://ghibliapi.herokuapp.com"
});

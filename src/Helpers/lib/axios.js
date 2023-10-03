import axios from "axios";


export const axiosInstace = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines"


})
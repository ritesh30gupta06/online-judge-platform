import axios from "axios";

const API = axios.create({
    baseURL: "https://online-judge-platform-production.up.railway.app/api"
});

export default API;
import axios from "axios";

const DOMAIN = "localhost:8080";
const API_BASE_URL = `http://${DOMAIN}/api`;

const api = axios.create({
  baseURL: `${API_BASE_URL}`,
  timeout: 10000,
});

export default api;

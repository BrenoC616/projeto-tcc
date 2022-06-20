import axios from "axios";

const apiURL = `https://url-da-api.app`;

const api = axios.create({
  baseURL: apiURL,
});

export default api;

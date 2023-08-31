import axios from "axios";

axios.defaults.baseURL = "https://drf-app-ci-dd26f820fd5b.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
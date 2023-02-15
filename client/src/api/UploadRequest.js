import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

export const uploadPost = (data) => API.post("/post", data);

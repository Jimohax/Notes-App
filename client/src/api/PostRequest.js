import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5001"})

export const getPost = (id)=> API.get(`/posts/${id}`)
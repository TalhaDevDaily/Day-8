import axios from "axios";
import BlogOverview from "../pages/BlogOverview";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = "tokenasdlkfjsd asdvalj;l asdjgds";
    console.log(token);

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export const blogservices = {
  blog: async () => {
    const res = await api.get("/products");
    return res.data;
  },

  blogOverview: async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },
};

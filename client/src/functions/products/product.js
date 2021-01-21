import axios from "axios";

// Get All products
export const getProducts = async () => await axios.get(`${process.env.REACT_APP_API}/products`);
export const getSearchedProducts = async (query) => await axios.post(`${process.env.REACT_APP_API}/products/search`,query)
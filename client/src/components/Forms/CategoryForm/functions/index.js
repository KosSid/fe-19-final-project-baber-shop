import axios from "axios";

// Create Category
export const createCategory = async (values, Authorization) => axios
  .post(`${process.env.REACT_APP_API}/catalog`, values, {
    headers: {
      Authorization
    }
  })

// Get catalog

export const getCatalog = async (Authorization) => axios
  .get(`${process.env.REACT_APP_API}/catalog`, {
    headers: {
      Authorization
    }
  })


// import axios from "axios";
// const baseURL = "http://localhost:5125/api/v1/products";
// export const getAllProducts = async () => {
//   const response = await axios.get(baseURL);
//   console.log(response);
//   return response.data.product.items;
// };

// export const  getAllProductById = async (id) =>{
//   const response = await axios.get("baseURL/${id}");
//   return response.data;
// }

//http://localhost:5125/api/v1/products?PageNumber=1&PageSize=1&SearchTerm=The&SortBy=name
// import axios from "axios";

// const baseURL = "http://localhost:5125/api/v1/products";

// export const getAllProducts = async (searchValue = "") => {
//   try {
//     const response = await axios.get(
//       `${baseURL}${searchValue ? `?SearchTerm=${searchValue}` : ""}`
//     );
//     return response.data.product.items;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };

//console.log(response);
//console.log(response.data.product.items);

import axios from "axios";

const baseURL = " http://localhost:5125/api/v1/products";

export const getAllProducts = async (
  pageNumber = 1,
  pageSize = 5,
  searchValue = "",
  sortOrder = "name_asc"
  
) => {
  const params = new URLSearchParams();

  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  if (searchValue) {
    params.append("search", searchValue);
  }

  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }

  const response = await axios.get(`${baseURL}?${params.toString()}`);
  console.log(response.data);
  return response.data;
};

export const getProductById = async (id) => {
  console.log(`${baseURL}/${id}`);
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

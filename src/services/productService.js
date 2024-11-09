// import axios from "axios";

// const baseURL = "http://localhost:5125/api/v1/products";

// export const getAllProducts = async (
//   searchValue = "",
//   pageNumber = 1,
//   pageSize = 5,
//   sortOrder = "name_asc"
// ) => {
//   const params = new URLSearchParams();

//   params.append("pageNumber", pageNumber);
//   params.append("pageSize", pageSize);
//   console.log("searchValue ", searchValue);

//   if (searchValue) {
//     console.log("search in service", searchValue);
//     params.append("SearchTerm", searchValue);
//   }

//   if (sortOrder) {
//     params.append("sortOrder", sortOrder);
//   }

//   const response = await axios.get(`${baseURL}?${params.toString()}`);
//   console.log(`${baseURL}?${params.toString()}`);
//   console.log(response.data);
//   return response.data;
// };

// export const getProductById = async (id) => {
//   console.log(`${baseURL}/${id}`);
//   const response = await axios.get(`${baseURL}/${id}`);
//   return response.data;
// };

import axios from "axios";

const baseURL = "http://localhost:5125/api/v1/products";

// Function to get all products with optional search, pagination, and sorting
export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 5,
  sortBy = "name",
  sortOrder = "asc"
) => {
  const params = new URLSearchParams();

  // Append pagination parameters
  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  console.log("searchValue ", searchValue);

  // If search term is provided, append it to the params
  if (searchValue) {
    console.log("search in service", searchValue);
    params.append("SearchTerm", searchValue);
  }

  // Append the sort order parameter if provided
  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  // Log the final URL being requested for debugging
  const requestUrl = `${baseURL}?${params.toString()}`;
  console.log("Request URL: ", requestUrl);

  try {
    // Send GET request with parameters
    const response = await axios.get(requestUrl);

    // Log the response data for debugging
    console.log("API Response: ", response.data);

    // Return the response data
    return response.data;
  } catch (error) {
    // Log error if something goes wrong
    console.error("Error fetching products: ", error);
    throw error; // Rethrow or handle appropriately
  }
};

// Function to get a single product by its ID
export const getProductById = async (id) => {
  const requestUrl = `${baseURL}/${id}`;
  console.log("Fetching product by ID:", requestUrl);

  try {
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID: ", error);
    throw error; // Rethrow or handle appropriately
  }
};

import axios from "axios";

const baseURL = "http://localhost:5125/api/v1/products";
const categoryBaseURL = "http://localhost:5125/api/v1/category";

// Function to get all products with optional search, pagination, and sorting
export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 3,
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

// ** Get Category by ID **
export const getCategoryById = async (id) => {
  const requestUrl = `${categoryBaseURL}/${id}`;
  console.log("Fetching category by ID:", requestUrl);

  try {
    const response = await axios.get(requestUrl);
    return response.data; // إرجاع بيانات الفئة (Category)
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("Error fetching category by ID:", errorMessage);
    throw new Error(`Failed to fetch category: ${errorMessage}`);
  }
};

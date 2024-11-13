import axios from "axios";

const baseURL = "http://localhost:5125/api/v1/products";
const categoryBaseURL = "http://localhost:5125/api/v1/category";

export const getAllProducts = async (
  searchValue = "",
  pageNumber = 1,
  pageSize = 3,
  sortBy = "name",
  sortOrder = "asc"
) => {
  const params = new URLSearchParams();

  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  console.log("searchValue ", searchValue);

  if (searchValue) {
    console.log("search in service", searchValue);
    params.append("SearchTerm", searchValue);
  }

  if (sortOrder) {
    params.append("sortOrder", sortOrder);
  }
  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  const requestUrl = `${baseURL}?${params.toString()}`;
  console.log("Request URL: ", requestUrl);

  try {
    const response = await axios.get(requestUrl);

    console.log("API Response: ", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};
export const getProductById = async (id) => {
  const url = `${baseURL}/${id}`;
  console.log("Fetching product from:", url);
  const response = await axios.get(url);
  console.log("Response received:", response.data);
  return response.data.data;
};
export const createProduct = async (productData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`${baseURL}/`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${baseURL}/${id}`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const getProductById = async (id) => {
//   const requestUrl = `${baseURL}/${id}`;
//   console.log("Fetching product by ID:", requestUrl);

//   try {
//     const response = await axios.get(requestUrl);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching product by ID: ", error);
//     throw error; // Rethrow or handle appropriately
//   }
// };

// // ** Get Category by ID **
// export const getCategoryById = async (id) => {
//   const requestUrl = `${categoryBaseURL}/${id}`;
//   console.log("Fetching category by ID:", requestUrl);

//   try {
//     const response = await axios.get(requestUrl);
//     return response.data; // إرجاع بيانات الفئة (Category)
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || error.message;
//     console.error("Error fetching category by ID:", errorMessage);
//     throw new Error(`Failed to fetch category: ${errorMessage}`);
//   }
// };

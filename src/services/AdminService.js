// import axios from "axios";

// // رابط API للسيرفر
// const baseURL = "http://localhost:5125/api/v1/products";

// // إعداد headers للتحقق من التوكن
// const getConfig = (token) => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// // **1. إضافة منتج جديد (Create Product)**
// export const createProduct = async (productData, token) => {
//   const requestUrl = `${baseURL}`;
//   try {
//     const response = await axios.post(
//       requestUrl,
//       productData,
//       getConfig(token)
//     );
//     console.log("Product Created: ", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating product: ", error);
//     throw error;
//   }
// };

// // **2. تعديل منتج (Update Product)**
// export const updateProduct = async (id, productData, token) => {
//   const requestUrl = `${baseURL}/${id}`;
//   try {
//     const response = await axios.put(requestUrl, productData, getConfig(token));
//     console.log("Product Updated: ", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating product: ", error);
//     throw error;
//   }
// };

// // **3. حذف منتج (Delete Product)**
// export const deleteProduct = async (id, token) => {
//   const requestUrl = `${baseURL}/${id}`;
//   try {
//     const response = await axios.delete(requestUrl, getConfig(token));
//     console.log("Product Deleted:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting product: ", error);
//     throw error;
//   }
// };
// services/adminProductServices.js
import axios from "axios";

const baseURL = "http://localhost:5125/api/v1/products";

// ** Create Admin Product **
export const createAdminProduct = async (formData, token) => {
  try {
    const response = await axios.post(`${baseURL}`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // لتأكد من التوكن لو كان يتطلب توكن
      },
    });

    console.log("Product Created:", response.data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error(`Failed to create product: ${errorMessage}`);
    throw new Error(`Failed to create product: ${errorMessage}`);
  }
};

// ** Update Admin Product **
export const updateAdminProduct = async (id, formData, token) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // لتأكد من التوكن لو كان يتطلب توكن
      },
    });

    console.log("Product Updated:", response.data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error(`Failed to update product: ${errorMessage}`);
    throw new Error(`Failed to update product: ${errorMessage}`);
  }
};

// ** Delete Admin Product **
export const deleteAdminProduct = async (id, token) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // لتأكد من التوكن لو كان يتطلب توكن
      },
    });

    console.log("Product Deleted:", response.data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error(`Failed to delete product: ${errorMessage}`);
    throw new Error(`Failed to delete product: ${errorMessage}`);
  }
};

// ** Delete Admin User (Optional) **
export const deleteAdminUser = async (id, token) => {
  const userURL = `http://localhost:5125/api/v1/users/${id}`;
  try {
    const response = await axios.delete(userURL, {
      headers: {
        Authorization: `Bearer ${token}`, // لتأكد من التوكن لو كان يتطلب توكن
      },
    });

    console.log("User Deleted:", response.data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error(`Failed to delete user: ${errorMessage}`);
    throw new Error(`Failed to delete user: ${errorMessage}`);
  }
};

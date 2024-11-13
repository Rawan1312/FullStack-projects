// import axios from "axios";

// const API_URL = "http://localhost:5125/api/v1/users"; // استبدال الـ API_URL

// // للحصول على قائمة المستخدمين مع التصفح (pagination)
// export const getUsers = async (page) => {
//   const response = await axios.get(`${API_URL}?page=${page}`);
//   return response.data;
// };

// // لإنشاء مستخدم جديد
// export const createUser = async (userData) => {
//   const response = await axios.post(API_URL, userData);
//   return response.data;
// };

// // لتحديث بيانات مستخدم موجود
// export const updateUser = async (userId, userData) => {
//   const response = await axios.put(`${API_URL}/${userId}`, userData);
//   return response.data;
// };

// // لحذف مستخدم
// export const deleteUser = async (userId) => {
//   const response = await axios.delete(`${API_URL}/${userId}`);
//   return response.data;
// };

// const API_URL = "http://localhost:5125/api/v1/users";
// const AUTH_URL = "http://localhost:5125/api/v1/auth";

// // الحصول على قائمة المستخدمين مع إمكانية البحث والفرز
// export const getUsers = async (
//   page = 1,
//   pageSize = 5,
//   searchValue = "",
//   sortOrder = "name_asc"
// ) => {
//   const token = localStorage.getItem("token");
//   const params = new URLSearchParams();

//   params.append("pageNumber", page);
//   params.append("pageSize", pageSize);

//   if (searchValue) {
//     params.append("search", searchValue);
//   }

//   if (sortOrder) {
//     params.append("sortOrder", sortOrder);
//   }

//   const response = await axios.get(`${API_URL}?${params.toString()}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// export const createUser = async (userData) => {
//   // إعداد التعديل كـ JSON Patch
//   const patchData = [
//     { op: "add", path: "/name", value: userData.name },
//     { op: "add", path: "/email", value: userData.email },
//     { op: "add", path: "/password", value: userData.password },
//   ];

//   try {
//     const response = await axios.post(`${API_URL}/`, patchData, {
//       headers: {
//         "Content-Type": "application/json-patch+json",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error creating user:",
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// };

// // الحصول على مستخدم معين حسب الـ ID
// export const getUserById = async (userId) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get(`${API_URL}/${userId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// // تحديث بيانات المستخدم
// export const updateUser = async (userId, userData) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.put(`${API_URL}/${userId}`, userData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// // حذف مستخدم
// export const deleteUser = async (userId) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.delete(`${API_URL}/${userId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// // };
// import axios from "axios";

// const API_URL = "http://localhost:5125/api/v1/users";
// const AUTH_URL = "http://localhost:5125/api/v1/auth";

// // الحصول على قائمة المستخدمين مع إمكانية البحث والفرز
// export const getUsers = async (
//   page = 1,
//   pageSize = 5,
//   searchValue = "",
//   sortOrder = "name_asc"
// ) => {
//   const token = localStorage.getItem("token");
//   const params = new URLSearchParams();

//   params.append("pageNumber", page);
//   params.append("pageSize", pageSize);

//   if (searchValue) {
//     params.append("search", searchValue);
//   }

//   if (sortOrder) {
//     params.append("sortOrder", sortOrder);
//   }

//   const response = await axios.get(`${API_URL}?${params.toString()}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// // إنشاء مستخدم جديد
// export const createUser = async (userData) => {
//   // إعداد التعديل كـ JSON Patch
//   const patchData = [
//     { op: "add", path: "/name", value: userData.name },
//     { op: "add", path: "/email", value: userData.email },
//     { op: "add", path: "/password", value: userData.password },
//   ];

//   try {
//     const response = await axios.post(`${API_URL}/`, patchData, {
//       headers: {
//         "Content-Type": "application/json-patch+json",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error creating user:",
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// };

// // الحصول على مستخدم معين حسب الـ ID
// export const getUserById = async (userId) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get(`${API_URL}/${userId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// // تحديث بيانات المستخدم
// export const updateUser = async (userId, userData) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.put(`${API_URL}/${userId}`, userData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// // حذف مستخدم
// export const deleteUser = async (userId) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.delete(`${API_URL}/${userId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// // };
// import axios from "axios";

// // رابط API
// const API_URL = "http://localhost:5125/api/v1/auth";

// // تسجيل مستخدم جديد
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error registering user:", error);
//     throw error;
//   }
// };

// // تسجيل دخول مستخدم
// export const loginUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, userData);
//     return response.data; // يتوقع أن يتضمن التوكن وبيانات المستخدم
//   } catch (error) {
//     console.error("Error logging in user:", error);
//     throw error;
//   }
// };
import axios from "axios";
// import { response } from "express";

const baseURL = "http://localhost:5125/api/v1/users";
const authURL = "http://localhost:5125/api/v1/auth";
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${authURL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
export const getAllUsers = async (
  pageNumber = 1,
  pageSize = 3,
  searchValue = "",
  sortOrder = "name_asc"
) => {
  try {
    const token = localStorage.getItem("token");
    const params = new URLSearchParams();

    params.append("pageNumber", pageNumber);
    params.append("pageSize", pageSize);

    if (searchValue) {
      params.append("search", searchValue);
    }

    if (sortOrder) {
      params.append("sortOrder", sortOrder);
    }

    const response = await axios.get(`${baseURL}?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
export const updateUser = async (id, userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${baseURL}/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
export const SignInUser = async (email, password) => {
  const user = {
    Email: email,
    Password: password,
  };
  try {
    // const token = localStorage.getItem("token");
    const response = await axios.post(`${authURL}/login`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${authURL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

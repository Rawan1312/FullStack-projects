import axios from "axios";

const API_URL = "http://localhost:5125/api/v1/users"; // استبدال الـ API_URL

// للحصول على قائمة المستخدمين مع التصفح (pagination)
export const getAllUsers = async (page) => {
  const response = await axios.get(`${API_URL}?page=${page}`);
  return response.data;
};

// لإنشاء مستخدم جديد
export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

// لتحديث بيانات مستخدم موجود
export const updateUser = async (userId, userData) => {
  const response = await axios.put(`${API_URL}/${userId}`, userData);
  return response.data;
};

// لحذف مستخدم
export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};

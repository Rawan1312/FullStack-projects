import axios from "axios";

const baseURL = "https://backend-837l.onrender.com/api/v1/orders";

// خدمة لطلب كل الطلبات
export const getAllOrders = async (
  userId = "",
  pageNumber = 1,
  pageSize = 6
) => {
  const params = new URLSearchParams();
  params.append("pageNumber", pageNumber);
  params.append("pageSize", pageSize);

  if (userId) {
    params.append("userId", userId); // فلترة النتائج بناءً على المستخدم
  }

  const requestUrl = `${baseURL}?${params.toString()}`;
  try {
    const response = await axios.get(requestUrl);
    return response.data; // إرجاع البيانات من الاستجابة
  } catch (error) {
    console.error("Error fetching orders: ", error);
    throw error;
  }
};

// خدمة لطلب تفاصيل الطلب بناءً على الـ id
export const getOrderById = async (id) => {
  const url = `${baseURL}/${id}`;
  const response = await axios.get(url);
  return response.data;
};

// خدمة لإنشاء طلب جديد
export const createOrder = async (orderData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(baseURL, orderData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // إرجاع الاستجابة
};

// خدمة لتحديث الطلب
export const updateOrder = async (id, orderData) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${baseURL}/${id}`, orderData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// خدمة لحذف الطلب
export const deleteOrder = async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

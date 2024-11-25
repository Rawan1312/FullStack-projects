import React, { createContext, useContext, useState, useEffect } from "react";
import {
  SignInUser,
  getUserById,
  registerUser,
  updateUser,
} from "../services/UserService"; // استيراد الخدمات

// إنشاء السياق (Context)
const UserContext = createContext();

// موفر السياق (Context Provider)
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // لحفظ بيانات المستخدم
  const [loading, setLoading] = useState(true); // لتحديد إذا كان يتم تحميل البيانات
  const [error, setError] = useState(null); // لتخزين الأخطاء

  // دالة لتسجيل الدخول
  const signIn = async (email, password) => {
    try {
      const data = await SignInUser(email, password);
      setUser(data); // تخزين بيانات المستخدم بعد تسجيل الدخول
    } catch (err) {
      setError("Failed to sign in. Please try again.");
      console.error(err);
    }
  };

  // دالة للتسجيل
  const register = async (userData) => {
    try {
      const data = await registerUser(userData);
      setUser(data); // تخزين بيانات المستخدم بعد التسجيل
    } catch (err) {
      setError("Failed to register. Please try again.");
      console.error(err);
    }
  };

  // دالة للحصول على بيانات المستخدم بناءً على ID
  const fetchUser = async (userId) => {
    try {
      const data = await getUserById(userId);
      setUser(data); // تخزين بيانات المستخدم
    } catch (err) {
      setError("Failed to fetch user data.");
      console.error(err);
    }
  };

  // دالة لتحديث بيانات المستخدم
  const updateUserData = async (id, userData) => {
    try {
      const data = await updateUser(id, userData);
      setUser(data); // تحديث بيانات المستخدم
    } catch (err) {
      setError("Failed to update user data.");
      console.error(err);
    }
  };

  useEffect(() => {
    // جلب بيانات المستخدم بعد تحميل الصفحة (يمكنك تعديل هذه الدالة حسب الحاجة)
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchUser(userId);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, loading, error, signIn, register, updateUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};

// دالة لاستخدام بيانات المستخدم في أي مكون
export const useUser = () => {
  return useContext(UserContext);
};

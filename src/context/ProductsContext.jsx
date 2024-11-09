import React, { useState, useEffect, createContext } from "react";

import PropTypes from "prop-types";
import { getAllProducts } from "../services/productService";

// إنشاء الـ Context للمنتجات
export const ProductContext = createContext();

// توفير المنتجات في الـ Context لجميع المكونات
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // لتخزين قائمة المنتجات
  const [isLoading, setIsLoading] = useState(false); // لتتبع حالة التحميل
  const [error, setError] = useState(null); // لتخزين الأخطاء إذا حدثت
  const [searchValue, setSearchValue] = useState(""); // لتخزين قيمة البحث
  const [pageNumber, setPageNumber] = useState(1); // لتخزين رقم الصفحة
  const [pageSize, setPageSize] = useState(5); // لتخزين حجم الصفحة
  const [sortBy, setSortBy] = useState("name"); // لتحديد الحقل الذي سيتم التصفية حسبه (افتراضي هو "name")
  const [sortOrder, setSortOrder] = useState("asc"); // لتحديد ترتيب التصنيف (افتراضي هو "asc")
  const [totalPages, setTotalPages] = useState(1); // لتخزين إجمالي عدد الصفحات

  // دالة لجلب المنتجات من الـ API بناءً على القيم المحددة
  const fetchData = async (
    searchValue = "",
    pageNumber = 1,
    pageSize = 5,
    sortBy = "name",
    sortOrder = "asc"
  ) => {
    setIsLoading(true); // تعيين حالة التحميل إلى true
    try {
      // استدعاء الخدمة للحصول على المنتجات
      const response = await getAllProducts(
        searchValue,
        pageNumber,
        pageSize,
        sortBy,
        sortOrder
      );

      // تحديث قائمة المنتجات وعدد الصفحات
      setProducts(response.product.items);
      setTotalPages(response.product.totalPages);
    } catch (error) {
      // في حالة حدوث خطأ، يتم تخزين الرسالة في حالة الأخطاء
      setError(error.message);
    } finally {
      setIsLoading(false); // تعيين حالة التحميل إلى false بعد الانتهاء
    }
  };

  // استدعاء دالة fetchData عند تحديث القيم
  useEffect(() => {
    fetchData(searchValue, pageNumber, pageSize, sortBy, sortOrder);
  }, [searchValue, pageNumber, pageSize, sortBy, sortOrder]);

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        error,
        searchValue,
        setSearchValue,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        sortBy, // إضافة sortBy هنا
        setSortBy, // إضافة setSortBy هنا
        sortOrder,
        setSortOrder,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// تحديد نوع القيم التي سيتم تمريرها للـ Provider
ProductProvider.propTypes = {
  children: PropTypes.node,
};

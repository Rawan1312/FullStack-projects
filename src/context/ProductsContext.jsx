import React, { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { getAllProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("name");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getAllProducts(
        pageNumber,
        pageSize,
        sortOrder,
        searchValue
      );
      setProducts(response.product.items);
      setTotalPages(response.product.totalPages);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchValue, pageNumber, pageSize, sortOrder]);

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
        sortOrder,
        setSortOrder,
        sortBy,
        setSortBy,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node,
};
// // ProductProvider.js
// import React, { createContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { getAllProducts } from "../services/productService";

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);
//   const [sortOrder, setSortOrder] = useState("asc");

//   const fetchData = async () => {
//     setIsLoading(true);
//     try {
//       console.log("Fetching data with searchValue:", searchValue);
//       const response = await getAllProducts(
//         pageNumber,
//         pageSize,
//         searchValue,
//         sortOrder
//       );
//       setProducts(response.product.items);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [searchValue, pageNumber, pageSize, sortOrder]);

//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//         isLoading,
//         error,
//         searchValue,
//         setSearchValue,
//         pageNumber,
//         setPageNumber,
//         pageSize,
//         setPageSize,
//         sortOrder,
//         setSortOrder,
//         totalPages,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// ProductProvider.propTypes = {
//   children: PropTypes.node,
// };

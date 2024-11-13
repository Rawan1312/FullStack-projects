import React, { useState, useEffect, createContext } from "react";

import PropTypes from "prop-types";
import { getAllProducts } from "../services/productService";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalPages, setTotalPages] = useState(1);
  const fetchData = async (
    searchValue,
    pageNumber = 1,
    pageSize = 6,
    sortBy = "name",
    sortOrder = "asc"
  ) => {
    setIsLoading(true);
    try {
      const response = await getAllProducts(
        searchValue,
        pageNumber,
        pageSize,
        sortBy,
        sortOrder
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
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
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

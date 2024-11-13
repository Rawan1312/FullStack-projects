import React, { useContext, useEffect, useState } from "react";

import { Input } from "@mui/material";
import { ProductContext } from "../../context/ProductsContext";

const SearchInput = () => {
  const { setSearchValue } = useContext(ProductContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchValue(inputValue);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchValue]);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Input
      action="Search"
      placeholder="Search for products..."
      fluid
      onChange={handleSearchChange}
      style={{ marginTop: "8px" }}
      size="small"
    />
  );
};

export default SearchInput;

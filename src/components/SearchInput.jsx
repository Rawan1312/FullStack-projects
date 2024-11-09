import React, { useContext } from "react";

import { Input } from "semantic-ui-react";
import { ProductContext } from "../context/ProductsContext";

const SearchInput = () => {
  const { setSearchValue } = useContext(ProductContext);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Input
      action="Search"
      placeholder="Search for products..."
      fluid
      onChange={handleSearchChange}
      style={{ marginTop: "16px" }}
      size="small"
    />
  );
};

export default SearchInput;

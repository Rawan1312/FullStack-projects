import React, { useContext } from "react";

import "./sortstyle.css";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ProductContext } from "../../context/ProductsContext";

const SortProduct = () => {
  const { sortOrder, setSortOrder, sortBy, setSortBy } =
    useContext(ProductContext); // Add sortBy

  const handleSortChange = (event) => {
    const value = event.target.value;
    // Update sortBy and sortOrder
    if (value.includes("name")) {
      setSortBy("name");
      setSortOrder(value.includes("asc") ? "asc" : "desc");
    } else if (value.includes("price")) {
      setSortBy("price");
      setSortOrder(value.includes("asc") ? "asc" : "desc");
    } else if (value.includes("date")) {
      setSortBy("date");
      setSortOrder(value.includes("asc") ? "asc" : "desc");
    }
  };

  //   return (
  //     <div>
  //       <FormControl fullWidth margin="normal">
  //         <InputLabel id="sort-label">Sort By</InputLabel>
  //         <Select
  //           labelId="sort-label"
  //           value={sortOrder}
  //           label="Sort By"
  //           onChange={handleSortChange}
  //         >
  //           <MenuItem value="name_asc">Name (A-Z)</MenuItem>
  //           <MenuItem value="name_desc">Name (Z-A)</MenuItem>
  //           <MenuItem value="price_asc">Price (Low to High)</MenuItem>
  //           <MenuItem value="price_desc">Price (High to Low)</MenuItem>
  //           <MenuItem value="date_asc">Date (Oldest First)</MenuItem>
  //           <MenuItem value="date_desc">Date (Newest First)</MenuItem>
  //         </Select>
  //       </FormControl>
  //     </div>
  //   );
  // };
  return (
    <div className="form-control">
      <label htmlFor="sort-dropdown" className="sort-label">
        Sort By
      </label>
      <select
        id="sort-dropdown"
        value={sortOrder}
        onChange={handleSortChange}
        className="sort-select"
      >
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
        <option value="date_asc">Date (Oldest First)</option>
        <option value="date_desc">Date (Newest First)</option>
      </select>
    </div>
  );
};

export default SortProduct;

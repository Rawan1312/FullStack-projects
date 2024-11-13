import React, { useContext } from "react";

import "./sortstyle.css";
import { ProductContext } from "../../context/ProductsContext";

const SortProduct = () => {
  const { sortOrder, setSortOrder, sortBy, setSortBy } =
    useContext(ProductContext);

  const handleSortChange = (event) => {
    const value = event.target.value;
    const [newSortBy, newSortOrder] = value.split("_");
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  return (
    <div className="form-control">
      <label htmlFor="sort-dropdown" className="sort-label">
        Sort By
      </label>
      <select
        id="sort-dropdown"
        value={`${sortBy}_${sortOrder}`} 
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

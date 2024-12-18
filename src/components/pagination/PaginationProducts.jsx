import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { Box, Pagination } from "@mui/material";

const PaginationProducts = () => {
  const { pageNumber, setPageNumber, pageSize, totalPages } =
    useContext(ProductContext);
  console.log(pageNumber);
  const handlePageChange = (event, value) => {
    console.log("Page changed to:", value);
    setPageNumber(value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

export default PaginationProducts;

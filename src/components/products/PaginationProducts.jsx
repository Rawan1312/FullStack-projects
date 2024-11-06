// import React, { useContext } from "react";

// import { Pagination } from "react-bootstrap";
// import { ProductContext } from "../context/ProduuctsContext";

// const PaginationProducts = () => {
//   const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);
//   console.log(pageNumber);

//   const handlePageChange = (event, value) => {
//     setPageNumber(value);
//   };
//   return (
//     <Pagination
//       count={totalPages}
//       page={pageNumber}
//        onChange={handlePageChange}
//       variant="outlined"
//       shape="rounded"
//       sx={{ marginTop: 3 }}
//     />
//   );
// };

// export default PaginationProducts;
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { ProductContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

const PaginationProducts = () => {
  const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={pageNumber}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
      sx={{ marginTop: 3 }}
    />
  );
};

export default PaginationProducts;

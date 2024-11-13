import React, { useContext } from "react";

import Product from "./Product";
import { ProductContext } from "../../context/ProductsContext";
import { Grid2, Typography } from "@mui/material";

const Products = () => {
  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <Typography variant="h4">Loading Products...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error: {error}</Typography>;
  }

  return (
    <div>
      <Grid2 container spacing={3}>
        {products.map((product) => (
          <Grid2 item="true" xs={12} sm={6} md={4} key={product.id}>
            <Product product={product} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Products;

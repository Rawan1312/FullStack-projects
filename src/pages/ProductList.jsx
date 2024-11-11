import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import Product from "../components/products/Product"; 
import { Grid2 } from "@mui/material"; 

const ProductList = () => {

  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <h3>Loading Products...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <Grid2 container spacing={3}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} key={product.id}>
            <Product product={product} />{" "}
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ProductList;

import React, { useContext } from "react";

import { ProductContext } from "../context/ProductsContext";
import Product from "../components/products/Product";
import PaginationProducts from "../components/pagination/PaginationProducts";
import "./productslist.css";

const ProductList = () => {
  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <h3>Loading Products...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  if (products.length === 0) {
    return <h3>No products available.</h3>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <Product product={product} />
        </div>
      ))}
      <PaginationProducts />
    </div>
  );
};

export default ProductList;

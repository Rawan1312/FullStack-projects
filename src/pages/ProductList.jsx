// import React, { useContext } from "react";
// import { ProductContext } from "../context/ProductsContext";
// import Product from "../components/products/Product";

// const ProductList = () => {

//   const { products, isLoading, error } = useContext(ProductContext);

//   if (isLoading) {
//     return <h3>Loading Products...</h3>;
//   }

//   if (error) {
//     return <h3>Error: {error}</h3>;
//   }

//   return (
//     <div>
//       <h2>Product List</h2>
//         {products.map((product) => (
//           <div item xs={12} sm={6} md={4} key={product.id}>
//             <Product product={product} />

//     </div>
//   );
// };

// export default ProductList;
// import React, { useContext } from "react";
// import { ProductContext } from "../context/ProductsContext";
// import Product from "../components/products/Product";
// import SearchInput from "../components/search/SearchInput";
// import SortProduct from "../components/sort/SortProduct";
// import PaginationProducts from "../components/pagination/PaginationProducts";

// const ProductList = () => {
//   const { products, isLoading, error } = useContext(ProductContext);

//   if (isLoading) {
//     return <h3>Loading Products...</h3>;
//   }

//   if (error) {
//     return <h3>Error: {error}</h3>;
//   }

//   return (
//     <div>
//       <h2>Product List</h2>
//       <div>

//         <SearchInput />
//         <SortProduct />
//       </div>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div className="product-item" key={product.id}>
//             <Product product={product} />
//           </div>
//         ))}
//       </div>
//       <PaginationProducts />
//     </div>
//   );
// };

// export default ProductList;
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import Product from "../components/products/Product";
import SearchInput from "../components/search/SearchInput";
import SortProduct from "../components/sort/SortProduct";
import PaginationProducts from "../components/pagination/PaginationProducts";
import "./productslist.css"; // استيراد ملف CSS

const ProductList = () => {
  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <h3>Loading Products...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  // تحقق إذا كانت المصفوفة فارغة
  if (products.length === 0) {
    return <h3>No products available.</h3>;
  }

  return (
    <div className="product-list-container">
      <h2 className="page-title">Product List</h2>
      <div className="search-sort-container">
        <SearchInput />
        <SortProduct />
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
      <PaginationProducts />
    </div>
  );
};

export default ProductList;

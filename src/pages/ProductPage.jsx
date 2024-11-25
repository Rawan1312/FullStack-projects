// import React from "react";
// import ProductList from "./ProductList";
// import SearchInput from "../components/search/SearchInput";
// import SortProduct from "../components/sort/SortProduct";

// function ProductPage() {
//   return (
//     <div>
//       <div className="product-list-container">
//         <h2 className="page-title">Product List</h2>
//         <div className="search-sort-container">
//           <SortProduct />
//         </div>
//         <div>
//           <SearchInput />
//         </div>
//         <div>
//           <ProductList />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductPage;

import React from "react";
import ProductList from "./ProductList";
import SearchInput from "../components/search/SearchInput";
import SortProduct from "../components/sort/SortProduct";
import "./Productpage.css";

function ProductPage() {
  return (
    <div>
      <div className="product-list-container">
        <h2 className="page-title">Product List</h2>
        <div className="search-sort-container">
          <SearchInput />
          <SortProduct />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

// import React, { useContext } from "react";

// // import Product from "./Product";
// import { ProductContext } from "../../context/ProduuctsContext";

// const Products = () => {
//   const { products, isLoading, error } = useContext(ProductContext);
//   return (
//     <div>
//       <Grid2 container spacing={3}>
//         {Products.map((product) => (
//           <Product product={product} key={Product.id} />
//         ))}
//       </Grid2>
//     </div>
//   );
// };

// export default Products;
import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../../context/ProductsContext";
import { Grid2, Typography } from "@mui/material";

const Products = () => {
  const { products, isLoading, error } = useContext(ProductContext);
  console.log(products);

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
          <Product product={product} key={product.id} />
        ))}
      </Grid2>
    </div>
  );
};

export default Products;

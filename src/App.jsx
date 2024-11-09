import React from "react";
import Index from "./routes";
import "semantic-ui-css/semantic.min.css";

import { ProductProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Index />
      </CartProvider>
    </ProductProvider>
  );
};

export default App;

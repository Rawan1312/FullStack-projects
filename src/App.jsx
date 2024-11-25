import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Index from "./routes/Index";
import { ProductProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <Index />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default App;

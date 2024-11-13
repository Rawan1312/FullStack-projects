import React from "react";

import Index from "./routes";

// import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    // <UserProvider>
    <ProductProvider>
      <CartProvider>
        <Index />
      </CartProvider>
    </ProductProvider>

    // {/* </UserProvider> */}
  );
};

export default App;

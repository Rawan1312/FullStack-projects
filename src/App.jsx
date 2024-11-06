import React from "react";
import Index from "./routes";
import { ProductProvider } from "./context/ProductsContext";

const App = () => {
  return (
    <ProductProvider>
      <Index />
    </ProductProvider>
  );
};

export default App;

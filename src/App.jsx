import React, { useState } from "react";

import Index from "./routes";
import { ProductProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  // const [users, setUsers] = useState(usersData);

  return (
    <ProductProvider>
      <CartProvider>
        {/* <SignUpForm setUsers={setUsers} />
        <Users users={users} setUsers={setUsers} /> */}
        {/* <AdminDashboard /> */}
        <Index />
      </CartProvider>
    </ProductProvider>
  );
};

export default App;

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext"; // تأكد من المسار الصحيح

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be within a CartProvider");
//   }
//   return context;
// };

// export default useCart;
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // تأكد من المسار الصحيح

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within a CartProvider");
  }
  return context;
};

export default useCart;

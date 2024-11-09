// import React, {  useEffect, useState } from "react";
//  import PropTypes from "prop-types";

// import { createContext } from "react";

// import { CartContext } from "./CartContext";

// export const CartProvider = ({ children }) => {
//   const loadCartFromLocalStorage = () => {
//     const cartData = localStorage.getItem("cart");
//     return cartData ? JSON.parse(cartData) : [];
//   };

//   const [cart, setCart] = useState(loadCartFromLocalStorage);

//   // Function to save the cart to localStorage
//   const saveCartToLocalStorage = (cartItems) => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   };

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProductIndex = prevCart.findIndex(
//         (item) => item.productId === product.productId
//       );
//       let updatedCart;

//       if (existingProductIndex >= 0) {
//         // If the product already exists, update quantity
//         updatedCart = [...prevCart];
//         updatedCart[existingProductIndex].quantity += 1;
//       } else {
//         // Add new product to cart
//         updatedCart = [...prevCart, { ...product, quantity: 1 }];
//       }

//       saveCartToLocalStorage(updatedCart); // Save the updated cart to localStorage
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter(
//         (item) => item.productId !== productId
//       );
//       saveCartToLocalStorage(updatedCart); // Save the updated cart to localStorage
//       return updatedCart;
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem("cart"); // Remove the cart from localStorage
//   };

//   // Synchronize cart with localStorage whenever it changes
//   useEffect(() => {
//     saveCartToLocalStorage(cart);
//   }, [cart]);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// CartProvider.propTypes = {
//   children: PropTypes.node,
// };import React, { createContext, useState, useEffect } from "react";

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.productId === product.productId
      );
      let updatedCart;

      if (existingProductIndex >= 0) {
        // إذا كان المنتج موجودًا بالفعل، زيادة الكمية
        updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        // إذا كان المنتج غير موجود، إضافته مع الكمية 1
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.productId !== productId
      );
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

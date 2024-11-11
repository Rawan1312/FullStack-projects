// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// import { createContext } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   // Load the cart from localStorage if available, otherwise initialize it as an empty array
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

//   const updateQuantity = (productId, quantity) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.map((item) => {
//         if (item.productId === productId) {
//           return { ...item, quantity: Math.max(1, quantity) }; // Ensure quantity is at least 1
//         }
//         return item;
//       });

//       saveCartToLocalStorage(updatedCart); // Save the updated cart to localStorage
//       return updatedCart;
//     });
//   };

//   // Synchronize cart with localStorage whenever it changes
//   useEffect(() => {
//     saveCartToLocalStorage(cart);
//   }, [cart]);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// CartProvider.propTypes = {
//   children: PropTypes.node,
// };
// CartContext.jsximport React, { createContext, useState, useEffect } from "react";import React, { createContext, useState, useEffect } from "react";
import React, { createContext, useState, useEffect } from "react";

// Create the Cart context
export const CartContext = createContext();

// CartProvider component to manage the cart state
export const CartProvider = ({ children }) => {
  // Load cart data from localStorage
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  // Save cart data to localStorage
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.productId !== productId
      );
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Clear all products from the cart
  const clearCart = () => {
    setCart([]); // Clears the cart
    localStorage.removeItem("cart"); // Removes cart from localStorage
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: Math.max(1, quantity) };
        }
        return item;
      });

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

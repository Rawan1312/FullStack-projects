import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Cart context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Initialize cartItems with the data from localStorage or an empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Add item to cart
  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Save to localStorage
      return updatedItems;
    });
  };

  // Remove item from cart by product ID, ensuring it only removes one item
  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Save to localStorage
      return updatedItems;
    });
  };

  // Clear all items in the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Remove from localStorage
  };

  // Calculate total price of items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Effect to store cart items in localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

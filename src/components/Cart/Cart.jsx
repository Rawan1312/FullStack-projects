import React from "react";

import { useCart } from "../../context/CartContext"; // Import the cart context
import "./cartstyle.css";

const Cart = () => {
  const { cartItems, removeItemFromCart, clearCart, total } = useCart();

  return (
    <div className="cart-container">
      <h2 className="title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart">
          <div className="products">
            {cartItems.map((item) => (
              <div key={item.id} className="product">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-info">
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart} className="clear-cart-button">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

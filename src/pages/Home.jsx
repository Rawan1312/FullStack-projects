import React from "react";

import "./HomeStyle.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Bookstore</h1>
        <p>Your one-stop shop for all the books you love!</p>
        <button className="shop-now-btn" onClick={handleNavigateToProducts}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;

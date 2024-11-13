import React from "react";

import "./HomeStyle.css";
import Products from "../components/products/Products";
import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import SearchInput from "../components/search/SearchInput";
import PaginationProducts from "../components/pagination/PaginationProducts";
import SortProduct from "../components/sort/SortProduct";
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

// <Container>
//   <Typography variant="h4" style={{ color: "#32474C" }}></Typography>
//   <Box>
//     <SearchInput />
//     <SortProduct />
//   </Box>
//   <Box sx={{ padding: 2 }}>
//     <Products />
//     <PaginationProducts />
//   </Box>
// // </Container>
// <Container>
//   <Typography
//     variant="h4"
//     style={{ color: "#32474C", textAlign: "center", marginBottom: "20px" }}
//   >
//     Products List
//   </Typography>

//   <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
//     <SearchInput />
//     <SortProduct />
//   </Box>

//   <Box sx={{ padding: 2 }}>
//     <Products/>
//     <PaginationProducts />
//   </Box>
// </Container>

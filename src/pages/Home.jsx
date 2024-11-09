import React from "react";

import Products from "../components/products/Products";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import SearchInput from "../components/SearchInput";
import PaginationProducts from "../components/PaginationProducts";
import SortProduct from "../components/SortProduct";

const Home = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        style={{ color: "#32474C", marginBottom: "20px" }}
      >
      </Typography>
      <SearchInput />
      <SortProduct />
      <Products />
      <PaginationProducts />
    </Container>
  );
};

export default Home;

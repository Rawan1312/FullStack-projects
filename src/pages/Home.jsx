import React from "react";
import Products from "../components/products/Products";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import SearchInput from "../components/products/SearchInput";
import PaginationProducts from "../components/products/PaginationProducts";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4">Load all the products :</Typography>
      <SearchInput />
      <Products />
      <PaginationProducts />
    </Container>
  );
};

export default Home;

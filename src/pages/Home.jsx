import React from "react";

import Products from "../components/products/Products";
import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import SearchInput from "../components/search/SearchInput";
import PaginationProducts from "../components/pagination/PaginationProducts";
import SortProduct from "../components/sort/SortProduct";

const Home = () => {
  return (
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
    // </Container>
    <Container>
      <Typography
        variant="h4"
        style={{ color: "#32474C", textAlign: "center", marginBottom: "20px" }}
      >
        Products List
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <SearchInput />
        <SortProduct />
      </Box>

      <Box sx={{ padding: 2 }}>
        <Products/>
        <PaginationProducts />
      </Box>
    </Container>
  );
};

export default Home;

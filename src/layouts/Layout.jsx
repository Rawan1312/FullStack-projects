import React from "react";
import NavBar from "./header/NavBar";
import Footer from "./Footer";
import Main from "./Main";
import { Container } from "@mui/material";
import { Padding } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* <Container xs={{ Padding: 2 }}>
        <Outlet />
      </Container> */}
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;

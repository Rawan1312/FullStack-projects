import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container sx={{ padding: 2, marginTop: "64px" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Main;

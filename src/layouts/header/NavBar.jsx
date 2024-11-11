import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          BOOKSHOP
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/signin">
          SignIn
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          SignUp
        </Button>
        <Button color="inherit" component={Link} to="/Cart">
          Cart
        </Button>
        <Button color="inherit" component={Link} to="/productList">
          ProductList
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

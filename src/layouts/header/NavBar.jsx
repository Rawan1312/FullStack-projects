import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CartIcon from "../../components/Cart/CartIcon";

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#32474C" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: "#BC9585" }}>
          The Book Nook
        </Typography>
        <Button color="inherit" component={Link} to="/">
          <HomeIcon style={{ marginRight: "8px" }} />
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          <CartIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

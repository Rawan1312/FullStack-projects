import React from "react";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavBaruser from "./NavBaruser";

const NavBar = () => {
  const isSignedIn = localStorage.getItem("isSigned") === "true";
  const navigate = useNavigate();
  const getRole = localStorage.getItem("role");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isSigned");
    navigate("/");
  };
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#ddd0c8" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: "#323232" }}>
          Luno
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{ color: "#323232" }}
        >
          Home
        </Button>
        {!isSignedIn && (
          <Button
            color="inherit"
            component={Link}
            to="/signin"
            style={{ color: "#323232" }}
          >
            SignIn
          </Button>
        )}
        {!isSignedIn && (
          <Button
            color="inherit"
            component={Link}
            to="/signup"
            style={{ color: "#323232" }}
          >
            SignUp
          </Button>
        )}
        {isSignedIn && getRole === "Admin" && (
          <Link to="/admin/dashboard">Admin Dashboard</Link>
        )}
        {isSignedIn && getRole === "User" && <NavBaruser />}

        <Button to="/" onClick={handleSignOut}>
          SignOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

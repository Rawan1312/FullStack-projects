import React from "react";

import { Link } from "react-router-dom";

const NavBaruser = () => {
  const isSignedIn = localStorage.getItem("isSigned") === "true";
  return (
    <ul
      style={{
        display: "flex",
        gap: "15px",
        listStyleType: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {/* <li>
        <Link to="/" style={{ textDecoration: "none", color: "#323232" }}>
          Home
        </Link>
      </li> */}
      <li>
        <Link to="/about" style={{ textDecoration: "none", color: "#323232" }}>
          About
        </Link>
      </li>
      <li>
        <Link to="/cart" style={{ textDecoration: "none", color: "#323232" }}>
          Cart
        </Link>
      </li>
      {isSignedIn && (
        <li>
          <Link
            to="/user/profile"
            style={{ textDecoration: "none", color: "#323232" }}
          >
            Profile
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavBaruser;

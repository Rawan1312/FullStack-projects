import React from "react";
import { Link } from "react-router-dom";

const NavBaruser = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/products">ProductList</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/user/profile">Profile</Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBaruser;

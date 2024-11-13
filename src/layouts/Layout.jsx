import React from "react";

import NavBar from "./header/NavBar";
import Footer from "./Footer";
import Main from "./Main";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;

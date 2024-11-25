// import React from "react";

// import NavBar from "./header/NavBar";
// import Footer from "./Footer";
// import Main from "./Main";

// const Layout = () => {
//   return (
//     <div>
//       <NavBar />
//       <Main />
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import React from "react";

import NavBar from "./header/NavBar";
import Footer from "./Footer";
import Main from "./Main";
import { Box } from "@mui/material";
const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Main />
      <Footer />
    </Box>
  );
};

export default Layout;

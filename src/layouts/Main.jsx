// import { Container } from "@mui/material";
// import React from "react";
// import { Outlet } from "react-router-dom";

// const Main = () => {
//   return (
//     <div>
//       <Container sx={{ padding: 2, marginTop: "64px" }}>
//         <Outlet />
//       </Container>
//     </div>
//   );
// };

// export default Main;

import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ paddingTop: "90px" }}>
      {" "}
      {/* لضمان المسافة المناسبة بين NavBar والمحتوى */}
      <Container sx={{ padding: 2 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Main;

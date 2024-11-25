// import React from "react";
// import { Container, Typography, Box } from "@mui/material";
// import AdminSidebar from "./AdminSidebar";
// import { Outlet } from "react-router-dom";

// const AdminDashboard = () => {
//   return (
//     <Box
//       display={{ xs: "block", md: "flex" }}
//       flexDirection={{ xs: "column", md: "row" }}
//     >
//       <Box sx={{ width: "100%", mb: { xs: 2, md: 0 } }}>
//         <AdminSidebar />
//       </Box>
//       <Container>
//         <Typography variant="h4" gutterBottom>
//           Admin Dashboard
//         </Typography>
//         <Box sx={{ mt: 4 }}>
//           <Outlet />
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AdminDashboard;

import { Box, Typography } from "@mui/material";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <Box>
      {/* الشريط الجانبي ثابت */}
      <AdminSidebar />
      <Box
        component="main"
        sx={{
          marginLeft: "250px", // المسافة التي يحتاجها الشريط الجانبي
          padding: "20px",
          paddingTop: "40px", // المسافة العلوية هنا
          backgroundColor: "#f5f5f5",
          height: "calc(100vh - 64px)", // حساب ارتفاع الشريط
          overflowY: "auto", // السماح بالتمرير
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Outlet /> {/* يعرض المحتوى الديناميكي حسب الصفحة */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;

// import React from "react";
// import {
//   Container,
//   Grid2,
//   Card,
//   CardContent,
//   Typography,
//   Button,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <Container maxWidth="lg">
//       <Grid2 container spacing={3} sx={{ marginTop: 4 }}>
//         <Grid2 item xs={12} sm={6} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">User Profile</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 View and edit your profile information
//               </Typography>
//               <Button
//                 component={Link}
//                 to="/user/profile"
//                 variant="contained"
//                 sx={{ marginTop: 2 }}
//               >
//                 Go to Profile
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Orders</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 View your past orders and track status
//               </Typography>
//               <Button
//                 component={Link}
//                 to="/user/orders"
//                 variant="contained"
//                 sx={{ marginTop: 2 }}
//               >
//                 View Orders
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Account Settings</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Manage your account settings and preferences
//               </Typography>
//               <Button
//                 component={Link}
//                 to="/user/settings"
//                 variant="contained"
//                 sx={{ marginTop: 2 }}
//               >
//                 Settings
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid2>
//       </Grid2>
//     </Container>
//   );
// };

// export default Dashboard;
// UserDashboard.js

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
const UserDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>Welcome to Your Dashboard</h2>
        <div>
          <button onClick={() => handlePageChange("profile")}>Profile</button>
          {/* <button onClick={() => handlePageChange("orders")}>Orders</button> */}
        </div>
        <div>
          {activePage === "profile" && <UserProfile />}
          {/* {activePage === "orders" && <Orders />} */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

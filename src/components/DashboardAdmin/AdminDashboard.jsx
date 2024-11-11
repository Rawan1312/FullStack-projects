// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

// const AdminDashboard = () => {
//   const [statistics, setStatistics] = useState({});
//   const [products, setProducts] = useState([]);
//   const [orders, setOrders] = useState([]);

//   // جلب الإحصائيات
//   useEffect(() => {
//     const fetchStatistics = async () => {
//       const stats = await axios.get("/api/statistics");
//       setStatistics(stats.data);
//     };

//     // جلب قائمة المنتجات
//     const fetchProducts = async () => {
//       const productsData = await axios.get("/api/products");
//       setProducts(productsData.data);
//     };

//     // جلب الطلبات
//     const fetchOrders = async () => {
//       const ordersData = await axios.get("/api/orders");
//       setOrders(ordersData.data);
//     };

//     fetchStatistics();
//     fetchProducts();
//     fetchOrders();
//   }, []);

//   return (
//     <Box padding={3}>
//       <Typography variant="h4">Admin Dashboard</Typography>

//       <Grid container spacing={2} marginTop={2}>
//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Total Products</Typography>
//               <Typography variant="h4">{products.length}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Total Orders</Typography>
//               <Typography variant="h4">{orders.length}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Total Users</Typography>
//               <Typography variant="h4">{statistics.totalUsers}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from "react";
// import { getAllOrders } from "../../services/orderService"; // Import the correct function
// import {
//   Typography,
//   CircularProgress,
//   Container,
//   Paper,
//   Button,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId"); // Retrieve user ID from localStorage
//     if (!userId) {
//       navigate("/signIn"); // Redirect to sign-in if no user ID
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const data = await getAllOrders(userId); // Pass userId to fetch user-specific orders
//         setOrders(data);
//       } catch (err) {
//         setError("Failed to fetch orders");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [navigate]);

//   if (isLoading) {
//     return (
//       <Container>
//         <CircularProgress sx={{ display: "block", margin: "2rem auto" }} />
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container>
//         <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
//           {error}
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h4" gutterBottom>
//         Your Orders
//       </Typography>
//       {orders.length === 0 ? (
//         <Typography variant="body1">You have no orders yet.</Typography>
//       ) : (
//         orders.map((order) => (
//           <Paper key={order.id} sx={{ padding: 2, marginBottom: 2 }}>
//             <Typography variant="h6">Order #{order.id}</Typography>
//             <Typography variant="body2">
//               Date: {new Date(order.date).toLocaleDateString()}
//             </Typography>
//             <Typography variant="body2">Total: ${order.totalAmount}</Typography>
//             <Button variant="outlined" sx={{ mt: 1 }}>
//               View Details
//             </Button>
//           </Paper>
//         ))
//       )}
//     </Container>
//   );
// };

// export default Orders;

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { getAllUsers, deleteUser } from "../../api/userApi"; // API functions
// import { useAuth } from "../../hooks/useAuth";

// const UsersList = () => {
//   const { isAdmin, isLoggedIn, token } = useAuth(); // Access from AuthProvider
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const pageNumber = 1; // You can manage pagination if needed
//   const pageSize = 5; // Number of users per page

//   // Fetch users only if the user is logged in and isAdmin
//   useEffect(() => {
//     if (isLoggedIn && isAdmin) {
//       setIsLoading(true);
//       getAllUsers(pageNumber, pageSize)
//         .then((data) => {
//           setUsers(data.users); // Assuming the response data has 'users' array
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           setError("Failed to fetch users");
//           setIsLoading(false);
//         });
//     }
//   }, [isLoggedIn, isAdmin, pageNumber, pageSize]);

//   // Handle delete user action
//   const handleDelete = async (id) => {
//     try {
//       await deleteUser(id, token); // Pass token for authentication
//       setUsers(users.filter((user) => user.userId !== id)); // Remove the user from the state
//     } catch (err) {
//       console.error("Failed to delete user:", err);
//       setError("Failed to delete user");
//     }
//   };

//   return (
//     <Container>
//       <Box sx={{ marginTop: "20px" }}>
//         <h2>Users List</h2>
//         {isLoading ? (
//           <CircularProgress />
//         ) : error ? (
//           <Alert severity="error">{error}</Alert>
//         ) : (
//           <TableContainer
//             component={Paper}
//             sx={{
//               overflowX: "scroll",
//               display: { xs: "block", sm: "block", md: "table" },
//             }}
//           >
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {users.map((user, index) => (
//                   <TableRow
//                     key={user.userId}
//                     onClick={() => setSelectedUserId(user.userId)}
//                     sx={{
//                       backgroundColor:
//                         selectedUserId === user.userId
//                           ? "rgba(0, 123, 255, 0.2)"
//                           : index % 2 === 0
//                           ? "rgba(0, 0, 0, 0.04)"
//                           : "white",
//                       "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
//                       cursor: "pointer",
//                     }}
//                   >
//                     <TableCell>{user.name}</TableCell>
//                     <TableCell>{user.email}</TableCell>
//                     <TableCell>
//                       <Button
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => handleDelete(user.userId)}
//                         sx={{ ml: 1 }}
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </Box>
//     </Container>
//   );
// };
// export default UsersList;

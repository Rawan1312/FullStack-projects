// import React, { useState } from "react";
// import { useUser } from "../../hooks/useUser"; // استيراد الـ hook الخاص بإدارة المستخدمين
// import {
//   Alert,
//   Box,
//   Container,
//   Grid2,
//   Table,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableBody,
//   Button,
//   CircularProgress,
//   Paper,
// } from "@mui/material";
// import SearchInput from "../search/SearchInput"; // مكون البحث
// import PaginationProducts from "../pagination/PaginationProducts"; // مكون التصفح

// const UserList = () => {
//   const {
//     users,
//     fetchUsers,
//     removeUser,
//     isLoading,
//     error,
//     pageNumber,
//     totalPages,
//     setSearchValue,
//     setPageNumber,
//   } = useUser();
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const handleDelete = async (id) => {
//     try {
//       await removeUser(id);
//     } catch (err) {
//       console.error("Failed to delete user:", err);
//     }
//   };

//   return (
//     <Container>
//       <Box sx={{ mb: 4 }}>
//         <Grid2
//           container
//           spacing={2}
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <Grid2 item xs={12} md={6}>
//             <SearchInput
//               setSearchValue={setSearchValue}
//               label={"Search users..."}
//             />
//           </Grid2>
//         </Grid2>
//       </Box>
//       <Paper sx={{ overflowX: "scroll" }}>
//         {isLoading ? (
//           <CircularProgress />
//         ) : error ? (
//           <Alert severity="error">{error}</Alert>
//         ) : (
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {users.map((user, index) => (
//                 <TableRow
//                   key={user.userId}
//                   onClick={() => setSelectedUserId(user.userId)}
//                   sx={{
//                     backgroundColor:
//                       selectedUserId === user.userId
//                         ? "rgba(0, 123, 255, 0.2)"
//                         : index % 2 === 0
//                         ? "rgba(0, 0, 0, 0.04)"
//                         : "white",
//                     "&:hover": {
//                       backgroundColor: "rgba(0, 0, 0, 0.1)",
//                     },
//                     cursor: "pointer",
//                   }}
//                 >
//                   <TableCell>{user.name}</TableCell>
//                   <TableCell>{user.email}</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="outlined"
//                       color="secondary"
//                       onClick={() => handleDelete(user.userId)}
//                       sx={{ ml: 1 }}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </Paper>

//       <PaginationProducts
//         pageNumber={pageNumber}
//         setPageNumber={setPageNumber}
//         totalPages={totalPages}
//       />
//     </Container>
//   );
// };

// export default UserList;

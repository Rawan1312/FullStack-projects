// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   CircularProgress,
//   Paper,
//   Avatar,
//   Grid,
//   Button,
//   TextField,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { getUserById, updateUser } from "../../services/UserService";
// //import NavBaruser from "../../layouts/header/NavBaruser";

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is authenticated by looking for a token
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signIn"); // Redirect to sign in if no token is found
//       return;
//     }

//     // Fetch user data
//     const fetchUser = async () => {
//       console.log("in the fetch");
//       const userID = localStorage.getItem("userID");
//       console.log("user ID", userID);
//       try {
//         if (userID) {
//           const userData = await getUserById(userID);
//           console.log("userData", userData);
//           setUser(userData.data);
//         }
//       } catch (err) {
//         setError("err.message");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = async () => {
//     try {
//       if (user) {
//         const updatedData = { name: user.name }; // Only updating name and address
//         await updateUser(user.userId, updatedData);
//         setUser(updatedData);
//         setIsEditing(false);
//       }
//     } catch (err) {
//       setError("Failed to update user profile");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

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
//     <Container maxWidth="md">
//       {/* <NavBaruser /> */}
//       <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Avatar
//             alt={user?.name}
//             src="/static/images/avatar/1.jpg" // Replace with user.imageUrl if available
//             sx={{ width: 100, height: 100, mb: 2 }}
//           />
//           {isEditing ? (
//             <>
//               <TextField
//                 label="Name"
//                 name="name"
//                 value={user?.name || ""}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />

//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 3 }}
//                 onClick={handleSaveClick}
//               >
//                 Save
//               </Button>
//             </>
//           ) : (
//             <>
//               <Typography variant="h4" gutterBottom>
//                 {user?.name}
//               </Typography>
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="subtitle1">
//                     <strong>Email:</strong> {user?.email}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="subtitle1">
//                     <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 3 }}
//                 onClick={handleEditClick}
//               >
//                 Edit Profile
//               </Button>
//             </>
//           )}
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default UserProfile;

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   CircularProgress,
//   Paper,
//   Avatar,
//   Grid,
//   Button,
//   TextField,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { getUserById, updateUser } from "../../services/UserService";

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is authenticated by looking for a token
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signIn"); // Redirect to sign in if no token is found
//       return;
//     }

//     // Fetch user data
//     const fetchUser = async () => {
//       const userID = localStorage.getItem("userID");
//       try {
//         if (userID) {
//           const userData = await getUserById(userID);
//           setUser(userData.data);
//         }
//       } catch (err) {
//         setError("Failed to fetch user data");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = async () => {
//     try {
//       if (user) {
//         const updatedData = {
//           name: user.name,
//           email: user.email,
//           password: user.password || "defaultPassword123", // Ensure a password is provided
//         };

//         await updateUser(user.userId, updatedData);
//         setIsEditing(false);
//       }
//     } catch (err) {
//       setError("Failed to update user profile");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

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
//     <Container maxWidth="md">
//       <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Avatar
//             alt={user?.name}
//             src="/static/images/avatar/1.jpg" // Replace with user.imageUrl if available
//             sx={{ width: 100, height: 100, mb: 2 }}
//           />
//           {isEditing ? (
//             <>
//               <TextField
//                 label="Name"
//                 name="name"
//                 value={user?.name || ""}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Email"
//                 name="email"
//                 value={user?.email || ""}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Password"
//                 name="password"
//                 type="password"
//                 value={user?.password || ""}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 3 }}
//                 onClick={handleSaveClick}
//               >
//                 Save
//               </Button>
//             </>
//           ) : (
//             <>
//               <Typography variant="h4" gutterBottom>
//                 {user?.name}
//               </Typography>
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="subtitle1">
//                     <strong>Email:</strong> {user?.email}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="subtitle1">
//                     <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 3 }}
//                 onClick={handleEditClick}
//               >
//                 Edit Profile
//               </Button>
//             </>
//           )}
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default UserProfile;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import {
//   Container,
//   CircularProgress,
//   Typography,
//   Paper,
//   Avatar,
//   TextField,
//   Button,
//   Divider,
//   Grid,
//   Box,
// } from "@mui/material"; // Added import
// import {
//   getUserById,
//   updateUser,
//   SignInUser,
// } from "../../services/UserService";
// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signIn");
//       return;
//     }

//     const fetchUser = async () => {
//       const userID = localStorage.getItem("userID");
//       try {
//         if (userID) {
//           const userData = await getUserById(userID);
//           setUser(userData.data);
//         }
//       } catch (err) {
//         setError("فشل في جلب بيانات المستخدم");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUser();
//   }, [navigate]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = async () => {
//     try {
//       if (user) {
//         const updatedData = {
//           name: user.name,
//           email: user.email,
//           password: user.password || "defaultPassword123",
//         };

//         await updateUser(user.userId, updatedData);
//         await SignInUser(user.email, user.password);

//         setIsEditing(false);
//       }
//     } catch (err) {
//       setError("فشل في تحديث بيانات المستخدم");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

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
//     <Container maxWidth="sm">
//       <Paper
//         elevation={10}
//         sx={{
//           padding: 4,
//           mt: 5,
//           borderRadius: "15px",
//           backgroundColor: "#F5F5F5", // لون الخلفية
//           boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Avatar
//             alt={user?.name}
//             src="/static/images/avatar/1.jpg"
//             sx={{
//               width: 120,
//               height: 120,
//               mb: 3,
//               border: "5px solid #fff",
//               boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
//             }}
//           />
//           {isEditing ? (
//             <>
//               <TextField
//                 label="Name"
//                 name="name"
//                 value={user?.name || ""}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 sx={{
//                   backgroundColor: "#fff",
//                   borderRadius: "8px",
//                 }}
//               />
//               <TextField
//                 label="Email"
//                 name="email"
//                 value={user?.email || ""}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 sx={{
//                   backgroundColor: "#fff",
//                   borderRadius: "8px",
//                 }}
//               />
//               <TextField
//                 label="Password"
//                 name="password"
//                 type="password"
//                 value={user?.password || ""}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 sx={{
//                   backgroundColor: "#fff",
//                   borderRadius: "8px",
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{
//                   mt: 3,
//                   width: "100%",
//                   borderRadius: "20px",
//                   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
//                   backgroundImage: "linear-gradient(45deg, #3f51b5, #2e3b8b)",
//                   "&:hover": {
//                     backgroundImage: "linear-gradient(45deg, #3f51b5, #2e3b8b)",
//                   },
//                 }}
//                 onClick={handleSaveClick}
//               >
//                 Save
//               </Button>
//             </>
//           ) : (
//             <>
//               <Typography
//                 variant="h4"
//                 gutterBottom
//                 sx={{ textAlign: "center", color: "#000" }}
//               >
//                 {user?.name}
//               </Typography>
//               <Divider sx={{ width: "100%", mb: 2, borderColor: "#ddd" }} />
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Typography variant="subtitle1" sx={{ color: "#000" }}>
//                     <strong>Email:</strong> {user?.email}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="subtitle1" sx={{ color: "#000" }}>
//                     <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 sx={{
//                   mt: 3,
//                   width: "100%",
//                   borderRadius: "20px",
//                   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
//                   backgroundImage: "linear-gradient(45deg, #3f51b5, #2e3b8b)",
//                   "&:hover": {
//                     backgroundImage: "linear-gradient(45deg, #3f51b5, #2e3b8b)",
//                   },
//                 }}
//                 onClick={handleEditClick}
//               >
//                 Edit Profile
//               </Button>
//             </>
//           )}
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Avatar,
  Grid,
  Button,
  TextField,
  Divider,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../services/UserService";
import EditIcon from "@mui/icons-material/Edit";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated by looking for a token
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signIn"); // Redirect to sign in if no token is found
      return;
    }

    // Fetch user data
    const fetchUser = async () => {
      const userID = localStorage.getItem("userID");
      try {
        if (userID) {
          const userData = await getUserById(userID);
          setUser(userData.data);
        }
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      if (user) {
        const updatedData = {
          name: user.name,
          email: user.email,
          password: user.password || "defaultPassword123", // Ensure a password is provided
        };

        await updateUser(user.userId, updatedData);
        setIsEditing(false);
      }
    } catch (err) {
      setError("Failed to update user profile");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  if (isLoading) {
    return (
      <Container>
        <CircularProgress sx={{ display: "block", margin: "2rem auto" }} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ padding: 4, mt: 4, borderRadius: "12px" }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt={user?.name}
            src="/static/images/avatar/1.jpg" // Replace with user.imageUrl if available
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              border: "4px solid #1976d2", // Blue border around avatar
            }}
          />
          {isEditing ? (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Edit Profile
              </Typography>
              <TextField
                label="Name"
                name="name"
                value={user?.name || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  },
                }}
              />
              <TextField
                label="Email"
                name="email"
                value={user?.email || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  },
                }}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={user?.password || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3, borderRadius: "8px" }}
                onClick={handleSaveClick}
              >
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                {user?.name}
              </Typography>
              <Divider sx={{ width: "100%", mb: 2 }} />
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Email:</strong> {user?.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">
                    <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
                  </Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3, borderRadius: "8px" }}
                onClick={handleEditClick}
                startIcon={<EditIcon />}
              >
                Edit Profile
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default UserProfile;

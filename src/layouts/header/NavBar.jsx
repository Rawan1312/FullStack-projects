// import React from "react";

// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const isSignedIn = localStorage.getItem("signInstatus") === "true";
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     localStorage.removeItem("signInstatus");
//     navigate("/signin");
//   };

//   return (
//     <AppBar position="fixed">
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           BOOKSHOP
//         </Typography>
//         <Button color="inherit" component={Link} to="/">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/about">
//           About
//         </Button>
//         {!isSignedIn && (
//           <Button color="inherit" component={Link} to="/signin">
//             SignIn
//           </Button>
//         )}
//         {!isSignedIn && (
//           <Button color="inherit" component={Link} to="/signup">
//             SignUp
//           </Button>
//         )}
//         {isSignedIn && (
//           <Button color="inherit" component={Link} to="/dashboard/admin">
//             Admin Dashboard
//           </Button>
//         )}
//         {isSignedIn && (
//           <Button color="inherit" component={Link} to="/dashboard/user">
//             User Dashboard
//           </Button>
//         )}
//         <Button color="inherit" component={Link} to="/Cart">
//           Cart
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;
import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavBaruser from "./NavBaruser";

const NavBar = () => {
  const isSignedIn = localStorage.getItem("signInstatus") === "true";
  const navigate = useNavigate();
  const getRole = localStorage.getItem("role");
  
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("signInstatus");
    navigate("/signin");
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#ddd0c8" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: "#323232" }}>
          Luno
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{ color: "#323232" }}
        >
          Home
        </Button>
        <Link to="/user/profile">
        Profile
        </Link>
        {!isSignedIn && (
          <Button
            color="inherit"
            component={Link}
            to="/signin"
            style={{ color: "#323232" }}
          >
            SignIn
          </Button>
        )}
        {!isSignedIn && (
          <Button
            color="inherit"
            component={Link}
            to="/signup"
            style={{ color: "#323232" }}
          >
            SignUp
          </Button>
        )}
        {isSignedIn && getRole === "Admin" && (
          <Link to="/admin/dashboard">Admin Dashboard</Link>
        )}

        {isSignedIn && getRole === "User" && (
          // <NavBaruser/>
          <>
            {console.log("in navbar")}
            {/* <Link to="/user/profile"></Link> */}
            <NavBaruser />
          </>
        )}
        <Button to="/" onClick={handleSignOut}>
          SignOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

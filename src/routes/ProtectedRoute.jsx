// import React from "react";
// import { Navigate, Outlet } from "react-router-dom"; // Importing Navigate and Outlet components from react-router-dom

// // import useAuthContext from "../hooks/UseAuthContext"; // Importing a custom hook to get the login state

// const ProtectedRoute = () => {
//   // Using useAuthContext to get the login status (isLoggedIn) from context
//   const { isLoggedIn } = useAuthContext();

//   // If the user is logged in, display the protected content using Outlet
//   // Outlet is the placeholder where nested routes (protected content) will be displayed
//   // If the user is not logged in, redirect them to the Sign In page
//   return isLoggedIn ? (
//     <Outlet /> // If the user is logged in, render the protected content
//   ) : (
//     // If the user is not logged in, redirect them to the "Sign In" page
//     // "replace" ensures the current page is not added to the history stack
//     <Navigate to="/signin" replace />
//   );
// };

// export default ProtectedRoute; // Exporting ProtectedRoute to be used in other parts of the app

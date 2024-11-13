// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "../pages/Home";
// import Layout from "../layouts/Layout";
// import About from "../pages/About";
// import Products from "../components/products/Products";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../components/Cart/Cart";
// import Errorpage from "../pages/Error";
// import SignUp from "../pages/SignUp";
// import SignIn from "../pages/SignIn";
// import ProductList from "../pages/ProductList";
// import ProtectedRoute from "./ProtectedRoute";
// import UserProfile from "../components/DashboardUser/UserProfile";
// import UserDashboard from "../components/DashboardUser/UserDashboard";
// import AdminDashboard from "../components/DashboardAdmin/AdminDashboard";
// import AdminManageUsers from "../components/DashboardAdmin/AdminManageUsers";

// const Index = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "/", element: <Home /> },
//         { path: "/about", element: <About /> },
//         { path: "/products", element: <Products /> },
//         { path: "/products/:id", element: <ProductDetails /> },
//         { path: "/cart", element: <Cart /> },
//         { path: "/signin", element: <SignIn /> },
//         { path: "/signup", element: <SignUp /> },
//         { path: "/productList", element: <ProductList /> },
//       ],
//     },
//     {
//       path: "/dashboard",
//       element: <ProtectedRoute />,
//       children: [
//         {
//           path: "user",
//           element: <UserDashboard />,
//           children: [{ path: "/profile", element: <UserProfile /> }],
//         },
//         {
//           path: "admin",
//           children: [
//             { path: "/admin", element: <AdminDashboard /> },
//             { path: "manage-users", element: <AdminManageUsers /> },
//           ],
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default Index;
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AdminDashboard from "../components/dashboardAdmin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "../components/dashboardUser/UserProfile";
import Cart from "../components/Cart/Cart";
import ProductList from "../pages/ProductList";
// import AdminManageUsers from "../components/dashboardAdmin/AdminManageUsers";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/products/:id", element: <ProductDetails /> },
        { path: "/products", element: <ProductList /> },
        { path: "cart", element: <Cart /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },

        {
          path: "/user",
          element: <ProtectedRoute registerrole="User" />,
          children: [{ path: "profile", element: <UserProfile /> }],
        },
        {
          path: "/admin",
          element: <ProtectedRoute registerrole="Admin" />,
          children: [
            { path: "dashboard", element: <AdminDashboard /> },
            // { path: "users", element: <AdminManageUsers /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

// {
//   path: "/dashboard",
//   children: [
//     {
//       path: "/dashboard",
//       element: <ProtectedRoute registerrole="User" />,
//       children: [
//         { path: "", element: <UserDashboard /> },
//         { path: "profile", element: <UserProfile /> },
//         { path: "home", element: <Home /> },
//         { path: "about", element: <About /> },
//         { path: "products/:id", element: <ProductDetails /> },
//         // { path: "cart", element: <Cart /> },
//       ],
//     },

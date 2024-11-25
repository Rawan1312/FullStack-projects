import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import ProductDetails from "../pages/ProductDetails";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "../components/dashboardUser/UserProfile";
import Cart from "../components/Cart/Cart";
import ProductPage from "../pages/ProductPage";
import AboutUs from "../pages/About";
import UserDashboard from "../components/dashboardUser/Dashboard.jsx";
import AdminDashboard from "../components/Admindashboard/AdminDashboard";
import AdminManageProducts from "../components/Admindashboard/AdminManageProducts";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/products/:id", element: <ProductDetails /> },
        { path: "/products", element: <ProductPage /> },
        { path: "cart", element: <Cart /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },

        // {
        //   path: "/user",
        //   element: <ProtectedRoute registerrole="User" />,
        //   children: [{ path: "profile", element: <UserProfile /> }],
        // },
        {
          path: "user",
          element: <ProtectedRoute registerrole="User" />, // حمايتنا للمسار
          children: [
            { path: "profile", element: <UserProfile /> },
            { path: "dashboard", element: <UserDashboard /> },
          ],
        },
        {
          path: "admin",
          element: <ProtectedRoute registerrole="Admin" />,
          children: [
            { path: "dashboard", element: <AdminDashboard /> },
            { path: "adminproduct", element: <AdminManageProducts /> }, // تأكد من تغيير "adminproduct" إلى "products"
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "../components/dashboardUser/UserProfile";
import Cart from "../components/Cart/Cart";
import ProductPage from "../pages/ProductPage";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/products/:id", element: <ProductDetails /> },
        { path: "/products", element: <ProductPage /> },
        { path: "cart", element: <Cart /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },

        {
          path: "/user",
          element: <ProtectedRoute registerrole="User" />,
          children: [{ path: "profile", element: <UserProfile /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

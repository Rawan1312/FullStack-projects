import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Products from "../components/products/Products";
import ProductDetails from "../pages/ProductDetails";

const Index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Index;

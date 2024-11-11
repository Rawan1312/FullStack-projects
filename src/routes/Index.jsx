// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "../pages/Home";
// import Layout from "../layouts/Layout";
// import About from "../pages/About";

// import Products from "../components/products/Products";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../components/Cart/Cart";
// import Errorpage from "../pages/Error";
// import SignUp from "../components/users/SignUp";
// import SignIn from "../components/users/SignIn";

// // import Profile from "../components/singin/Profile";

// const Index = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       errorElement: <Errorpage />,
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/about",
//           element: <About />,
//         },
//         {
//           path: "/products",
//           element: <Products />,
//         },
//         {
//           path: "/products/:id",
//           element: <ProductDetails />,
//         },
//         {
//           path: "/Cart",
//           element: <Cart />,
//         },
//         {
//           path: "/signin",
//           element: <SignIn />,
//         },
//         {
//           path: "/signup",
//           element: <SignUp />,
//         },
//         // {
//         //   path: "/profile",
//         //   element: <Profile />,
//         // },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default Index;
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "../pages/Home";
// import Layout from "../layouts/Layout";
// import About from "../pages/About";
// import Products from "../components/products/Products";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../components/Cart/Cart";
// import ProtectedRoute from "../routes/ProtectedRoute";

// const Index = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />, // Main layout that wraps all the pages
//       children: [
//         {
//           path: "/",
//           element: <Home />, // Home page (accessible to all)
//         },
//         {
//           path: "/about",
//           element: <About />, // About page (accessible to all)
//         },
//         {
//           path: "/products",
//           element: <Products />, // Products page (accessible to all)
//         },
//         {
//           path: "/products/:id",
//           element: <ProductDetails />, // Product details page (accessible to all)
//         },
//         {
//           path: "/Cart",
//           // Protect the Cart route with the ProtectedRoute
//           element: <ProtectedRoute />,
//           children: [
//             {
//               path: "/Cart",
//               element: <Cart />, // Cart page (accessible only to logged-in users)
//             },
//           ],
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />; // Provide the router to the app
// };

// export default Index;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Products from "../components/products/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../components/Cart/Cart";
import Errorpage from "../pages/Error";
import SignUp from "../components/users/SignUp";
import SignIn from "../components/users/SignIn";
import ProductList from "../pages/ProductList";

const Index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Errorpage />,
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
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/productList",
          element: <ProductList />,
        },
      ],
    },
    {
      path: "/hometest",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Index;

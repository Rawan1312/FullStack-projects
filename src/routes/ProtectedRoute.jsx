import React from "react";
import { Navigate, Outlet } from "react-router-dom";
;

export const ProtectedRoute = ({ registerrole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token || role != registerrole) {
    return <Navigate to="/signIn" replace />;
  }
  return <Outlet replace />;
};

export default ProtectedRoute;

//first is call api
//  and check is login or not
//if login is going in outlet{router is showing the website}
//if not login well going in page signIn

import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom"; // الربط بين المسارات
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";

const AdminSidebar = () => {
  return (
    <Box
      sx={{
        position: "fixed", // تثبيت الشريط الجانبي
        left: 0,
        top: 64, // ارتفاع الـ Navbar
        height: "calc(100vh - 64px)", // اجعل ارتفاع الشريط مناسبًا
        width: 250, // عرض الشريط
        borderRight: "1px solid #ddd",
        backgroundColor: "#f4f4f4",
        padding: 2,
      }}
    >
      <List>
        {/* رابط صفحة المنتجات مع المسار الكامل */}
        <ListItemButton component={Link} to="/admin/adminproduct">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default AdminSidebar;

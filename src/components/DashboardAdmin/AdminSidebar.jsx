import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        borderRight: "1px solid #ddd",
        height: "100vh",
        padding: 2,
      }}
    >
      <List>
        <ListItemButton>
          <ListItemButton
            component={Link}
            to="/dashboard/admin"
          ></ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="products">
          <ListItemIcon>
            {/* <ListAltIcon /> */}
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default AdminSidebar;

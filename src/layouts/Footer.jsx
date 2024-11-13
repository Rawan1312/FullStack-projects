import React from "react";

import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import "./Footerstyle.css";

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        {"© "}
        made in {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;

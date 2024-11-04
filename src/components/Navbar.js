import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleDrawer }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={toggleDrawer}>
          Menu
        </Button>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React library
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

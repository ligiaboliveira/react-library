import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={toggleDrawer}>
          Menu
        </Button>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React library
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

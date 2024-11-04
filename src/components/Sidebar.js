import React from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ open, toggleDrawer }) => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button onClick={toggleDrawer} component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={toggleDrawer} component={Link} to="/">
          <ListItemText primary="Livros" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

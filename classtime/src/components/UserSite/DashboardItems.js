import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Schedule from "@material-ui/icons/Schedule";
import People from "@material-ui/icons/People";

export const UserDashboardItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon style={{ color: "#ffffff" }}>
        <Schedule />
      </ListItemIcon>
      <ListItemText primary="Time Table" style={{ color: "#ffffff" }} />
    </ListItem>
    <ListItem button component={Link} to="/AboutUs">
      <ListItemIcon style={{ color: "#ffffff" }}>
        <People />
      </ListItemIcon>
      <ListItemText primary="About Us" style={{ color: "#ffffff" }} />
    </ListItem>
  </div>
);

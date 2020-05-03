import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Schedule from "@material-ui/icons/Schedule";
import People from "@material-ui/icons/People";

export const UserDashboardItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Schedule />
      </ListItemIcon>
      <ListItemText primary="Time Table" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
  </div>
);

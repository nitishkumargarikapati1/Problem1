import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Button from '@mui/material/Button'; 
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from '@mui/icons-material/Inbox';
import { sections } from "./Data.js";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideDrawer({ children }) {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>ACME</ListItem>
      </List>
      <Divider />
      <List>
        {sections.map((text, index) => (
          <ListItem button key={text.title}>
            <ListItemIcon>
              {index === 0 ? <InboxIcon /> : ""}
              {index === 1 ?  <HomeIcon></HomeIcon>: ""}
              {index === 2 ? <DashboardIcon></DashboardIcon> : ""}
              {index === 3 ? <ProductionQuantityLimitsIcon/>: ""}
              {index === 4 ? <AdminPanelSettingsIcon/>: ""}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div >
      {/* {["left", "right", "top", "bottom"].map((anchor) => ( */}
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{children}</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
      {/* ))} */}
    </div>
  );
}
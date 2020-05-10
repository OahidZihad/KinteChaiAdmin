import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import {
  Home,
  Category,
  Phonelink,
  ShoppingCart,
  Settings,
  PowerSettingsNew,
} from "@material-ui/icons";
import logo from "../media/logo.png";
import HomeFragment from "../Fragments/HomeFragment";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography style={{ marginTop: "10px" }} variant="h6" noWrap>
            <img
              src={logo}
              height="50px"
              style={{ marginBottom: "10px" }}
              align="center"
              alt="50px"
            />
            <Typography
              style={{ marginLeft: "25px" }}
              variant="h4"
              display="inline"
              align="center"
              color="textSecondary"
            >
              Kinte Chai Admin
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Phonelink />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <PowerSettingsNew />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <HomeFragment />
      </main>
    </div>
  );
}

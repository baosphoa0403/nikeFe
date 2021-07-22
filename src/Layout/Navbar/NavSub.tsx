import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "transparent",
    color: "#000",
    boxShadow: "0px 0px 0px 0px",
  },
  toolbar: {
    minHeight: 36,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 20,
  },
  navListFeature: {
    padding: "0 12px",
    textDecoration: "none",
    color: "black",
    fontSize: 13,
    "&:hover": {
      color: "grey",
    },
    cursor: "pointer",
  },
}));

export default function NavSub() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <div className={classes.toolbar}>
        <span
          className={classes.navListFeature}
          style={{ borderRight: "1px solid #000" }}
        >
          Sign In
        </span>
        <span className={classes.navListFeature}>Sign Up</span>
      </div>
    </AppBar>
  );
}

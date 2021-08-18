import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import EcoIcon from "@material-ui/icons/Eco";
import { useHistory } from "react-router-dom";
import NavFeature from "./NavFeature";
import { PATH_NAME } from "../../Config";
import NavMenu from "./NavMenu/NavMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "transparent",
    color: "#000",
    boxShadow: "0px 0px 0px 0px",
  },
}));

export default function NavMain() {
  const classes = useStyles();
  let history = useHistory();
  const handleBackToHome = () => {
    history.push(PATH_NAME.ROOT);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <EcoIcon onClick={handleBackToHome} />
          <NavMenu />
          <NavFeature />
        </Toolbar>
      </AppBar>
    </div>
  );
}

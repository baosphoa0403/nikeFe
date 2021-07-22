import { alpha, IconButton, InputBase, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  navFeature: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: 36,
  },
  search: {
    display: "flex",
    padding: "4px 4px",
    alignItems: "center",
    borderRadius: 30,
    width: 155,
    marginRight: 20,
    "&:hover": {
      backgroundColor: "#dee1e3",
    },
  },
  searchIcon: {
    padding: 6,
    height: 25,
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#dee1e3",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "65%",
  },
  iconCart: {
    position: "relative",
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: "#000",
    padding: 2,
  },
  sumQuantity: {
    position: "absolute",
    right: -3,
    top: 0,
    fontSize: 13,
  },
}));

export default function NavFeature() {
  const classes = useStyles();
  return (
    <div className={classes.navFeature}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search"
          className={classes.input}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <IconButton className={classes.iconCart}>
        <ShoppingCartIcon />
      </IconButton>
      <span className={classes.sumQuantity}>5</span>
    </div>
  );
}

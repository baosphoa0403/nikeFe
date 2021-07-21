import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./Style";
import EcoIcon from "@material-ui/icons/Eco";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <EcoIcon />
          <Typography className={classes.menuList}>
            <Link href="#" className={classes.menuItem} underline="none">
              Men
            </Link>
            <Link href="#" className={classes.menuItem} underline="none">
              Women
            </Link>
            <Link href="#" className={classes.menuItem} underline="none">
              Kids
            </Link>
            <Link href="#" className={classes.menuItem} underline="none">
              Customise
            </Link>
            <Link href="#" className={classes.menuItem} underline="none">
              Sale
            </Link>
            <Link href="#" className={classes.menuItem} underline="none">
              SNKRS
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

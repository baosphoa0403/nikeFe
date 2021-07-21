import { alpha, createStyles, makeStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    search: {
      position: "relative",
      borderRadius: "50px",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: "#e5e5e5",
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    menuList: {
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      margin: "0 auto",
    },
    menuItem: {
      color: "#000",
      textDecoration: "none",
    },
  })
);

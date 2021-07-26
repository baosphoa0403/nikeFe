import { Grid, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  listProductMainContainer: {
    width: "100%",
    padding: "0 40px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  productLink: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 16,
  },
  productImage: {
    width: "100%",
    height: "300px",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
      width: "100%",
    },
  },
  productDetailColorway: {
    lineHeight: 1.75,
    display: "block",
  },
  message: {
    paddingTop: 12,
    color: "#fa5400",
  },
  productType: {
    color: "#757575",
  },
  price: {
    paddingTop: 10,
  },
}));

export default function ListProducts() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.listProductMainContainer}>
      <Grid item xs={6} md={4}>
        <span className={classes.productLink}>
          <img
            className={classes.productImage}
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8c3ec471-7aa6-4dbb-9e8f-f0ac2e72337d/zoomx-vaporfly-next-2-racing-shoe-MWJvN7.png"
          />
          <div className={classes.message}></div>
          <div className={classes.productDetailColorway}>
            <div>Nike ZoomX Vaporfly NEXT</div>
          </div>
          <div className={classes.price}>$255</div>
        </span>
      </Grid>
    </Grid>
  );
}

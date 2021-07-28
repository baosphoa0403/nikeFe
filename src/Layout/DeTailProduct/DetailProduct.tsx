import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Images from "./Images";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 44,
    marginBottom: 44,
    width: "100%",
  },
}));

function DetailProduct() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item sm={12} md={8}>
        <Images />
      </Grid>

      {/* <Grid item sm={12} md={4}>
                    <ProductMain detailProduct={detailProduct} getIndexImg={getIndexImg} indexPress={index} />
                    <ProductMoreDetail />
                  </Grid> */}
    </Grid>
  );
}

export default DetailProduct;

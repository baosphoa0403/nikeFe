import { Grid, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import ProductComponent from "../../Component/ProductComponent";

const useStyles = makeStyles((theme) => ({
  listProductMainContainer: {
    width: "100%",
    padding: "0 40px 0 0",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  productLinkGTColor: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 16,
    "&:hover $productDetailColorway": {
      display: "none",
    },
    "&:hover $collectImageSmall": {
      display: "block",
    },
  },
  collectImageSmall: {
    display: "none",
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
    color: "rgb(17, 17, 17)",
    fontSize: 14,
    lineHeight: 1.75,
    fontWeight: 500,
    display: "block",
  },
  colorShoe: {
    color: "rgb(117, 117, 117)",
    fontWeight: 400,
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
  imageSmall: {
    height: 40,
    margin: "0 5px",
  },
}));
interface IProps {
  products: [];
}
export default function ListProducts({ products }: IProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.listProductMainContainer}>
      {products.map((product) => {
        return (
          <Grid item xs={6} md={4}>
            <ProductComponent product={product} />
          </Grid>
        );
      })}
    </Grid>
    // <Grid container spacing={2} className={classes.listProductMainContainer}>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLink}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.message}></div>
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>1 Colour</div>
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLink}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.message}></div>
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>1 Colour</div>
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLink}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.message}></div>
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>1 Colour</div>
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLink}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.message}></div>
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>1 Colour</div>
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLink}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.message}></div>
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>1 Colour</div>
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLink}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.message}></div>
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>1 Colour</div>
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLink}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.message}></div>
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>1 Colour</div>
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <span className={classes.productLinkGTColor}>
    //       <img
    //         className={classes.productImage}
    //         src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5f32941-5edb-4d3e-beab-2383ce1744db/air-force-1-shadow-shoe-klCJXd.jpg"
    //       />
    //       <div className={classes.productDetailColorway}>
    //         <div>Nike ZoomX Vaporfly NEXT</div>
    //         <div className={classes.colorShoe}>2 Colour</div>
    //       </div>
    //       <div className={classes.collectImageSmall}>
    //         <img
    //           src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a7f862af-2f8b-4ba1-a71a-447e5ef9191b/custom-nike-mercurial-superfly-8-elite-by-you.png"
    //           alt=""
    //           className={classes.imageSmall}
    //         />
    //         <img
    //           src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/09e7a53e-b8aa-4025-b2f0-2b46493c982c/custom-nike-mercurial-superfly-8-elite-by-you.png"
    //           alt=""
    //           className={classes.imageSmall}
    //         />
    //       </div>
    //       <div className={classes.price}>$255</div>
    //     </span>
    //   </Grid>
    // </Grid>
  );
}

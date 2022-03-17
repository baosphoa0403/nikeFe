import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    // backgroundPosition: "center center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
  },
  // media: {
  //   height: 760,
  // },
}));

export default function SyncSlider(props) {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // variableWidth: true,
  };

  
  return (
    <div>
      <Container maxWidth="xl">
      <Grid item xs={12}>
       <Slider {...settings}>
          {props.carouselImg.map(item => {
            return (
              <React.Fragment>
                <Card className={classes.image}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image={item}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
              </React.Fragment>
            );
          })}
        </Slider>
       </Grid>
        
      </Container>
    </div>
  );
}
import React, { Fragment } from "react";
import Counter from "../Component/Counter";
import Carousel from "./Carousel/Carousel";
import SyncSlider from "./Carousel_1/carousel_1";
import { setCart } from "./Cart/module/cartReducer";
import Footer from "./Footer/Footer";
import ShowProductsAndFilter from "./ListProducts/ShowProductsAndFilter";
import NavBar from "./Navbar/Navbar";

// import NavBar from "./Navbar/NavBar";

export default function MainLayout() {
  return (
    <Fragment>
      {/* <Carousel /> */}
      <SyncSlider carouselImg={[
    "https://static.nike.com/a/images/f_auto/dpr_2.0/w_1792,c_limit/5d61a8a7-21bd-4850-8ef7-0947c58dfc19/nike-kids.png",
    "https://static.nike.com/a/images/f_auto/dpr_1.0/w_1229,c_limit/e04d1808-9792-46ba-bcbd-3b2302a40b31/nike-by-you-custom-shoes.jpg",
  ]} />
      <ShowProductsAndFilter />
      {/* <Counter /> */}
    </Fragment>
  );
}

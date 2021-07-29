import React, { Fragment } from "react";
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer/Footer";
import ShowProductsAndFilter from "./ListProducts/ShowProductsAndFilter";
import NavBar from "./Navbar/Navbar";

// import NavBar from "./Navbar/NavBar";

export default function MainLayout() {
  return (
    <Fragment>
      <NavBar />
      <Carousel />
      <ShowProductsAndFilter />
      <Footer />
    </Fragment>
  );
}

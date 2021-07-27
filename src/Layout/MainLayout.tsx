import React, { Fragment } from "react";
import Carousel from "./Carousel/Carousel";
import ShowProductsAndFilter from "./ListProducts/ShowProductsAndFilter";
import NavBar from "./Navbar/NavBar";

export default function MainLayout() {
  return (
    <Fragment>
      <NavBar />
      <Carousel />
      <ShowProductsAndFilter />
    </Fragment>
  );
}

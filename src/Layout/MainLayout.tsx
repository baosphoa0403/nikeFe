import React from "react";
import Carousel from "./Carousel/Carousel";
import NavBar from "./Navbar/NavBar";
import ListProducts from "./ListProducts/ListProducts";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <ListProducts />
    </div>
  );
}

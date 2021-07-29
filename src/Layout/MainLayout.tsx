import React from "react";
import Carousel from "./Carousel/Carousel";
import NavBar from "./Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Carousel />
    </div>
  );
}

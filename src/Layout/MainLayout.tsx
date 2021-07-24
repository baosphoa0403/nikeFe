import React from "react";
import Carousel from "./Carousel/Carousel";
import NavBar from "./Navbar/Navbar";
// import NavBar from "./Navbar/NavBar";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Carousel />
    </div>
  );
}

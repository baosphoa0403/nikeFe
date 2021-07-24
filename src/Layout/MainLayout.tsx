import React from "react";
import Carousel from "./Carousel/Carousel";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Footer />
    </div>
  );
}

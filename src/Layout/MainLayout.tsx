import React, { Fragment } from 'react';
import Counter from '../Component/Counter';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import ShowProductsAndFilter from './ListProducts/ShowProductsAndFilter';
import NavBar from './Navbar/Navbar';

// import NavBar from "./Navbar/NavBar";

export default function MainLayout() {
  React.useEffect(() => {
    console.log(localStorage.getItem('cart'));
    if (localStorage.getItem('cart') !== null) {
      const a: any = localStorage.getItem('cart');
      // console.log(JSON.parse(a));
    }
  }, []);
  return (
    <Fragment>
      {/* <Carousel /> */}
      <ShowProductsAndFilter />
      {/* <Counter /> */}
    </Fragment>
  );
}

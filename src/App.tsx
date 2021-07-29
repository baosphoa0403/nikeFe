import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import CartPage from "./Pages/Cart/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

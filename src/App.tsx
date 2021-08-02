import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import DetailPage from "./Pages/Detail/DetailPage";
import CartPage from "./Pages/Cart/CartPage";
import AdminPage from "./Pages/Admin/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detailProduct/:id">
          <DetailPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

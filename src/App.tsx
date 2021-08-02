import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import DetailPage from "./Pages/Detail/DetailPage";
import CartPage from "./Pages/Cart/CartPage";
import UserOrderPage from "./Pages/User/UserOrderPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
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
        <Route path="/user/order">
          <UserOrderPage />
        </Route>
        <Route path="/user/profile">
          <UserProfilePage />
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

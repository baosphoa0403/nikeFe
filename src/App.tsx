import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import DetailPage from "./Pages/Detail/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detailProduct/:id">
          <DetailPage />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

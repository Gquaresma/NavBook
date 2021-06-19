import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import Nav from "../components/Nav";
import Register from "../components/Register";
import BookDetail from "../components/BookDetail";
import PurchaseList from "../components/PurchaseList";
import Purchase from "../components/Purchase";
import Update from "../components/Update";

function Routes() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/purchaseList" component={PurchaseList} />
          <Route path="/:id/purchase" exact component={Purchase} />
          <Route path="/:id/update" exact component={Update} />
          <Route path="/:id" component={BookDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;

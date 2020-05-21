import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact={true} component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Router>
);

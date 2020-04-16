import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Home from "./core/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />>
      </Switch>
    </Router>
  );
};

export default Routes;

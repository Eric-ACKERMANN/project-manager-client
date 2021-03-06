import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home.jsx"

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
      </Switch>
    </div>
  );
};

export default MainRouter;

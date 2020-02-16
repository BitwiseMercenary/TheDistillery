import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages";
import { Route as RoutePath } from "./constants";

function App() {
  return (
    <BrowserRouter basename={RoutePath.ROOT}>
      <div className="App">
        <Switch>
          <Route exact path={RoutePath.HOME}>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

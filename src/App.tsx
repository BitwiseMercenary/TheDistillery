import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages";
import { Route as RoutePath } from "./constants";
import { Resume } from "./pages/Resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={RoutePath.HOME}>
            <Home />
          </Route>
          <Route exact path={RoutePath.RESUME}>
            <Resume />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

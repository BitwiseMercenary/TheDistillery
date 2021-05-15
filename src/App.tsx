import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import "./App.css";
import { Home, HomeV2 } from "./web";
import { Route as RoutePath } from "./constants";
import { Resume } from "./web/Resume/Resume";

function App() {
    return (
        /* GitHub Pages doesn’t support routers that use the HTML5 pushState history API under the hood */
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path={RoutePath.HOME}>
                        <Home />
                    </Route>
                    <Route exact path={RoutePath.HOMEV2}>
                        <HomeV2 />
                    </Route>
                    <Route exact path={RoutePath.RESUME}>
                        <Resume />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;

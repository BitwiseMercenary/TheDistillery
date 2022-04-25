import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./web";
import { Route as RoutePath } from "./constants";

function App() {
    return (
        /* GitHub Pages doesn’t support routers that use the HTML5 pushState history API under the hood */
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path={RoutePath.HOME} element={<Home />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

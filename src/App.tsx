import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import { Home, Resume } from "@views/index";
import { Route as RoutePath } from "./constants";

function App() {
  return (
    /* 404.html in dist mirrors index.html so GitHub Pages serves the SPA shell on direct hits */
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.RESUME} element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

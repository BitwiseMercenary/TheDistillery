import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import { Home, Resume } from "@views/index";
import { Route as RoutePath } from "./constants";

function App() {
  return (
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

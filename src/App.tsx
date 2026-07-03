import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "@views/index";
import { Route as RoutePath } from "./constants";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;

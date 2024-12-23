import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Landingpage from "./component/landing_page";
import Navbar from "./component/Navbar";

const App = () => {
  const location = useLocation();

  const noNavBarPaths = ["/login", "/registar"];

  return (
    <div className="container">
      {!noNavBarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </div>
  );
};

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

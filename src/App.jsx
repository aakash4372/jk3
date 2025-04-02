import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveNavbar from "./Pages/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./Pages/main/Section";

const App = () => {
  return (
    <Router>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Section/>} />
        <Route path="/services" element={<></>} />
        <Route path="/contact" element={<></>} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveNavbar from "./Pages/Navbar";
import ScrollToTop from "./Pages/ScrollToTop"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./Pages/main/Section";
import Footer from "./Pages/Footer";
import Servicesection from "./Pages/Service";
import ContactForm from "./Pages/Contactform";
import Cursor from "./Pages/Cursor";
import BackToTop from "./Pages/BackToTop"; // 👈 import here
import "./App.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Cursor />
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/services" element={<Servicesection />} />
        <Route path="/equiry" element={<ContactForm />} />
      </Routes>
      <Footer />
      <BackToTop /> 
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/gallary" element={ <Gallary />} />
        <Route path="/login" element={<h1 className="text-center mt-10">Login Page</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;

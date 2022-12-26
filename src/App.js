import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./components/navlinks/Home";
import Featured from "./components/featured/Featured";
import Loan from "./components/navlinks/Loan";
import About from "./components/navlinks/About";
import Contact from "./components/navlinks/Contact";
import Login from "./components/navlinks/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Featured />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

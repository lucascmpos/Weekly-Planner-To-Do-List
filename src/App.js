import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Welcome from "./components/pages/welcome";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";

import Container from "./components/Container";
import Monday from "./components/days/monday";
import Tuesday from "./components/days/tuesday";
import Wednesday from "./components/days/wednesday";
import Thursday from "./components/days/thursday";
import Friday from "./components/days/friday";
import Saturday from "./components/days/saturday";
import Sunday from "./components/days/sunday";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monday" element={<Monday />} />
        <Route path="/tuesday" element={<Tuesday />} />
        <Route path="/wednesday" element={<Wednesday />} />
        <Route path="/thursday" element={<Thursday />} />
        <Route path="/friday" element={<Friday />} />
        <Route path="/saturday" element={<Saturday />} />
        <Route path="/sunday" element={<Sunday />} />
      </Routes>
    </Router>
  );
}

export default App;

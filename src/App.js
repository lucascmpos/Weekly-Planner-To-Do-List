import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import './App.css';
import Welcome from './components/pages/welcome';
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Dashboard />
    </Router>
  );
}

export default App;

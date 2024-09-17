import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Scan from './components/Scan';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import About from './components/About';
import ScanAtDashboard from './components/ScanAtDashboard';
import ScanResult from './components/ScanResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/scan" element={<ScanAtDashboard />} />
        <Route path="/dashboard/scan-result" element={<ScanResult name="John Doe" medicines={[['Med1', '1x'], ['Med2', '2x']]} output={{ key1: 'value1', key2: 'value2' }} pic="prescription.jpg" />} />
      </Routes>
    </Router>
  );
}

export default App;

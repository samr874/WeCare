import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/HomePage/Navbar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Login from './Pages/Login';
import GridContainer from './Pages/SignUpAsHealthcare';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/loginAsHealthcare" element={<GridContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

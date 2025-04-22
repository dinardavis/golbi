import React from 'react'
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/css/nav_style.css"
import "./assets/css/buttons.css"
import "./assets/css/misc_animations.css"
import "./assets/css/doodles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/Navbar'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

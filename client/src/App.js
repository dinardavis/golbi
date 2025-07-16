import React from "react";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/css/nav_style.css";
import "./assets/css/buttons.css";
import "./assets/css/toggle_slider.css";
import "./assets/css/misc_animations.css";
import "./assets/css/doodles.css";
import "./assets/css/starter-site.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import StarterSite from "./pages/StarterSite";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";
import mainLogo from "../src/assets/imgs/golbi_logo.png";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main id="top" className="main-container">
        <Link to="/" className="intro-logo-link">
          <div className="intro-logo-container">
            <img className="intro-logo" src={mainLogo} alt="Golbi Logo" />
            <div className="intro-logo-arch-right"></div>
            <div className="intro-logo-arch-left"></div>
          </div>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/starter-site" element={<StarterSite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

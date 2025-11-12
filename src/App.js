import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./components/Home/HeroPage.js";
import NavBar from "./components/Home/NavBar.js";
import Menu from "./components/MenuCards/Menu.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;

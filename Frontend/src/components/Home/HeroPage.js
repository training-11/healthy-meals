import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./HeroPage.css";
import Menu from "../MenuCards/Menu";

const images = [
  "/images/healthy-eating1.jpg",
  "/images/healthy-eating2.jpg",
  "/images/healthy-eating3.jpeg",
  "/images/healthy-eating4.jpeg",
];

function HeroPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="logo">CALO</div>

        {/* Direct icon (no div wrapper) */}
        <FaBars
          className="hamburger"
          size={28}
          onClick={() => navigate("/NavBar")}
        />
      </nav>

      {/* ✅ Hero content */}
      <div className="hero-content">
        <div className="left-section">
          <h1>
            Healthy Meals <br /> To Lose Weight
          </h1>
          <p>
            Designed by nutritionists, crafted by chefs, personalized to your
            goals. Fresh daily. Just heat and eat.
          </p>
          <button className="see-plans">See Plans</button>
          <div className="stats">
            290K happy customers worldwide · 19M meals delivered
          </div>
        </div>

        <div className="right-section">
          <img
            src={images[currentImage]}
            alt="Healthy Meal"
            className="meal-image"
          />
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default HeroPage;

import React from "react";
import "./NavBar.css";
import {
  FaTimes,
  FaHome,
  FaBoxOpen,
  FaUtensils,
  FaComments,
  FaCoffee,
  FaTruck,
  FaBlog,
  FaUserFriends,
  FaCalendarAlt,
  FaHandsHelping,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Homepage", icon: <FaHome /> },
    { name: "Plans & Packages", icon: <FaBoxOpen /> },
    { name: "Menu", icon: <FaUtensils /> },
    { name: "Consultations", icon: <FaComments /> },
    { name: "The Cafe", icon: <FaCoffee /> },
    { name: "Large Orders", icon: <FaTruck /> },
    { name: "Blog", icon: <FaBlog /> },
    { name: "Calo Affiliate", icon: <FaUserFriends /> },
    { name: "Events", icon: <FaCalendarAlt /> },
    { name: "CSR & Community", icon: <FaHandsHelping /> },
    { name: "Food Safety", icon: <FaShieldAlt /> },
    { name: "Contact Us", icon: <FaEnvelope /> },
  ];

  return (
    <div className="menu-overlay">
      {/* Left Image Section */}
      <div className="menu-left">
        <img
          src="/images/healthy-eating1.jpg"
          alt="Healthy Meal"
          className="menu-bg-image"
        />
        <div className="download-section">
          <button className="join-btn">✨ Join us</button>
          <h2>Download app</h2>
          <div className="store-buttons">
            <img src="/images/appstore.png" alt="App Store" />
            <img src="/images/googleplay.png" alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Right Menu Section */}
      <div className="menu-right">
        <div className="close-btn" onClick={() => navigate("/")}>
          <FaTimes size={24} />
        </div>

        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <span className="menu-text">{item.name}</span>
              <span className="menu-icon">{item.icon}</span>
            </li>
          ))}
        </ul>

        <div className="language-option">🌐 Language / اللغة</div>
      </div>
    </div>
  );
}

export default NavBar;

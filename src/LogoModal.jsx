// src/LogoModal.jsx
import React from "react";
import "./LogoModal.css"; 

const LogoModal = ({ logo, onClose }) => {
  if (!logo) return null;

  return (
    <div className="logo-modal-overlay" onClick={onClose}>
      <div className="logo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={logo.image} alt={logo.title} className="logo-full" />
        <h3>{logo.title}</h3>
        <p>{logo.description}</p>
      </div>
    </div>
  );
};

export default LogoModal;

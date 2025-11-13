import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mauro Sanchez Camps — Desarrollado con React.</p>
      <div className="socials">
        <a href="https://github.com/MauroSanchezCamps31" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/mauro-sanchez-camps-916879275/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;

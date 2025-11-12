import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mau — Desarrollado con ❤️ y React.</p>
      <div className="socials">
        <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;

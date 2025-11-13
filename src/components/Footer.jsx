import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Mauro Sanchez Camps — Desarrollado con React.
      </p>

      <div className="socials">
        <a
          href="https://github.com/MauroSanchezCamps31"
          target="_blank"
          rel="noreferrer"
          className="social-link github"
        >
          <FaGithub className="icon" /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mauro-sanchez-camps-916879275/"
          target="_blank"
          rel="noreferrer"
          className="social-link linkedin"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>

        <a
          href="https://wa.me/2617057408"
          target="_blank"
          rel="noreferrer"
          className="social-link whatsapp"
        >
          <FaWhatsapp className="icon" /> WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;

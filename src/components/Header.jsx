import React from "react";
import "../styles/Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const header = document.querySelector(".header");

    if (section && header) {
      const headerHeight = header.offsetHeight;
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Mauro Sanchez Camps</h1>

        <nav className="header-nav">
          <button onClick={() => scrollToSection("about")}>Sobre mí</button>
          <button onClick={() => scrollToSection("projects")}>Proyectos</button>
          <button onClick={() => scrollToSection("contact")}>Contacto</button>
        </nav>

        <a
          href="/cv-mauro-sanchez.pdf"
          download="Mauro-Sanchez-CV.pdf"
          className="download-btn"
        >
          Descargar CV
        </a>
      </div>
    </header>
  );
};

export default Header;

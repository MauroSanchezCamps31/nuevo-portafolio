import React from "react";
import "../styles/Header.css";

const Header = () => {
  // Función que maneja el desplazamiento suave
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <h1>Portafolio de Mauro Sanchez Camps</h1>
      <nav>
        {/* En lugar de href, usamos botones para controlar el scroll */}
        <button onClick={() => scrollToSection("about")}>Sobre mí</button>
        <button onClick={() => scrollToSection("projects")}>Proyectos</button>
        <button onClick={() => scrollToSection("contact")}>Contacto</button>
      </nav>
    </header>
  );
};

export default Header;

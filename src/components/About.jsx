import React from "react";
import "../styles/About.css";
import profile from "../assets/profile.jpg";
import { useFadeIn } from "../hooks/useFadeIn";

const About = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section fade-in ${isVisible ? "visible" : ""}`}
    >
      <div className="about-container">
        <img src={profile} alt="Mau" className="profile-img" />
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy <strong>Mau</strong>, desarrollador frontend apasionado por crear
            experiencias web limpias, funcionales y visualmente atractivas.  
            Me encanta trabajar con React, JavaScript y diseño UX/UI.
          </p>
          <p>
            En este portafolio encontrarás algunos de mis proyectos recientes, donde combino
            código bien estructurado con diseño moderno.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

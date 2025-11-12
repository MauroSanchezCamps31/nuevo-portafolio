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
            Me llamo Mauro y soy desarrollador web con experiencia, autodidacta e innovador, siempre en busca de nuevas formas de aprender y crecer profesionalmente. Me gradué del curso de Desarrollador Full Stack en Digital House, donde adquirí los fundamentos del desarrollo web, incluyendo HTML, CSS, Tailwind CSS, JavaScript, React, Node.js y MySQL. Cuento con un nivel intermedio de inglés, lo que me permite comunicarme y colaborar con clientes y colegas de distintos países. La inteligencia artificial es mi principal herramienta, que utilizo para optimizar proyectos, aprender nuevas tecnologías y mejorar mi productividad. Mis intereses personales incluyen tecnología, fútbol, música, política y economía, y estoy seguro de que puedo aportar un valor significativo a su empresa, por lo que agradecería la oportunidad de conversar más a fondo sobre cómo mis habilidades y experiencia pueden contribuir a sus proyectos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useFadeIn } from "../hooks/useFadeIn";
import "../styles/ProjectCard.css";

const Projects = () => {
  const [ref, isVisible] = useFadeIn();

  const projectData = [
    {
      title: "Diseño Web - Tienda Online",
      description:
        "Desarrollo completo de una tienda online con React y Node.js.",
      image: `${process.env.PUBLIC_URL}/images/CapturaConcesionaria.png`,
      link: "https://miproyecto1.com",
    },
    {
      title: "Landing Page - Agencia Creativa",
      description:
        "Diseño moderno y responsivo para una agencia de marketing digital.",
      image: `${process.env.PUBLIC_URL}/images/CapturaDBZ.png`,
      link: "https://miproyecto2.com",
    },
    {
      title: "App de Tareas",
      description:
        "Aplicación de gestión de tareas con persistencia local y diseño minimalista.",
      image: `${process.env.PUBLIC_URL}/images/CapturaKiosco.png`,
      link: "https://miproyecto3.com",
    },
    {
      title: "App de Tareas",
      description:
        "Aplicación de gestión de tareas con persistencia local y diseño minimalista.",
      image: `${process.env.PUBLIC_URL}/images/CapturaMLiebre.png`,
      link: "https://miproyecto3.com",
    },
    {
      title: "App de Tareas",
      description:
        "Aplicación de gestión de tareas con persistencia local y diseño minimalista.",
      image: `${process.env.PUBLIC_URL}/images/CapturaSimpsons.png`,
      link: "https://miproyecto3.com",
    },
    {
      title: "App de Tareas",
      description:
        "Aplicación de gestión de tareas con persistencia local y diseño minimalista.",
      image: `${process.env.PUBLIC_URL}/images/CapturaMundial.png`,
      link: "https://miproyecto3.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects-section fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index} // 👈 se pasa el índice para calcular el delay
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

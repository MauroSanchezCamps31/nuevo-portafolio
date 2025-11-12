import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useFadeIn } from "../hooks/useFadeIn";
import "../styles/ProjectCard.css";

const Projects = () => {
  const [ref, isVisible] = useFadeIn();

  const projectData = [
    {
      title: "Concesionaria",
      description:
        "Concesionaria es un proyecto desarrollado en equipo junto a mis compañeros del curso de Digital House. Fue creado en 2023 utilizando Express, SQL y JavaScript. Por cuestiones de despliegue, actualmente el proyecto puede visualizarse únicamente clonando el repositorio desde mi GitHub.",
      image: `${process.env.PUBLIC_URL}/images/CapturaConcesionaria.png`,
     
    },
    {
      title: "Dragon Ball",
      description:
        "Dragon Ball es un proyecto individual dirigido a fanáticos, donde se pueden explorar las diferentes sagas y consultar la cantidad de poder de cada personaje. Fue desarrollado utilizando React y Tailwind CSS.",
      image: `${process.env.PUBLIC_URL}/images/CapturaDBZ.png`,
      link: "https://dragon-ball-wine-chi.vercel.app/",
    },
    {
      title: "Kiosco",
      description:
        "Es un proyecto desarrollado en React, y es uno de mis favoritos porque permite usar un carrito de compras completamente funcional. Actualmente, el proyecto está en uso real por mi prima para gestionar su kiosco.",
      image: `${process.env.PUBLIC_URL}/images/CapturaKiosco.png`,
      link: "https://kiosco-prima-i5wd.vercel.app/",
    },
    {
      title: "Mercado Liebre",
      description:
        "Es el primer proyecto que realicé utilizando JavaScript. Es un sitio estático desarrollado durante el curso de Digital House. Originalmente lo publiqué a través del hosting de Render, pero debido al tiempo ya no está disponible en línea, por lo que actualmente puede consultarse únicamente en mi GitHub.",
      image: `${process.env.PUBLIC_URL}/images/CapturaMLiebre.png`,
      
    },
    {
      title: "Los Simpsons",
      description:
        "Es un proyecto individual dirigido a fanáticos, desarrollado con React y Tailwind CSS. Es un proyecto divertido donde se pueden encontrar trivias y frases de los personajes. Debido a su tamaño, no ha sido posible subirlo en línea, por lo que actualmente solo puede consultarse clonando el repositorio desde mi GitHub.",
      image: `${process.env.PUBLIC_URL}/images/CapturaSimpsons.png`,
      link: "https://miproyecto3.com",
    },
    {
      title: "Mundiales de Fútbol",
      description:
        "Es un proyecto individual desarrollado en React, donde se pueden consultar las estadísticas de los distintos mundiales de fútbol.",
      image: `${process.env.PUBLIC_URL}/images/CapturaMundial.png`,
      link: "https://mundiales-soccer.vercel.app/",
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

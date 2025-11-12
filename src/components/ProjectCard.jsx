import React from "react";
import "../styles/ProjectCard.css";
import { useFadeIn } from "../hooks/useFadeIn";

const ProjectCard = ({ image, title, description, link }) => {
  const [ref, isVisible] = useFadeIn(); // usamos el hook aquí

  return (
    <div
      ref={ref}
      className={`project-card fade-in ${isVisible ? "visible" : ""}`}
    >
      <img src={image} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

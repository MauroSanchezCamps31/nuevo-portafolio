import React from "react";
import "../styles/Contact.css";
import { useFadeIn } from "../hooks/useFadeIn";

const Contact = () => {
  // hook del efecto fade-in
  const [ref, isVisible] = useFadeIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! ✨");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2>Contacto</h2>
      <p>¿Tienes un proyecto o idea en mente? ¡Hablemos!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" rows="5" placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import { useFadeIn } from "../hooks/useFadeIn";

const Contact = () => {
  const [ref, isVisible] = useFadeIn();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5fji6rb", // 👈 Reemplaza con tu Service ID
        "template_g1r33s4", // 👈 Reemplaza con tu Template ID
        formRef.current,
        "8yR8DnPHsJ44ckRmR"     // 👈 Reemplaza con tu Public Key
      )
      .then(
        () => {
          alert("✅ ¡Mensaje enviado con éxito! Te contactaré pronto.");
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error);
          alert("❌ Hubo un problema al enviar el mensaje.");
        }
      );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2>Contacto</h2>
      <p>¿Tienes un proyecto o idea en mente? ¡Hablemos!</p>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" rows="5" placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;

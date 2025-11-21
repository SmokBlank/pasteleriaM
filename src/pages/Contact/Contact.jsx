import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contáctanos</h1>
        <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Dirección</h3>
              <p>Calle Dulce 123, Colonia Postres<br />Ciudad, CP 12345</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Teléfono</h3>
              <p>+1 (234) 567-8900</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>info@dolcetentazione.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div>
              <h3>Horario</h3>
              <p>Lunes - Viernes: 9:00 - 20:00<br />
                 Sábado: 8:00 - 22:00<br />
                 Domingo: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Envíanos un Mensaje</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Dolce Tentazione</h3>
          <p>Los pasteles más deliciosos hechos con amor y los mejores ingredientes.</p>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📞 +1 234 567 890</p>
          <p>📧 info@dolcetentazione.com</p>
          <p>📍 Dirección: Calle Dulce 123, Ciudad</p>
        </div>
        
        <div className="footer-section">
          <h4>Horario</h4>
          <p>Lunes - Viernes: 9:00 - 20:00</p>
          <p>Sábado: 8:00 - 22:00</p>
          <p>Domingo: 10:00 - 18:00</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Dolce Tentazione. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
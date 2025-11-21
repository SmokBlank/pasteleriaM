import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Sobre Nosotros</h1>
        <p>Conoce la historia detrás de Dolce Tentazione</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Nuestra Historia</h2>
            <p>
              Dolce Tentazione nació en 2010 con una simple misión: crear los pasteles 
              más deliciosos que jamás hayas probado. Lo que comenzó como un pequeño 
              negocio familiar ha crecido hasta convertirse en una pastelería de 
              referencia en la ciudad.
            </p>
            <p>
              Cada día, nuestros chefs combinan técnicas tradicionales con innovación 
              para ofrecerte experiencias únicas en cada bocado. Creemos que un buen 
              pastel puede hacer cualquier día especial.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/hero-pasteles.jpg" alt="Nuestra Pastelería" />
          </div>
        </div>

        <div className="values-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Calidad</h3>
              <p>Usamos solo ingredientes frescos y de la más alta calidad en cada uno de nuestros productos.</p>
            </div>
            <div className="value-card">
              <h3>Pasión</h3>
              <p>Amamos lo que hacemos y eso se refleja en cada detalle de nuestros pasteles.</p>
            </div>
            <div className="value-card">
              <h3>Innovación</h3>
              <p>Constantemente creamos nuevas recetas y sabores para sorprenderte.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
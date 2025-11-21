import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dolce Tentazione</h1>
          <p>Descubre la tentación en cada bocado. Pasteles artesanales hechos con los ingredientes más finos y mucho amor.</p>
          <Link to="/products" className="cta-button">
            Ver Nuestros Pasteles
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/hero-pasteles.jpg" alt="Pasteles Deliciosos" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎂</div>
              <h3>Ingredientes Premium</h3>
              <p>Utilizamos solo los mejores ingredientes frescos y de calidad.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Chefs Expertos</h3>
              <p>Nuestros pasteleros tienen años de experiencia creando delicias.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Entrega Rápida</h3>
              <p>Recibe tus pasteles frescos en la puerta de tu casa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
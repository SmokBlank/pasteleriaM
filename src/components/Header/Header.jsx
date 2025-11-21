import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon">🍰</span>
            Dolce Tentazione
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/products" className="nav-link">Pasteles</Link>
          <Link to="/about" className="nav-link">Nosotros</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </div>

        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
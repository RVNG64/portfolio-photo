import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Hervé Nguetsop
        </Link>
        <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="navbar-item" onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/projects" className="navbar-item" onClick={toggleMenu}>
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-item" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

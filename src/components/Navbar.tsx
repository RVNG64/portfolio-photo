import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Hervé Nguetsop
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-item">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/projects" className="navbar-item">
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

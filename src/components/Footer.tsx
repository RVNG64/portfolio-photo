import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <a href="mailto:contact@herveng.com" className="link footer__contact-item">
          <FontAwesomeIcon icon={faEnvelope} size='lg'/>
        </a>
        <a href="tel:+33665511993" className="link footer__contact-item">
          <FontAwesomeIcon icon={faPhone} size='lg'/>
        </a>
        <a href="https://www.instagram.com/hervenguetsop/" target="_blank" rel="noopener noreferrer" className="link footer__contact-item">
          <FontAwesomeIcon icon={faInstagram} size='lg'/>
        </a>
      </div>
      <div className="footer__links">
        <Link to="/" className="link">Accueil</Link>
        <Link to="/projects" className="link">Galerie</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>
      <br />
      <div className="footer__about">
        <div className="footer__bio">
          <span>&copy; 2023 - Hervé Nguetsop. Tous droits réservés.</span>
          <span className='footer__developer'>Site créé par <a href="https://herveng.com" target="_blank" rel="noopener noreferrer" className="link">herveng.com</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

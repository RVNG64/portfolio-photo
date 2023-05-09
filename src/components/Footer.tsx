import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <a href="mailto:contact@herveng.com" className="link footer__contact-item">
          contact@herveng.com
        </a>
        <a href="tel:+33665511993" className="link footer__contact-item">
          +33 6 65 51 19 93
        </a>
        <a href="https://www.instagram.com/hervenguetsop/" target="_blank" rel="noopener noreferrer" className="link footer__contact-item">
          Instagram
        </a>
      </div>
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

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import '../components/Contact.css';

const iconVariants = {
  initial: { x: -50, opacity: 0 },
  loaded: { x: 0, opacity: 1 },
};

const Contact = () => {
  const phoneNumber = "+336 65 51 19 93";
  const email = "herve.nguetsop@gmail.com";
  const instagramUrl = "https://instagram.com/hervenguetsop";

  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <div className="contact-icons">
        <motion.div
          className="icon-container"
          variants={iconVariants}
          initial="initial"
          animate="loaded"
          transition={{ delay: 0.1 }}
        >
          <a href={`tel:${phoneNumber}`} className="contact-icon">
            📞
            <span className="contact-info">{phoneNumber}</span>
          </a>
        </motion.div>

        <motion.div
          className="icon-container"
          variants={iconVariants}
          initial="initial"
          animate="loaded"
          transition={{ delay: 0.2 }}
        >
          <a href={`mailto:${email}`} className="contact-icon">
            📧
            <span className="contact-info">{email}</span>
          </a>
        </motion.div>

        <motion.div
          className="icon-container"
          variants={iconVariants}
          initial="initial"
          animate="loaded"
          transition={{ delay: 0.3 }}
        >
          <a href={instagramUrl} className="contact-icon">
            📷
            <span className="contact-info">@hervenguetsop</span>
          </a>
        </motion.div>
      </div>

      <WhatsAppWidget phoneNumber={phoneNumber} companyName="Hervé" replyTimeTyping="Répond généralement dans l'heur" message="Hello! 👋🏿 Comment puis-je vous aider?" sendButtonText="Envoyer" inputPlaceHolder="Votre message" />
    </div>
  );
};

export default Contact;

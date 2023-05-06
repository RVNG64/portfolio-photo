import React from 'react';
import { motion } from 'framer-motion';
import '../components/Contact.css';

const inputVariants = {
  initial: { x: -50, opacity: 0 },
  loaded: { x: 0, opacity: 1 },
};

const Contact = () => {
  return (
    <div className="form-container">
      <h1>Contact</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            variants={inputVariants}
            initial="initial"
            animate="loaded"
            transition={{ delay: 0.1 }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            variants={inputVariants}
            initial="initial"
            animate="loaded"
            transition={{ delay: 0.1 }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Sujet :</label>
          <motion.input
            type="text"
            id="subject"
            name="subject"
            variants={inputVariants}
            initial="initial"
            animate="loaded"
            transition={{ delay: 0.1 }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <motion.textarea
            id="message"
            name="message"
            variants={inputVariants}
            initial="initial"
            animate="loaded"
            transition={{ delay: 0.1 }}
          />
        </div>
        <button className="contact-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;

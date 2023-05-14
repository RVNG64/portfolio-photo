import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../components/Contact.css';

const inputVariants = {
  initial: { x: -50, opacity: 0 },
  loaded: { x: 0, opacity: 1 },
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await axios.post('http://localhost:5000/send', formData);

      if (res.data === 'Success') {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
      {isSubmitted && <p>Merci ! Votre message a bien été envoyé.</p>}
    </div>
  );
};

export default Contact;

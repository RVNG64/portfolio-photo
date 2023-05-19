import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Bio.css';

const Bio = () => {
  return (
    <div className='bio-parent-container'>
      <div className='bio-specialties'>
        Evénements  •  Art  •  Sport  •  Mariage  •  Entreprise
      </div>
      <div className="bio-container">
        <div className="bio-content">
          <Fade direction="left" >
            <div className="bio-text-container">
              <h2 className="bio-title">Bonjour, je suis Hervé !</h2>
              <p className="bio-text">Créateur de startup et développeur web, je me suis formé à la photographie en autodidacte en 2021. Basé au Pays Basque mais mobile, j'aime capturer des moments uniques et raconter des histoires à travers mes photographies.</p><br />
              <p className="bio-text">Photographe pour la Scène Nationale depuis 2 saisons et durant divers événements sportifs notamment, j'aime faire ressortir l'émotion de chaque photo que je prends.</p><br />
            </div>
          </Fade>
          <Fade direction="right" >
            <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1682276004/HervePortraitsStudio20211006BD-1_cv8rq4.jpg" alt="Hervé Nguetsop" className="bio-photo" />
          </Fade>
        </div>
      </div>
      <Fade direction="up" >
        <button className='gallery-button'>
          <a href="/projects">Visiter la Galerie Photos</a>
        </button>
      </Fade>
    </div>
  );
};

export default Bio;

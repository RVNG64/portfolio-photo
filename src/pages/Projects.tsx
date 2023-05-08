import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import PhotoMosaic from 'components/PhotoMosaic';

const Projects = () => {
  return (
    <div>
      <h1>Galerie de projets</h1>
      <p>
        Voici une sélection de mes projets photographiques les plus récents et les plus marquants. Cliquez sur un projet pour en savoir plus et pour voir la galerie complète.
      </p>
      <PhotoCarousel />
      <PhotoMosaic />
    </div>
  );
};

export default Projects;

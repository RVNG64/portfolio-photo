import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import PhotoMosaic from 'components/PhotoMosaic';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Galerie</h1>
      <PhotoCarousel />
      <PhotoMosaic />
    </div>
  );
};

export default Projects;

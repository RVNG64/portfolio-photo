import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import ImageGallery from '../components/ImageGallery';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Galerie</h1>
      <PhotoCarousel />
      <ImageGallery />
    </div>
  );
};

export default Projects;

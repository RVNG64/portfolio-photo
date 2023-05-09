import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold tracking-wider">
          Hervé Nguetsop
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors duration-200">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/projects"
              className="hover:text-gray-300 transition-colors duration-200">
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/contact"
              className="hover:text-gray-300 transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

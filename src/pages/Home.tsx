import React from 'react';
import Header from '../components/Header';
import PhotoMosaic from 'components/PhotoMosaic';
import Bio from 'components/Bio';

const Home = () => {
  return (
    <>
      <Header />
      <Bio />
      <PhotoMosaic />
    </>
  );
};

export default Home;

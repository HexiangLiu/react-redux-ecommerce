import React from 'react';
import './Hero.scss';

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="banner">
        <h1 className="heading--1">Lots to love. Less to spend</h1>
        <h3 className="heading--3">Check out our newest products</h3>
        {children}
      </div>
    </div>
  );
};

export default Hero;

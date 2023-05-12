import React from 'react';

import { PortfolioGrid } from './Portfolio.style';

import naval from '../../../assets/media/pictures/naval-arquitectura.png';

function Portfolio() {
  return (
    <PortfolioGrid>
      <h1>Portfolio</h1>
      <div>
        <img src={naval} alt='naval arquitectura' />
        <h3>Naval Arquitectura</h3>
      </div>
    </PortfolioGrid>
  );
};

export default Portfolio
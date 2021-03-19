import React from 'react';
import { StyledHomeSection } from './HomeScreen.styled';

const HomeScreen = () => {
  return (
    <StyledHomeSection>
      <img src='/img/receive-money.png' alt='A hand fanning out money.' />
      <h1>
        We've Found<span className='display-block'>Your Money</span>
      </h1>
      <p>
        We audit public records and search for unclaimed funds held by
        government agencies and owed to private individuals.
      </p>
      <button>Call Today</button>
      <h3>
        If we've contacted you, we believe we've located{' '}
        <span className='display-block'>funds that belong to you!</span>
      </h3>
    </StyledHomeSection>
  );
};

export default HomeScreen;

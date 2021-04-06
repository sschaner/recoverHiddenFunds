import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHomeSection } from './HomeScreen.styled';

const HomeScreen = () => {
  return (
    <StyledHomeSection>
      <img
        src='/img/receive-money.png'
        alt='A hand fanning out money.'
        className='home-img'
      />
      <h2 className='home-title-small'>We've Found</h2>
      <h1 className='home-title-large'>Your Money</h1>
      <p className='home-description'>
        We audit public records and search for unclaimed funds held by
        government agencies and owed to private individuals.
      </p>
      <NavLink to='/contact' className='home-contact'>
        Contact Us
      </NavLink>
      <h4 className='home-believe'>
        If we've contact you, we believe we've located
      </h4>
      <h3 className='home-believe-2'>funds that belong to you!</h3>
    </StyledHomeSection>
  );
};

export default HomeScreen;

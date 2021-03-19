import React from 'react';
import { StyledCompanySection } from './CompanyScreen.styled';

const CompanyScreen = () => {
  return (
    <StyledCompanySection>
      <h1 className='company-title'>Who We Are</h1>
      <p className='company-intro'>
        Home Auction Refunds is a small group of abandoned money professionals
        located in Michigan. If you’ve been contacted by us, it’s because we’ve
        found funds being held by the government that may be rightfully yours.
      </p>
      <p className='company-ins-and-outs'>
        We know the “ins and outs” of government agencies in all states. If a
        government agency is holding your funds, we know how to get them!
      </p>
      <p className='company-escheat'>
        If a claim for your funds isn’t made in time, the funds often “escheat”
        to the agency holding them. This means you can no longer claim them. Our
        mission is to ensure that this never happens.{' '}
      </p>
      <img
        className='teamwork-photo'
        src='/img/teamwork.jpg'
        alt='Hands on top of each other.'
      />
      <h3 className='company-contacted-you '>
        If we've contacted you,{' '}
        <span className='display-block'>we believe we've located</span>
        <span className='display-block'>funds that belong to you!</span>
      </h3>
    </StyledCompanySection>
  );
};

export default CompanyScreen;

import React from 'react';
import { StyledProcessSection } from './ProcessScreen.styled';

const ProcessScreen = () => {
  return (
    <StyledProcessSection>
      <h1 className='process-title'>How Does This Work?</h1>
      <p className='process-step-one'>
        We audit government agencies across the country to locate sums of money
        owed to private individuals and companies like you. If these funds go
        unclaimed for too long, they are usually lost to the government agency
        holding them.
      </p>
      <p className='process-step-two'>
        Once we find funds that we believe belong to you, we contact you.
      </p>
      <p className='process-step-three'>
        If a claim for your funds isn’t made in time, the funds often “escheat”
        to the agency holding them. This means you can no longer claim them. Our
        mission is to ensure that this never happens.
      </p>
      <p className='process-step-four'>
        After receiving our paperwork package, we will send a local notary to
        collect it and overnight it back to our office. Claims are usually
        processed in 3 - 4 months, depending on the complexity of the case. Your
        share of the claim, typically 60 - 70% of the funds collected, are
        remitted to you within 30 days of receipt.
      </p>
      <p className='process-step-five'>
        Our firm works on a contingent basis. There are no out-of-pocket
        expenses to you. We’re paid only upon successful collection of your
        claim. We cover all expenses related to the claim until it’s paid. If
        the claim is unsuccessful, you owe us nothing.
      </p>
      <img
        className='search-photo'
        src='/img/search.jpg'
        alt='A laptop on a desk.'
      />
      <h3 className='process-contacted-you '>Contact us back today!</h3>
    </StyledProcessSection>
  );
};

export default ProcessScreen;

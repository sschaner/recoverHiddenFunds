import React from 'react';
import { StyledContactSection } from './ContactScreen.styled';

const ContactScreen = () => {
  return (
    <StyledContactSection>
      <h1 className='contact-title'>Contact Us</h1>

      <div className='member-one-container'>
        <img
          className='member-photo'
          src='/img/woman.jpg'
          alt='Gynell Schaner.'
        />
        <h5>Gynell Schaner</h5>
        <p>Claims Representative</p>
        <p>
          <a href='mailto:gynell@recoverhiddenfunds.com'>
            gynell@recoverhiddenfunds.com
          </a>
        </p>
        <p>
          <a href='tel:248-320-9095'>(248) 320 - 9095</a>
        </p>
      </div>

      <div className='member-two-container'>
        <img
          className='member-photo'
          src='/img/man.jpg'
          alt='Steven Schaner.'
        />
        <h5>Steven Schaner</h5>
        <p>Claims Representative</p>
        <p>
          <a href='mailto:steven@recoverhiddenfunds.com'>
            steven@recoverhiddenfunds.com
          </a>
        </p>
        <p>
          <a href='tel:616-402-4602'>(616) 402 - 4602</a>
        </p>
      </div>

      <p className='contact-paragraph-one'>
        If the local, state, or federal government really owed you thousands of
        dollars, do you think they would make it easy to find? If so, the money
        would escheat to the government after a few years. This means that the
        money would become theirs and you no longer have claim to it.
      </p>
      <p className='contact-paragraph-two'>
        With all the unclaimed funds websites out there, at most you will find
        up to a couple hundred dollars. The big clais are tucked away and
        unsearchable unless you know exactly what you are looking for and where
        to look.
      </p>
      <p className='contact-paragraph-three'>
        You can try to locate these funds on your own but we are experts and it
        is even challenging for us to find them. Contact us back today so we can
        help you recover your hidden funds.
      </p>
    </StyledContactSection>
  );
};

export default ContactScreen;

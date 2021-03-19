import React from 'react';
import { StyledFAQSection } from './FAQScreen.styled';

const FAQScreen = () => {
  return (
    <StyledFAQSection>
      <h1 className='faq-title'>FAQ</h1>
      <h5 className='question-one'>How did you find this money?</h5>
      <p className='answer-one'>
        We audit different government agencies on a regular basis for unclaimed
        funds due to citizens like yourself.
      </p>
      <h5 className='question-two'>How did you find me?</h5>
      <p className='answer-two'>
        We usually locate our clients from internet searches.
      </p>
      <h5 className='question-three'>
        How much is my claim and where is it held?
      </h5>
      <p className='answer-three'>
        Once you have signed our contingency fee agreement, we’ll be happy to
        disclose where the funds have been located.
      </p>
      <h5 className='question-four'>Can’t I find the money on my own?</h5>
      <p className='answer-four'>
        The governmental agencies we audit typically do not post these unclaimed
        funds accounts online.
      </p>
      <h5 className='question-five'>Why should I use your company?</h5>
      <p className='answer-five'>
        Most of the assets we locate aren’t available by searching the internet.
        It’s unlikely that without the aid of our company, you’ll be notified of
        their existence by the agency holding them.
      </p>
      <h5 className='more-questions-title'>More questions?</h5>
      <p className='more-questions'>
        Just give us a call. We’re here to serve you. Call (616) 402 - 4602.
      </p>

      <img
        className='faq-photo'
        src='/img/faq.jpg'
        alt='A man calling on a student who is raising his hand.'
      />
    </StyledFAQSection>
  );
};

export default FAQScreen;

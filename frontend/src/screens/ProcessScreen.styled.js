import styled from 'styled-components';

export const StyledProcessSection = styled.div`
  grid-template-areas:
    'processTitle'
    'processPhoto'
    'processStep1'
    'processStep2'
    'processStep3'
    'processStep4'
    'processStep5'
    'contactedYou';

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-areas:
      'processTitle processTitle'
      'processStep1 processPhoto'
      'processStep2 processPhoto'
      'processStep3 processPhoto'
      'processStep4 processStep4'
      'processStep5 processStep5'
      'contactedYou contactedYou';
  }

  @media (min-width: 1400px) {
    grid-template-columns: auto 5% auto;
    grid-template-areas:
      'processTitle processTitle ProcessTitle'
      'processStep1 . processPhoto'
      'processStep2 . processPhoto'
      'processStep3 . processPhoto'
      'processStep4 processStep4 processStep4'
      'processStep5 processStep5 processStep5'
      'contactedYou contactedYou contactedYou';
  }

  .process-title {
    grid-area: processTitle;
    font-size: 2rem;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 3rem;
    }
  }

  .search-photo {
    grid-area: processPhoto;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 400px;
    }
  }

  .process-step-one {
    grid-area: processStep1;
  }

  .process-step-two {
    grid-area: processStep2;
  }

  .process-step-three {
    grid-area: processStep3;
  }

  .process-step-four {
    grid-area: processStep4;
  }

  .process-step-five {
    grid-area: processStep5;
  }

  .process-contacted-you {
    grid-area: contactedYou;
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondaryColor};
  }

  p {
    line-height: 1.5rem;
  }
`;

import styled from 'styled-components';

export const StyledContactSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-left: 155px;
  }
  grid-template-areas:
    'contactTitle'
    'member1'
    'member2'
    'contactParagraph1'
    'contactParagraph2'
    'contactParagraph3';

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-areas:
      'contactTitle contactTitle'
      'member1 member2'
      'contactParagraph1 contactParagraph1'
      'contactParagraph2 contactParagraph2'
      'contactParagraph3 contactParagraph3';
  }

  .contact-title {
    grid-area: contactTitle;
    font-size: 1.25rem;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2rem;
    }
  }

  .member-one-container,
  .member-two-container {
    text-align: center;
    place-self: center;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 50%;
    }
  }

  .member-one-container {
    grid-area: member1;
  }

  .member-two-container {
    grid-area: member2;
  }

  .contact-paragraph-one {
    grid-area: contactParagraph1;
  }

  .contact-paragraph-two {
    grid-area: contactParagraph2;
  }

  .contact-paragraph-three {
    grid-area: contactParagraph3;
  }

  .member-photo {
    width: 50%;
    margin: 0 auto;
    border: 5px solid ${({ theme }) => theme.primaryColor};
  }

  p {
    line-height: 1.5rem;
  }
`;

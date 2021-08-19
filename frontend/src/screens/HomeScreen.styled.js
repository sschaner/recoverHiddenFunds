import styled from 'styled-components';

export const StyledHomeSection = styled.div`
  margin-top: 2rem;
  margin-right: 0rem;
  display: grid;
  grid-gap: 0.5rem;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-left: 155px;
  }
  grid-template-areas:
    'homeTitleSmall'
    'homeTitleLarge'
    'homeImage'
    'homeDescription'
    'homeContact'
    'homeBelieve'
    'homeBelieve2';

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-areas:
      '. homeImage'
      'homeTitleSmall homeImage'
      'homeTitleLarge homeImage'
      'homeDescription homeImage'
      'homeContact homeImage'
      'homeBelieve homeBelieve'
      'homeBelieve2 homeBelieve2';
  }

  .home-title-small {
    grid-area: homeTitleSmall;
    font-size: 1.75rem;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      font-size: 2rem;
    }
  }

  .home-title-large,
  .home-believe-2 {
    color: ${({ theme }) => theme.secondaryColor};
  }

  .home-title-large {
    grid-area: homeTitleLarge;
    font-size: 2.5em;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      font-size: 3rem;
    }
  }

  .home-img {
    grid-area: homeImage;
    justify-self: end;
    max-width: 278px;
  }

  .home-description {
    grid-area: homeDescription;
    line-height: 1.5rem;
  }

  .home-contact {
    grid-area: homeContact;
    margin: 2rem auto;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      margin-left: 0;
    }
    padding: 5px 10px;
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.white};

    &:hover {
      @media (min-width: ${({ theme }) => theme.desktop}) {
        background: ${({ theme }) => theme.secondaryColor};
      }
    }
  }

  .home-believe,
  .home-believe-2 {
    text-align: center;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      text-align: left;
    }
  }

  .home-believe {
    grid-area: homeBelieve;
    font-weight: 300;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      font-size: 1.5rem;
    }
  }

  .home-believe-2 {
    grid-area: homeBelieve2;
    font-size: 1.25rem;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      font-size: 2rem;
    }
  }
`;

import styled from 'styled-components';

export const StyledCompanySection = styled.div`
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin-left: 160px;
    }
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'companyTitle'
    'teamworkPhoto'
    'intro'
    'insAndOuts'
    'escheat'
    'contactedYou';

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-areas:
      'companyTitle teamworkPhoto'
      'intro teamworkPhoto'
      'insAndOuts teamworkPhoto'
      'escheat teamworkPhoto'
      'contactedYou contactedYou';
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-areas:
      'companyTitle teamworkPhoto'
      'intro teamworkPhoto'
      'insAndOuts teamworkPhoto'
      'escheat teamworkPhoto'
      'contactedYou contactedYou';
  }

  @media (min-width: 1200px) {
    grid-template-columns: auto 10% auto;
    grid-template-areas:
      'companyTitle . teamworkPhoto'
      'intro . teamworkPhoto'
      'insAndOuts . teamworkPhoto'
      'escheat . teamworkPhoto'
      'contactedYou contactedYou contactedYou';
  }

  @media (min-width: 1479px) {
    grid-template-columns: auto 15% auto;
  }

  .company-title {
    grid-area: companyTitle;
    font-size: 3rem;
  }

  .teamwork-photo {
    grid-area: teamworkPhoto;
    margin: 0 auto;
    width: 65%;

    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 50%;
    }

    @media (min-width: ${({ theme }) => theme.tablet}) {
      margin: 0;
      width: 330px;
    }


    ${'' /* @media (min-width: 840px) {
      width: 75%;
    } */}

    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 315px;
    }

    }
  }

  .company-intro,
  .company-ins-ands-outs,
  .company-escheat, {
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 80%;
    }
  }

  .company-intro {
    grid-area: intro;
  }

  .company-ins-and-outs {
    grid-area: insAndOuts;
  }

  .company-escheat {
    grid-area: escheat;
  }

  .company-contacted-you {
    grid-area: contactedYou;
    text-align: center;

    span + span {
      font-size: 1.5rem;
      margin: 1rem 0;
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  p {
    line-height: 1.5rem;
  }
`;

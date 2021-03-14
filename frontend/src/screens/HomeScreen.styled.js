import styled from 'styled-components';

export const StyledHomeSection = styled.div`
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
  }

  h1 {
    margin-top: 18rem;
    font-size: 2rem;
    font-weight: 400;

    span {
      font-weight: bold;
      font-size: 3rem;
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  button {
    margin: 2rem 0;
    background: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.white};

    &:hover {
      background: ${({ theme }) => theme.secondaryColor};
      border-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.white};
    }
  }

  h3 {
    font-weight: 400;

    span {
      color: ${({ theme }) => theme.secondaryColor};
      font-size: 1.2em;
      font-weight: bold;
      margin-top: 0.5rem;
    }
  }
`;

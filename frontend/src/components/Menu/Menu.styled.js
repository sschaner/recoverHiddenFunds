import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryColor};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  width: 100%;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    height: 65px;
    width: 100%;
    padding: 0;
    position: fixed;
    justify-content: left;
    transform: translateX(0);
  }

  .logo {
    padding: 3px 3px 3px 1rem;
    color: ${({ theme }) => theme.secondaryColor};

    @media (min-width: ${({ theme }) => theme.desktop}) {
      text-align: left;

      :hover {
        color: ${({ theme }) => theme.secondaryColor};
      }

      :hover::after {
        transform: scaleX(0);
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: flex;
    }

    li {
      padding: 2rem 0;
      text-align: center;

      @media (min-width: ${({ theme }) => theme.desktop}) {
        padding: 0.5rem 1rem;
      }
    }
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.secondaryColor};
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      --spacing: 0.1em;
      display: inline-block;
      position: relative;
      font-size: 1rem;

      &:hover {
        color: ${({ theme }) => theme.white};
      }

      :after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: var(--spacing);
        right: var(--spacing);
        height: 2px;
        background: ${({ theme }) => theme.secondaryColor};
        transform: scaleX(0);
        transition: transform 150ms ease-in-out;
      }

      :hover::after {
        transform: scaleX(1);
      }
    }
  }
`;

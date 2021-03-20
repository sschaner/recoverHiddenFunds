import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primaryColor};
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.display-block {
  display: block;
}

img {
  max-width: 100%;
  display: block;
}

section {
  margin: auto 1rem;


  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-top: 65px;
  }
  min-height: 80vh;

  div {
    
  }
}

button {
  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
      color: ${({ theme }) => theme.secondaryColor};
    }
}

footer {
  text-align: center;
  margin: 1rem 0;
}
`;

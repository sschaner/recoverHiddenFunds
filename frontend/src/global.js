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
  background: #ccc;
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
    margin: 65px 175px;
    }
  min-height: 80vh;
}

button {
  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
}

footer {
  text-align: center;
}
`;

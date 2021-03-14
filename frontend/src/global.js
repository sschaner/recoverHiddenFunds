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
`;

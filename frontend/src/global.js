import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --primary-color: #526044;
    --secondary-color: #cea176;
  }

html, body {
    margin: 0;
    padding: 0;
}

*, *::after, *::before {
    box-sizing: border-box;
}

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
